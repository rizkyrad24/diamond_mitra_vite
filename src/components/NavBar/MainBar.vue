<script setup>
import navaction from './navaction.vue';
import Loading from '../loading.vue';
import ModalFailed from '../modalfailed.vue';
import { convertDatetime } from '@/utils/helper';
</script>

<template>
  <Loading :is-visible="isLoading" />
  <ModalFailed
    :is-visible="modalFailed.isVisible"
    :title="modalFailed.title"
    :message="modalFailed.message"
    @close="closeModalFailed"
  />
  <div class="flex items-center justify-between w-auto h-[70px] bg-[#FFFFFF] border-b border-[#E5E7E9] bg-topographic">
    <div class="text-[20px] font-sans text-[#2671D9] font-medium py-5 px-4">
      Selamat Datang di DIAMOND
    </div>
    <div class="flex items-center space-x-4 pr-4">
      <div class="relative">
        <!-- Notification Button -->
        <button
          class="relative rounded-full hover:bg-[#F3F4F6] py-2"
          @click="showHistoryPopup = true"
        >
          <img
            src="@/assets/image/bell.png"
            class="w-[20px] h-[20px]"
          >
          <i class="fas fa-bell" />
        </button>
        <!-- Closed - Auditor Verified -->
        <div
          v-if="showHistoryPopup"
          class="fixed inset-0 flex items-center justify-center bg-[#1F2937] bg-opacity-50"
        >
          <div class="bg-[#FFFFFF] rounded-lg shadow-lg w-[90%] max-w-[656px] max-h-[90vh] overflow-y-auto">
            <div class="bg-[#E9F1FB] rounded-t-lg p-6 sticky top-0 z-10">
              <div class="flex justify-between items-center">
                <h2 class="text-[20px] font-sans font-semibold text-[#000000]">
                  Notifikasi
                </h2>
                <button
                  class="text-[#CCCCCC] text-[20px]"
                  @click="closePopup"
                >
                  &times;
                </button>
              </div>
            </div>
            <!-- Closed - Auditor Verified -->
            <div class="popup-content pt-5">
              <div
                v-for="(row, index) in notifList"
                :key="index"
                class="flex items-start w-[608px] h-auto ml-[24px] cursor-pointer"
                @click="selectSection(index)"
              >
                <div class="w-[80px] h-[50px] text-[14px] font-sans text-[#667085]">
                  <p>{{ convertDatetime(row.dateOfUpdate) }}</p>
                </div>
                <div
                  class="w-[2px] h-[200px] ml-[24px]"
                  :class="selected === index ? 'bg-[#2671D9]' : 'bg-[#E4E7EC]'"
                />
                <div class="w-[480px] ml-[24px]">
                  <div class="w-[432px] ml-[24px]">
                    <p
                      class="text-[18px] font-semibold"
                      :class="selected === index ? 'text-[#2671D9]' : 'text-[#333333]'"
                    >
                      {{ row.base }}
                    </p>
                    <p class="mt-2 text-[14px] font-semibold">
                      {{ row.partnershipTitle }}
                    </p>
                    <p class="mt-2 text-[14px] text-[#9C9C9C]">
                      {{ row.content }}
                    </p>
                    <p class="mt-2 text-[14px] font-semibold">
                      User
                    </p>
                    <p class="mt-2 text-[14px] text-[#9C9C9C] flex">
                      <span class="w-[66px]">User</span>
                      <span>: {{ row.fullName }}</span>
                    </p>
                    <p class="mt-2 text-[14px] text-[#9C9C9C] flex">
                      <span class="w-[66px]">Pelaksana</span>
                      <span>: {{ row.dispossedStaff }}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="flex items-center space-x-2 cursor-pointer"
        @click="actionDrop"
      >
        <!-- User Avatar -->
        <div class="w-[24px] h-[24px] bg-[#C7E5D7] text-[10px] font-sans rounded-full font-bold text-[#333333] flex items-center justify-center">
          J
        </div>
        <div class="text-[16px] text-[#666666] font-semibold font-sans">
          {{ fullName }}
        </div>
      </div>
      <navaction v-show="isAction" />
    </div>
  </div>
</template>

<script>
import { fetchGet } from '@/api/apiFunction';

export default {
  name: "MainBar",
  data() {
    return {
      showHistoryPopup: false,
      selected: null,
      isAction: false,
      fullName: '',
      notifList: [],
      isLoading: false,
      modalFailed: {
        isVisible: false,
        title: '',
        message: ''
      },
    };
  },
  mounted() {
    this.fullName = `${localStorage.getItem('firstName')} ${localStorage.getItem('lastName')}`;
    this.getDataApi();
  },
  methods: {
    selectSection(section) {
      this.selected = section;
    },
    closePopup() {
      this.showHistoryPopup = false;
    },
    actionDrop() {
      this.isAction = !this.isAction
    },
    closeModalFailed() {
      this.modalFailed = {
        isVisible: false,
        title: '',
        message: ''
      }
    },

    async getDataApi() {
      this.isLoading = true;
      const res = await fetchGet("history", null, this.$router);
      if (res.status == 200) {
          console.log(res.data)
          this.notifList = res.data;
          this.isLoading = false;
      } else {
          this.isLoading = false;
          this.modalFailed = {
            isVisible: true,
            title: 'Gagal',
            message: res.data.message ? res.data.message : "Silahkan hubungi admin"
          }
      }
    }
  }
};
</script>

<style scoped>
.popup-content {
  max-height: 500px; /* Batas tinggi maksimal konten popup */
  overflow-y: auto; /* Aktifkan scroll hanya pada sumbu Y */
  padding-right: 10px; /* Ruang untuk scrollbar */
}
/* Menyembunyikan scrollbar secara default */
.popup-content::-webkit-scrollbar {
  width: 0; /* Atur lebar scrollbar menjadi 0 untuk menyembunyikannya */
  background: transparent; /* Membuat background scrollbar transparan */
}
/* Menampilkan scrollbar saat di-scroll atau di-hover */
.popup-content:hover::-webkit-scrollbar {
  width: 8px; /* Tentukan lebar scrollbar saat muncul */
  background-color: rgba(0, 0, 0, 0.1); /* Beri background saat muncul */
}
.popup-content::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.3); /* Warna bagian dalam scrollbar */
  border-radius: 4px; /* Membuat ujung scrollbar melengkung */
}
.popup-content::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0.6); /* Warna scrollbar saat dihover */
}
.relative .absolute {
  right: 0;
  top: 100%;
  margin-top: 8px;
}
.bg-topographic {
  background-image: url("/src/assets/image/topographic.png");
  background-size: cover;
  background-position: center;
}
</style>
