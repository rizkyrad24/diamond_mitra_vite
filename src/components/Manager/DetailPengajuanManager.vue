<script setup>
import { dateParsing } from '@/utils/helper';
</script>

<template>
  <Loading :isVisible="isLoading" />
  <ModalFailed
    :isVisible="modalFailed.isVisible"
    :title="modalFailed.title"
    :message="modalFailed.message"
    @close="closeModalFailed"
  />
  <ModalSuccess :isVisible="modalSuccess.isVisible" :title="modalSuccess.title" :message="modalSuccess.message"
    @close="modalSuccess.closeFunction" />
  <ModalDialog :isVisible="modalDialog.isVisible" :title="modalDialog.title" :message="modalDialog.message"
    @close="modalDialog.closeFunction" @ok="modalDialog.okFunction" />
  <div>
    <div class="flex w-auto h-[54px] rounded-lg bg-[#FFFFFF] border-collapse">
      <button @click="navigateToDetail">
        <h1 class="w-[51px] h-[22px] font-sans text-[#2671D9] text-[14px] font-semibold ml-6 mt-4 mb-4">Masuk</h1>
      </button>
      <svg width="8" height="12" class="mt-[21px] ml-2 mr-2" viewBox="0 0 8 12" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
          d="M7.20711 5.29289C7.59763 5.68342 7.59763 6.31658 7.20711 6.70711L2.20711 11.7071C1.81658 12.0976 1.18342 12.0976 0.792892 11.7071C0.402369 11.3166 0.402369 10.6834 0.792892 10.2929L5.08579 6L0.792893 1.70711C0.402369 1.31658 0.402369 0.683417 0.792893 0.292893C1.18342 -0.0976314 1.81658 -0.0976313 2.20711 0.292893L7.20711 5.29289Z"
          fill="#7F7F80" />
      </svg>
      <span class="w-[119px] h-[22px] font-sans text-[#7F7F80] text-[14px] font-semibold mt-[17px]">Detail
        Pengajuan</span>
    </div>
    <div class="px-4 py-3">
      <div class="relative h-auto w-[1086px] rounded-lg bg-[#FFFFFF] border-collapse mx-auto">
        <div class="flex">
          <svg class="ml-4 mt-[10px]" width="6" height="28" viewBox="0 0 6 28" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect width="6" height="28" fill="#1F5AAD" />
          </svg>
          <h1 class="font-sans text-[20px] text-[#333333] mt-2 ml-[5px] font-semibold">Detail Pengajuan {{
            dataBerkas?.base || 'PKS' }}</h1>
        </div>
        <h1 class="items-start justify-center px-2 ml-2 text-[#9C9C9C]">{{ dataBerkas?.submissionNumber }}</h1>
        <button v-if="position == 'PartnershipManager'" @click="showDisposePopup = true" class="absolute top-[12px] right-[24px]">
          <div
            class="flex items-center justify-center w-[81px] h-[40px] rounded-lg bg-[#2671D9] hover:bg-[#1E5BB7] border-[1px] border-[#E5E7E9]">
            <span
              class="w-[57px] h-[22px] text-[14px] font-sans font-medium text-[#FFFFFF] ml-3 mt-[9px] mr-3 mb-[9px]">Dispose</span>
          </div>
        </button>
        <div v-if="showDisposePopup" class="fixed inset-0 flex items-center justify-center bg-[#1F2937] bg-opacity-50">
          <div class="bg-[#FFFFFF] rounded-lg shadow-lg w-[502px] h-[304px]">
            <div class="bg-[#E9F1FB] rounded-t-lg p-6">
              <div class="flex justify-between items-center">
                <h2 class="text-[20px] font-sans font-semibold text-[#000000]">Dispose Pengajuan</h2>
                <button @click="closePopup" class="text-[#4B5563] text-[20px]">&times;</button>
              </div>
            </div>
            <div class="p-6">
              <p class="text-[16px] font-sans text-[#333333] font-normal">Silakan pilih nama staff kemitraan untuk
                dispose pengajuan.</p>
              <label for="staffKemitraan" class="block mt-4 text-[16px] font-sans text-[#4D5E80] font-medium">Staff
                Kemitraan *</label>
              <div class="relative">
                <SelectSearch
                  :options="optionsStaff"
                  placeholder="Pilih staff..."
                  :initialValue="disposedStaff"
                  @change="handleSelectionChange"
                />
                <span class="absolute right-3 top-3 text-[#9C9C9C]">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mt-[2px]" viewBox="0 0 20 20"
                    fill="currentColor">
                    <path fill-rule="evenodd"
                      d="M12.9 14.32a8 8 0 111.414-1.415l3.705 3.704a1 1 0 01-1.414 1.415l-3.705-3.704zM8 14a6 6 0 100-12 6 6 0 000 12z"
                      clip-rule="evenodd" />
                  </svg>
                </span>
              </div>
            </div>
            <div class="flex justify-end mr-6">
              <button @click="closePopup"
                class="w-[50px] h-[40px] mr-3 p-2 rounded-lg bg-[#FFFFFF] hover:bg-[#FEE2E2] text-[#FF5656] font-sans text-[14px] font-semibold transition-all">Batal</button>
              <button @click="SendDispose" :disabled="!isStaffSelected"
                :class="isStaffSelected ? 'bg-[#2671D9] text-white hover:bg-[#1E5BB7]' : 'bg-[#E6E6E6] text-[#7F7F80]'"
                class="p-2 rounded-lg">Pilih</button>
            </div>
          </div>
        </div>
        <div
          class="flex items-center mt-4 ml-4 w-[1046px] h-[48px] rounded-lg bg-[#FFFFFF] border-[#E5E7E9] border-[1px]">
          <div class="w-[30px] h-[48px] bg-[#4791F2] rounded-tl-md rounded-bl-md"></div>
          <div class="text-[16px] font-sans font-semibold text-[#333333] ml-[10px] mt-[14.5px] mb-[14.5px]">Informasi
            Umum</div>
          <button @click="toggleDropdownArrow" class="ml-auto mr-4 flex py-1 px-1 rounded-full hover:bg-[#FFFFFF]">
            <svg :class="{ 'rotate-180': isDropdownArrowOpen }" class="w-4 h-4 text-[#2671D9]" fill="none"
              stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
        </div>
        <transition name="fade">
          <div v-if="isDropdownArrowOpen"
            class="flex flex-col w-[1046px] min-h-[320px] bg-[#FFFFFF] border-collapse rounded-bl-md rounded-br-md border-[#E5E7E9] border-[1px] ml-4 px-6 py-6">
            <div class="flex items-center">
              <h1 class="w-[130px] h-[17px] font-sans text-[#333333] text-[14px] font-semibold">No. Permintaan</h1>
              <span class="w-[92px] h-[17px] text-[#7F7F80] font-sans font-thin text-[14px] ml-4">{{
                dataBerkas?.submissionNumber }}</span>
              <div class="flex">
                <h1 class="w-[130px] h-[17px] font-sans text-[14px] text-[#333333] font-semibold ml-[300px]">Metode
                  Kemitraan</h1>
                <span class="w-[112px] h-[17px] font-sans font-thin text-[#7F7F80] text-[14px] ml-4">{{
                  dataBerkas?.partnershipMethod || '-' }}</span>
              </div>
            </div>
            <div class="flex mt-6 items-center">
              <h1 class="w-[130px] h-[17px] font-sans text-[#333333] text-[14px] font-semibold">Judul</h1>
              <span class="w-[182px] h-[17px] text-[#7F7F80] font-sans font-thin text-[14px] ml-4">{{
                dataBerkas?.partnershipTitle || '-' }}</span>
              <div class="flex ml-[1px]">
                <h1 class="w-[130px] h-[17px] font-sans text-[14px] text-[#333333] font-semibold ml-[209px]">Jenis
                  Material</h1>
                <span class="w-[112px] h-[17px] font-sans font-thin text-[#7F7F80] text-[14px] ml-4">{{
                  dataBerkas?.materialType || '-' }}</span>
              </div>
            </div>
            <div class="flex mt-6 items-center">
              <h1 class="w-[130px] h-[17px] font-sans text-[#333333] text-[14px] font-semibold">Nomor Anggaran</h1>
              <span class="w-[57px] h-[17px] text-[#7F7F80] font-sans font-thin text-[14px] ml-4">{{
                dataBerkas?.budgetNumber || '-' }}</span>
              <div class="flex ml-[335px]">
                <h1 class="w-[130px] h-[17px] font-sans text-[14px] text-[#333333] font-semibold">Jenis Kemitraan</h1>
                <span class="w-[112px] h-[17px] font-sans font-thin text-[#7F7F80] text-[14px] ml-[17px]">{{ dataBerkas.partnershipType }}</span>
              </div>
            </div>
            <div class="flex mt-6 items-center">
              <h1 class="w-[130px] h-[17px] font-sans text-[#333333] text-[14px] font-semibold">Tipe Anggaran</h1>
              <span class="w-[103px] h-[17px] text-[#7F7F80] font-sans font-thin text-[14px] ml-4">{{
                dataBerkas?.budgetType || '-' }}</span>
              <div class="flex ml-[288px]">
                <h1 class="w-[130px] h-[17px] font-sans text-[14px] text-[#333333] font-semibold">Pelaksana</h1>
                <span class="w-[300px] h-[17px] font-sans font-thin text-[#7F7F80] text-[14px] ml-[18px]">{{
                  dataBerkas?.disposedStaff || '-' }}</span>
              </div>
            </div>
            <div class="flex mt-6 items-center">
              <h1 class="w-[130px] h-[17px] font-sans text-[#333333] text-[14px] font-semibold">Tipe Bisnis</h1>
              <span class="w-[103px] h-[17px] text-[#7F7F80] font-sans font-thin text-[14px] ml-4">{{
                dataBerkas?.bisnisType || '-' }}</span>
              <div class="flex ml-[288px]">
                <h1 class="w-[130px] h-[17px] font-sans text-[14px] text-[#333333] font-semibold">Kandidat</h1>
                <span class="w-[300px] h-[17px] font-sans font-thin text-[#7F7F80] text-[14px] ml-[18px]">{{
                  dataBerkas?.partnershipCandidate || '-' }}</span>
              </div>
            </div>
            <div class="w-[1046px] h-[1px] bg-[#E5E7E9] justify-center transform translate-x-[-2.3%] mt-6"></div>
            <div class="flex items-start mt-6">
              <div class="flex w-1/2">
                <h1 class="w-[130px] min-h-[17px] font-sans text-[#333333] text-[14px] font-semibold">Latar Belakang</h1>
                <span class=" text-[#7F7F80] font-sans font-thin text-[14px] ml-4">{{
                  dataBerkas?.background || '-' }}</span>
              </div>
              <div class="flex w-1/2">
                <h1 class="w-[130px] min-h-[17px] font-sans text-[14px] text-[#333333] font-semibold ml-[40px]">Catatan
                </h1>
                <span class=" font-sans font-thin text-[#7F7F80] text-[14px] ml-4">{{ dataBerkas?.note
                  || '-' }}</span>
              </div>
            </div>
            <div class="flex items-center mt-6">
              <h1 class="w-[130px] h-[17px] font-sans text-[#333333] text-[14px] font-semibold">Dibuat Oleh</h1>
              <span class="w-[92px] h-[17px] text-[#7F7F80] font-sans font-thin text-[14px] ml-4">{{ dataBerkas?.user ||
                '-' }}</span>
              <div class="flex">
                <h1 class="w-[130px] h-[17px] font-sans text-[14px] text-[#333333] font-semibold ml-[300px]">Tanggal Buat
                </h1>
                <span class="w-[112px] h-[17px] font-sans font-thin text-[#7F7F80] text-[14px] ml-4">{{
                  dateParsing(dataBerkas?.submissionDate) || '-' }}</span>
              </div>
            </div>
            <div class="flex items-center mt-6">
              <h1 class="w-[130px] h-[17px] font-sans text-[#333333] text-[14px] font-semibold">Due Date</h1>
              <span class="w-[92px] h-[17px] text-[#7F7F80] font-sans font-thin text-[14px] ml-4">{{ dateParsing(dataBerkas?.dueDateStaff) ||
                '-' }}</span>
              <div class="flex">
                <h1 class="w-[130px] h-[17px] font-sans text-[14px] text-[#333333] font-semibold ml-[300px]">Tanggal Diharapkan Selesai
                </h1>
                <span class="w-[112px] h-[17px] font-sans font-thin text-[#7F7F80] text-[14px] ml-4">{{
                  dateParsing(dataBerkas?.expectedDate) || '-' }}</span>
              </div>
            </div>
          </div>
        </transition>
        <div
          class="flex items-center mt-4 ml-4 w-[1046px] h-[48px] rounded-lg bg-[#FFFFFF] border-[#E5E7E9] border-[1px]">
          <div class="w-[30px] h-[48px] bg-[#FFA229] rounded-tl-md rounded-bl-md"></div>
          <div class="text-[16px] font-sans font-semibold text-[#333333] ml-[10px] mt-[14.5px] mb-[14.5px]">Lingkup
            Pekerjaan</div>
          <button @click="toggleDropdownArrow1" class="ml-auto mr-4 flex py-1 px-1 rounded-full hover:bg-[#FFFFFF]">
            <svg :class="{ 'rotate-180': isDropdownArrowOpen1 }" class="w-4 h-4 text-[#2671D9]" fill="none"
              stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
        </div>
        <transition name="fade">
          <div v-if="isDropdownArrowOpen1"
            class="flex flex-col w-[1046px] h-[270px] bg-[#FFFFFF] border-[#E5E7E9] border-[1px] ml-4 px-6 py-6 rounded-bl-md rounded-br-md">
            <div class="flex items-center justify-between w-full px-4">
              <div class="flex flex-col gap-2 items-center">
                <h1 class="w-[130px] h-[17px] font-sans text-[#333333] text-[14px] font-semibold">Pembayaran</h1>
                <h1 class="w-[130px] h-[17px] text-[14px] text-[#7F7F80]">-</h1>
              </div>
              <div class="flex flex-col gap-2 items-center">
                <div class="w-[130px] h-[17px] font-sans text-[#333333] text-[14px] font-semibold">Time Schedule</div>
                <div class="w-[130px] h-[17px] text-[14px] text-[#7F7F80]">-</div>
              </div>
              <div class="flex flex-col gap-2 items-center">
                <div class="w-[130px] h-[17px] font-sans text-[#333333] text-[14px] font-semibold">Calon Mitra Bisnis
                </div>
                <div class="w-[130px] h-[17px] text-[14px] text-[#7F7F80]">{{ dataBerkas?.partnershipCandidate || "-" }}
                </div>
              </div>
            </div>
            <table class="table-auto w-auto text-left border-collapse border-[1px] border-[#E5E7E9] mt-4">
              <thead>
                <tr class="bg-[#FFFFFF] text-[12px] font-sans text-[#4D5E80] font-semibold">
                  <th class="p-2 border border-[#E5E7E9] w-[74px] h-[48px]">
                    <div class="flex items-center w-[74px]">
                      <span>No.</span>
                      <svg width="14" height="10" class="ml-3" viewBox="0 0 14 10" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M10.4252 0.144043C10.7073 0.144043 10.9359 0.364674 10.9359 0.636836L10.9359 8.3174L13.1282 6.20189C13.3276 6.00944 13.651 6.00944 13.8504 6.20189C14.0499 6.39434 14.0499 6.70636 13.8504 6.89881L10.7863 9.85556C10.6906 9.94798 10.5607 9.9999 10.4252 9.9999C10.2898 9.9999 10.1599 9.94798 10.0641 9.85556L7.00001 6.89881C6.80057 6.70636 6.80057 6.39434 7.00001 6.20189C7.19944 6.00944 7.52279 6.00944 7.72223 6.20189L9.91454 8.3174L9.91454 0.636836C9.91454 0.364674 10.1432 0.144043 10.4252 0.144043Z"
                          fill="#93B8EC" />
                        <path
                          d="M3.21369 0.144824C3.41312 -0.0476236 3.73647 -0.0476236 3.9359 0.144824L7.00001 3.10158C7.19945 3.29403 7.19945 3.60605 7.00001 3.79849C6.80058 3.99094 6.47723 3.99094 6.27779 3.79849L4.08548 1.68299V9.36355C4.08548 9.63571 3.85684 9.85634 3.57479 9.85634C3.29275 9.85634 3.06411 9.63571 3.06411 9.36355V1.68299L0.871794 3.79849C0.672359 3.99094 0.349011 3.99094 0.149576 3.79849C-0.0498587 3.60605 -0.0498587 3.29403 0.149576 3.10158L3.21369 0.144824Z"
                          fill="#93B8EC" />
                      </svg>
                    </div>
                  </th>
                  <th class="p-2 border border-[#E5E7E9]">
                    <div class="flex items-center justify-between">
                      <span class="px-3">Pekerjaan</span>
                      <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M10.4252 0.144043C10.7073 0.144043 10.9359 0.364674 10.9359 0.636836L10.9359 8.3174L13.1282 6.20189C13.3276 6.00944 13.651 6.00944 13.8504 6.20189C14.0499 6.39434 14.0499 6.70636 13.8504 6.89881L10.7863 9.85556C10.6906 9.94798 10.5607 9.9999 10.4252 9.9999C10.2898 9.9999 10.1599 9.94798 10.0641 9.85556L7.00001 6.89881C6.80057 6.70636 6.80057 6.39434 7.00001 6.20189C7.19944 6.00944 7.52279 6.00944 7.72223 6.20189L9.91454 8.3174L9.91454 0.636836C9.91454 0.364674 10.1432 0.144043 10.4252 0.144043Z"
                          fill="#93B8EC" />
                        <path
                          d="M3.21369 0.144824C3.41312 -0.0476236 3.73647 -0.0476236 3.9359 0.144824L7.00001 3.10158C7.19945 3.29403 7.19945 3.60605 7.00001 3.79849C6.80058 3.99094 6.47723 3.99094 6.27779 3.79849L4.08548 1.68299V9.36355C4.08548 9.63571 3.85684 9.85634 3.57479 9.85634C3.29275 9.85634 3.06411 9.63571 3.06411 9.36355V1.68299L0.871794 3.79849C0.672359 3.99094 0.349011 3.99094 0.149576 3.79849C-0.0498587 3.60605 -0.0498587 3.29403 0.149576 3.10158L3.21369 0.144824Z"
                          fill="#93B8EC" />
                      </svg>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody v-if="base == 'PKS'" class="h-[54px] w-[998px]">
                <tr v-for="(item, index) in dataBerkas?.scopesPks" :key="index"
                  class="bg-[#FFFFFF] border border-[#E5E7E9] text-[#333333] font-sans text-[14px] font-normal w-[900px] h-[22px]">
                  <td class="p-2 border border-[#E5E7E9]">{{ index + 1 }}</td>
                  <td
                    class="p-2 border border-[#E5E7E9] text-[14px] text-left pl-5 font-sans font-normal text-[#333333]">
                    {{ item.scopeName }}</td>
                </tr>
              </tbody>
              <tbody v-else class="h-[54px] w-[998px]">
                <tr v-for="(item, index) in dataBerkas?.scopesMou" :key="index"
                  class="bg-[#FFFFFF] border border-[#E5E7E9] text-[#333333] font-sans text-[14px] font-normal w-[900px] h-[22px]">
                  <td class="p-2 border border-[#E5E7E9]">{{ index + 1 }}</td>
                  <td
                    class="p-2 border border-[#E5E7E9] text-[14px] text-left pl-5 font-sans font-normal text-[#333333]">
                    {{ item.scopeName }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </transition>
        <div v-if="base == 'PKS'"
          class="flex items-center mt-4 ml-4 w-[1046px] h-[48px] rounded-lg bg-[#FFFFFF] border-[#E5E7E9] border-[1px]">
          <div class="w-[30px] h-[48px] bg-[#0FB37D] rounded-tl-md rounded-bl-md"></div>
          <div class="text-[16px] font-sans font-semibold text-[#333333] ml-[10px] mt-[14.5px] mb-[14.5px]">Informasi
            RAB</div>
          <button @click="toggleDropdownArrow2" class="ml-auto mr-4 flex py-1 px-1 rounded-full hover:bg-[#FFFFFF]">
            <svg :class="{ 'rotate-180': isDropdownArrowOpen2 }" class="w-4 h-4 text-[#2671D9]" fill="none"
              stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
        </div>
        <transition v-if="base == 'PKS'" name="fade">
          <div v-if="isDropdownArrowOpen2"
            class="flex items-center w-[1046px] max-h-[430px] bg-[#FFFFFF] border-[#E5E7E9] border-[1px] ml-4 px-6 py-6 rounded-bl-md rounded-br-md">
            <table class="table-auto w-auto text-left rounded-lg border-collapse border-[1px] border-[#E5E7E9] mt-3">
              <thead>
                <tr class="bg-[#FFFFFF] text-[12px] font-sans text-[#4D5E80] font-semibold">
                  <th class="p-2 border border-[#E5E7E9] w-[74px] h-[48px]">
                    <div class="flex items-center">
                      <span>No.</span>
                      <svg width="14" height="10" class="ml-3" viewBox="0 0 14 10" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M10.4252 0.144043C10.7073 0.144043 10.9359 0.364674 10.9359 0.636836L10.9359 8.3174L13.1282 6.20189C13.3276 6.00944 13.651 6.00944 13.8504 6.20189C14.0499 6.39434 14.0499 6.70636 13.8504 6.89881L10.7863 9.85556C10.6906 9.94798 10.5607 9.9999 10.4252 9.9999C10.2898 9.9999 10.1599 9.94798 10.0641 9.85556L7.00001 6.89881C6.80057 6.70636 6.80057 6.39434 7.00001 6.20189C7.19944 6.00944 7.52279 6.00944 7.72223 6.20189L9.91454 8.3174L9.91454 0.636836C9.91454 0.364674 10.1432 0.144043 10.4252 0.144043Z"
                          fill="#93B8EC" />
                        <path
                          d="M3.21369 0.144824C3.41312 -0.0476236 3.73647 -0.0476236 3.9359 0.144824L7.00001 3.10158C7.19945 3.29403 7.19945 3.60605 7.00001 3.79849C6.80058 3.99094 6.47723 3.99094 6.27779 3.79849L4.08548 1.68299V9.36355C4.08548 9.63571 3.85684 9.85634 3.57479 9.85634C3.29275 9.85634 3.06411 9.63571 3.06411 9.36355V1.68299L0.871794 3.79849C0.672359 3.99094 0.349011 3.99094 0.149576 3.79849C-0.0498587 3.60605 -0.0498587 3.29403 0.149576 3.10158L3.21369 0.144824Z"
                          fill="#93B8EC" />
                      </svg>
                    </div>
                  </th>
                  <th class="p-2 border border-[#E5E7E9]">
                    <div class="flex items-center justify-between w-[231px]">
                      <span class="px-3">Aksi</span>
                      <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M10.4252 0.144043C10.7073 0.144043 10.9359 0.364674 10.9359 0.636836L10.9359 8.3174L13.1282 6.20189C13.3276 6.00944 13.651 6.00944 13.8504 6.20189C14.0499 6.39434 14.0499 6.70636 13.8504 6.89881L10.7863 9.85556C10.6906 9.94798 10.5607 9.9999 10.4252 9.9999C10.2898 9.9999 10.1599 9.94798 10.0641 9.85556L7.00001 6.89881C6.80057 6.70636 6.80057 6.39434 7.00001 6.20189C7.19944 6.00944 7.52279 6.00944 7.72223 6.20189L9.91454 8.3174L9.91454 0.636836C9.91454 0.364674 10.1432 0.144043 10.4252 0.144043Z"
                          fill="#93B8EC" />
                        <path
                          d="M3.21369 0.144824C3.41312 -0.0476236 3.73647 -0.0476236 3.9359 0.144824L7.00001 3.10158C7.19945 3.29403 7.19945 3.60605 7.00001 3.79849C6.80058 3.99094 6.47723 3.99094 6.27779 3.79849L4.08548 1.68299V9.36355C4.08548 9.63571 3.85684 9.85634 3.57479 9.85634C3.29275 9.85634 3.06411 9.63571 3.06411 9.36355V1.68299L0.871794 3.79849C0.672359 3.99094 0.349011 3.99094 0.149576 3.79849C-0.0498587 3.60605 -0.0498587 3.29403 0.149576 3.10158L3.21369 0.144824Z"
                          fill="#93B8EC" />
                      </svg>
                    </div>
                  </th>
                  <th class="p-2 border border-[#E5E7E9]">
                    <div class="flex items-center justify-between w-[231px]">
                      <span class="px-3">Deskripsi</span>
                      <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M10.4252 0.144043C10.7073 0.144043 10.9359 0.364674 10.9359 0.636836L10.9359 8.3174L13.1282 6.20189C13.3276 6.00944 13.651 6.00944 13.8504 6.20189C14.0499 6.39434 14.0499 6.70636 13.8504 6.89881L10.7863 9.85556C10.6906 9.94798 10.5607 9.9999 10.4252 9.9999C10.2898 9.9999 10.1599 9.94798 10.0641 9.85556L7.00001 6.89881C6.80057 6.70636 6.80057 6.39434 7.00001 6.20189C7.19944 6.00944 7.52279 6.00944 7.72223 6.20189L9.91454 8.3174L9.91454 0.636836C9.91454 0.364674 10.1432 0.144043 10.4252 0.144043Z"
                          fill="#93B8EC" />
                        <path
                          d="M3.21369 0.144824C3.41312 -0.0476236 3.73647 -0.0476236 3.9359 0.144824L7.00001 3.10158C7.19945 3.29403 7.19945 3.60605 7.00001 3.79849C6.80058 3.99094 6.47723 3.99094 6.27779 3.79849L4.08548 1.68299V9.36355C4.08548 9.63571 3.85684 9.85634 3.57479 9.85634C3.29275 9.85634 3.06411 9.63571 3.06411 9.36355V1.68299L0.871794 3.79849C0.672359 3.99094 0.349011 3.99094 0.149576 3.79849C-0.0498587 3.60605 -0.0498587 3.29403 0.149576 3.10158L3.21369 0.144824Z"
                          fill="#93B8EC" />
                      </svg>
                    </div>
                  </th>
                  <th class="p-2 border border-[#E5E7E9]">
                    <div class="flex items-center w-[300px] justify-between">
                      <span class="px-3">Pelanggan</span>
                      <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M10.4252 0.144043C10.7073 0.144043 10.9359 0.364674 10.9359 0.636836L10.9359 8.3174L13.1282 6.20189C13.3276 6.00944 13.651 6.00944 13.8504 6.20189C14.0499 6.39434 14.0499 6.70636 13.8504 6.89881L10.7863 9.85556C10.6906 9.94798 10.5607 9.9999 10.4252 9.9999C10.2898 9.9999 10.1599 9.94798 10.0641 9.85556L7.00001 6.89881C6.80057 6.70636 6.80057 6.39434 7.00001 6.20189C7.19944 6.00944 7.52279 6.00944 7.72223 6.20189L9.91454 8.3174L9.91454 0.636836C9.91454 0.364674 10.1432 0.144043 10.4252 0.144043Z"
                          fill="#93B8EC" />
                        <path
                          d="M3.21369 0.144824C3.41312 -0.0476236 3.73647 -0.0476236 3.9359 0.144824L7.00001 3.10158C7.19945 3.29403 7.19945 3.60605 7.00001 3.79849C6.80058 3.99094 6.47723 3.99094 6.27779 3.79849L4.08548 1.68299V9.36355C4.08548 9.63571 3.85684 9.85634 3.57479 9.85634C3.29275 9.85634 3.06411 9.63571 3.06411 9.36355V1.68299L0.871794 3.79849C0.672359 3.99094 0.349011 3.99094 0.149576 3.79849C-0.0498587 3.60605 -0.0498587 3.29403 0.149576 3.10158L3.21369 0.144824Z"
                          fill="#93B8EC" />
                      </svg>
                    </div>
                  </th>
                  <th class="p-2 border border-[#E5E7E9]">
                    <div class="flex items-center justify-between">
                      <span class="px-3">PLN/NonPLN</span>
                      <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M10.4252 0.144043C10.7073 0.144043 10.9359 0.364674 10.9359 0.636836L10.9359 8.3174L13.1282 6.20189C13.3276 6.00944 13.651 6.00944 13.8504 6.20189C14.0499 6.39434 14.0499 6.70636 13.8504 6.89881L10.7863 9.85556C10.6906 9.94798 10.5607 9.9999 10.4252 9.9999C10.2898 9.9999 10.1599 9.94798 10.0641 9.85556L7.00001 6.89881C6.80057 6.70636 6.80057 6.39434 7.00001 6.20189C7.19944 6.00944 7.52279 6.00944 7.72223 6.20189L9.91454 8.3174L9.91454 0.636836C9.91454 0.364674 10.1432 0.144043 10.4252 0.144043Z"
                          fill="#93B8EC" />
                        <path
                          d="M3.21369 0.144824C3.41312 -0.0476236 3.73647 -0.0476236 3.9359 0.144824L7.00001 3.10158C7.19945 3.29403 7.19945 3.60605 7.00001 3.79849C6.80058 3.99094 6.47723 3.99094 6.27779 3.79849L4.08548 1.68299V9.36355C4.08548 9.63571 3.85684 9.85634 3.57479 9.85634C3.29275 9.85634 3.06411 9.63571 3.06411 9.36355V1.68299L0.871794 3.79849C0.672359 3.99094 0.349011 3.99094 0.149576 3.79849C-0.0498587 3.60605 -0.0498587 3.29403 0.149576 3.10158L3.21369 0.144824Z"
                          fill="#93B8EC" />
                      </svg>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody class="h-[54px] w-[231px]">
                <tr v-for="(item, index) in dataBerkas?.rab" :key="index"
                  class="bg-[#FFFFFF] border border-[#E5E7E9] text-[#333333] font-sans text-[14px] font-normal">
                  <td class="p-2 border border-[#E5E7E9]">{{ index + 1 }}</td>
                  <td
                    class="p-2 border border-[#E5E7E9] text-[14px] text-left pl-5 font-sans font-normal text-[#333333] w-[207px]">
                    {{ item.product || "-" }}</td>
                  <td
                    class="p-2 border border-[#E5E7E9] text-[14px] text-left pl-5 font-sans font-normal text-[#333333] w-[207px]">
                    {{ item.costDesc || "-" }}</td>
                  <td
                    class="p-2 border border-[#E5E7E9] text-[14px] text-left pl-5 font-sans font-normal text-[#333333] w-[207px]">
                    {{ item.customer || "-" }}</td>
                  <td v-if="item.isPln"
                    class="p-2 border border-[#E5E7E9] text-[14px] text-left pl-5 font-sans font-normal text-[#333333] w-[207px]">
                    PLN</td>
                  <td v-else
                    class="p-2 border border-[#E5E7E9] text-[14px] text-left pl-5 font-sans font-normal text-[#333333] w-[207px]">
                    Non PLN</td>
                </tr>
              </tbody>
            </table>
          </div>
        </transition>
        <div
          class="flex items-center mt-4 ml-4 w-[1046px] h-[48px] rounded-lg bg-[#FFFFFF] border-[#E5E7E9] border-[1px]">
          <div class="w-[30px] h-[48px] bg-[#F42495] rounded-tl-md rounded-bl-md"></div>
          <div class="text-[16px] font-sans font-semibold text-[#333333] ml-[10px] mt-[14.5px] mb-[14.5px]">Berkas
            Lampiran</div>
          <button @click="toggleDropdownArrow3" class="ml-auto mr-4 flex py-1 px-1 rounded-full hover:bg-[#FFFFFF]">
            <svg :class="{ 'rotate-180': isDropdownArrowOpen3 }" class="w-4 h-4 text-[#2671D9]" fill="none"
              stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
        </div>
        <transition name="fade">
          <div v-if="isDropdownArrowOpen3">
            <div v-if="base === 'PKS'">
              <div class="px-6 mt-6 mb-4 flex justify-between">
                <div>
                  <label class="text-[#4D5E80] font-semibold">KKB <span class="text-[#FF5656] text-xs">*</span></label>
                  <a :href="linkDownloadKKB" v-if="fileNameKKB" class="w-[333px] h-auto border-[1px] flex rounded-lg mt-2 items-center">
                    <svg width="45" height="46" class="mx-4 my-2" viewBox="0 0 45 46" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <circle cx="22.5" cy="23" r="22.5" fill="#E9F1FB" />
                      <path
                        d="M30 20.1312C29.9902 20.0451 29.9714 19.9603 29.9437 19.8781V19.7937C29.8987 19.6974 29.8385 19.6087 29.7656 19.5313L24.1406 13.9062C24.0631 13.8333 23.9745 13.7732 23.8781 13.7281H23.7937C23.6985 13.6735 23.5933 13.6384 23.4844 13.625H17.8125C17.0666 13.625 16.3512 13.9213 15.8238 14.4488C15.2963 14.9762 15 15.6916 15 16.4375V29.5625C15 30.3084 15.2963 31.0238 15.8238 31.5512C16.3512 32.0787 17.0666 32.375 17.8125 32.375H27.1875C27.9334 32.375 28.6488 32.0787 29.1762 31.5512C29.7037 31.0238 30 30.3084 30 29.5625V20.1875V20.1312ZM24.375 16.8219L26.8031 19.25H25.3125C25.0639 19.25 24.8254 19.1512 24.6496 18.9754C24.4738 18.7996 24.375 18.5611 24.375 18.3125V16.8219ZM28.125 29.5625C28.125 29.8111 28.0262 30.0496 27.8504 30.2254C27.6746 30.4012 27.4361 30.5 27.1875 30.5H17.8125C17.5639 30.5 17.3254 30.4012 17.1496 30.2254C16.9738 30.0496 16.875 29.8111 16.875 29.5625V16.4375C16.875 16.1889 16.9738 15.9504 17.1496 15.7746C17.3254 15.5988 17.5639 15.5 17.8125 15.5H22.5V18.3125C22.5 19.0584 22.7963 19.7738 23.3238 20.3012C23.8512 20.8287 24.5666 21.125 25.3125 21.125H28.125V29.5625Z"
                        fill="#2671D9" />
                    </svg>
                    <div class="py-2 w-[200px] flex-grow truncate pe-3">
                      <span class="text-[#333333] text-sm font-semibold">{{ fileNameKKB }}</span>
                      <p class="text-[#9E9E9E] text-xs">{{ fileSizeKKB }}</p>
                    </div>
                  </a>
                  <div v-else class="w-[333px] h-auto">
                    <span class="text-[#9E9E9E] text-sm font-semibold">File belum diupload</span>
                  </div>
                </div>
                <div>
                  <label class="text-[#4D5E80] font-semibold">KKR <span class="text-[#FF5656] text-xs">*</span></label>
                  <a :href="linkDownloadKKR" v-if="fileNameKKR" class="w-[333px] h-auto border-[1px] flex rounded-lg mt-2 items-center">
                    <svg width="45" height="46" class="mx-4 my-2" viewBox="0 0 45 46" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <circle cx="22.5" cy="23" r="22.5" fill="#E9F1FB" />
                      <path
                        d="M30 20.1312C29.9902 20.0451 29.9714 19.9603 29.9437 19.8781V19.7937C29.8987 19.6974 29.8385 19.6087 29.7656 19.5313L24.1406 13.9062C24.0631 13.8333 23.9745 13.7732 23.8781 13.7281H23.7937C23.6985 13.6735 23.5933 13.6384 23.4844 13.625H17.8125C17.0666 13.625 16.3512 13.9213 15.8238 14.4488C15.2963 14.9762 15 15.6916 15 16.4375V29.5625C15 30.3084 15.2963 31.0238 15.8238 31.5512C16.3512 32.0787 17.0666 32.375 17.8125 32.375H27.1875C27.9334 32.375 28.6488 32.0787 29.1762 31.5512C29.7037 31.0238 30 30.3084 30 29.5625V20.1875V20.1312ZM24.375 16.8219L26.8031 19.25H25.3125C25.0639 19.25 24.8254 19.1512 24.6496 18.9754C24.4738 18.7996 24.375 18.5611 24.375 18.3125V16.8219ZM28.125 29.5625C28.125 29.8111 28.0262 30.0496 27.8504 30.2254C27.6746 30.4012 27.4361 30.5 27.1875 30.5H17.8125C17.5639 30.5 17.3254 30.4012 17.1496 30.2254C16.9738 30.0496 16.875 29.8111 16.875 29.5625V16.4375C16.875 16.1889 16.9738 15.9504 17.1496 15.7746C17.3254 15.5988 17.5639 15.5 17.8125 15.5H22.5V18.3125C22.5 19.0584 22.7963 19.7738 23.3238 20.3012C23.8512 20.8287 24.5666 21.125 25.3125 21.125H28.125V29.5625Z"
                        fill="#2671D9" />
                    </svg>
                    <div class="py-2 w-[200px] flex-grow truncate pe-3">
                      <span class="text-[#333333] text-sm font-semibold">{{ fileNameKKR }}</span>
                      <p class="text-[#9E9E9E] text-xs">{{ fileSizeKKR }}</p>
                    </div>
                  </a>
                  <div v-else class="w-[333px] h-auto">
                    <span class="text-[#9E9E9E] text-sm font-semibold">File belum diupload</span>
                  </div>
                </div>
                <div>
                  <label class="text-[#4D5E80] font-semibold">KKF <span class="text-[#FF5656] text-xs">*</span></label>
                  <a :href="linkDownloadKKF" v-if="fileNameKKF" class="w-[333px] h-auto border-[1px] flex rounded-lg mt-2 items-center">
                    <svg width="45" height="46" class="mx-4 my-2" viewBox="0 0 45 46" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <circle cx="22.5" cy="23" r="22.5" fill="#E9F1FB" />
                      <path
                        d="M30 20.1312C29.9902 20.0451 29.9714 19.9603 29.9437 19.8781V19.7937C29.8987 19.6974 29.8385 19.6087 29.7656 19.5313L24.1406 13.9062C24.0631 13.8333 23.9745 13.7732 23.8781 13.7281H23.7937C23.6985 13.6735 23.5933 13.6384 23.4844 13.625H17.8125C17.0666 13.625 16.3512 13.9213 15.8238 14.4488C15.2963 14.9762 15 15.6916 15 16.4375V29.5625C15 30.3084 15.2963 31.0238 15.8238 31.5512C16.3512 32.0787 17.0666 32.375 17.8125 32.375H27.1875C27.9334 32.375 28.6488 32.0787 29.1762 31.5512C29.7037 31.0238 30 30.3084 30 29.5625V20.1875V20.1312ZM24.375 16.8219L26.8031 19.25H25.3125C25.0639 19.25 24.8254 19.1512 24.6496 18.9754C24.4738 18.7996 24.375 18.5611 24.375 18.3125V16.8219ZM28.125 29.5625C28.125 29.8111 28.0262 30.0496 27.8504 30.2254C27.6746 30.4012 27.4361 30.5 27.1875 30.5H17.8125C17.5639 30.5 17.3254 30.4012 17.1496 30.2254C16.9738 30.0496 16.875 29.8111 16.875 29.5625V16.4375C16.875 16.1889 16.9738 15.9504 17.1496 15.7746C17.3254 15.5988 17.5639 15.5 17.8125 15.5H22.5V18.3125C22.5 19.0584 22.7963 19.7738 23.3238 20.3012C23.8512 20.8287 24.5666 21.125 25.3125 21.125H28.125V29.5625Z"
                        fill="#2671D9" />
                    </svg>
                    <div class="py-2 w-[200px] flex-grow truncate pe-3">
                      <span class="text-[#333333] text-sm font-semibold">{{ fileNameKKF }}</span>
                      <p class="text-[#9E9E9E] text-xs">{{ fileSizeKKF }}</p>
                    </div>
                  </a>
                  <div v-else class="w-[333px] h-auto">
                    <span class="text-[#9E9E9E] text-sm font-semibold">File belum diupload</span>
                  </div>
                </div>
              </div>
              <div class="px-6 mt-6 mb-4 flex justify-between">
                <div>
                  <label class="text-[#4D5E80] font-semibold">KKO <span class="text-[#FF5656] text-xs">*</span></label>
                  <a :href="linkDownloadKKO" v-if="fileNameKKO" class="w-[333px] h-auto border-[1px] flex rounded-lg mt-2 items-center">
                    <svg width="45" height="46" class="mx-4 my-2" viewBox="0 0 45 46" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <circle cx="22.5" cy="23" r="22.5" fill="#E9F1FB" />
                      <path
                        d="M30 20.1312C29.9902 20.0451 29.9714 19.9603 29.9437 19.8781V19.7937C29.8987 19.6974 29.8385 19.6087 29.7656 19.5313L24.1406 13.9062C24.0631 13.8333 23.9745 13.7732 23.8781 13.7281H23.7937C23.6985 13.6735 23.5933 13.6384 23.4844 13.625H17.8125C17.0666 13.625 16.3512 13.9213 15.8238 14.4488C15.2963 14.9762 15 15.6916 15 16.4375V29.5625C15 30.3084 15.2963 31.0238 15.8238 31.5512C16.3512 32.0787 17.0666 32.375 17.8125 32.375H27.1875C27.9334 32.375 28.6488 32.0787 29.1762 31.5512C29.7037 31.0238 30 30.3084 30 29.5625V20.1875V20.1312ZM24.375 16.8219L26.8031 19.25H25.3125C25.0639 19.25 24.8254 19.1512 24.6496 18.9754C24.4738 18.7996 24.375 18.5611 24.375 18.3125V16.8219ZM28.125 29.5625C28.125 29.8111 28.0262 30.0496 27.8504 30.2254C27.6746 30.4012 27.4361 30.5 27.1875 30.5H17.8125C17.5639 30.5 17.3254 30.4012 17.1496 30.2254C16.9738 30.0496 16.875 29.8111 16.875 29.5625V16.4375C16.875 16.1889 16.9738 15.9504 17.1496 15.7746C17.3254 15.5988 17.5639 15.5 17.8125 15.5H22.5V18.3125C22.5 19.0584 22.7963 19.7738 23.3238 20.3012C23.8512 20.8287 24.5666 21.125 25.3125 21.125H28.125V29.5625Z"
                        fill="#2671D9" />
                    </svg>
                    <div class="py-2 w-[200px] flex-grow truncate pe-3">
                      <span class="text-[#333333] text-sm font-semibold">{{ fileNameKKO }}</span>
                      <p class="text-[#9E9E9E] text-xs">{{ fileSizeKKO }}</p>
                    </div>
                  </a>
                  <div v-else class="w-[333px] h-auto">
                    <span class="text-[#9E9E9E] text-sm font-semibold">File belum diupload</span>
                  </div>
                </div>
                <div>
                  <label class="text-[#4D5E80] font-semibold">Proposal Mitra
                    <span class="text-[#B3B3B3] text-xs">(Opsional)</span></label>
                  <a :href="linkDownloadmitra" v-if="fileNamemitra" class="w-[333px] h-auto border-[1px] flex rounded-lg mt-2 items-center">
                    <svg width="45" height="46" class="mx-4 my-2" viewBox="0 0 45 46" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <circle cx="22.5" cy="23" r="22.5" fill="#E9F1FB" />
                      <path
                        d="M30 20.1312C29.9902 20.0451 29.9714 19.9603 29.9437 19.8781V19.7937C29.8987 19.6974 29.8385 19.6087 29.7656 19.5313L24.1406 13.9062C24.0631 13.8333 23.9745 13.7732 23.8781 13.7281H23.7937C23.6985 13.6735 23.5933 13.6384 23.4844 13.625H17.8125C17.0666 13.625 16.3512 13.9213 15.8238 14.4488C15.2963 14.9762 15 15.6916 15 16.4375V29.5625C15 30.3084 15.2963 31.0238 15.8238 31.5512C16.3512 32.0787 17.0666 32.375 17.8125 32.375H27.1875C27.9334 32.375 28.6488 32.0787 29.1762 31.5512C29.7037 31.0238 30 30.3084 30 29.5625V20.1875V20.1312ZM24.375 16.8219L26.8031 19.25H25.3125C25.0639 19.25 24.8254 19.1512 24.6496 18.9754C24.4738 18.7996 24.375 18.5611 24.375 18.3125V16.8219ZM28.125 29.5625C28.125 29.8111 28.0262 30.0496 27.8504 30.2254C27.6746 30.4012 27.4361 30.5 27.1875 30.5H17.8125C17.5639 30.5 17.3254 30.4012 17.1496 30.2254C16.9738 30.0496 16.875 29.8111 16.875 29.5625V16.4375C16.875 16.1889 16.9738 15.9504 17.1496 15.7746C17.3254 15.5988 17.5639 15.5 17.8125 15.5H22.5V18.3125C22.5 19.0584 22.7963 19.7738 23.3238 20.3012C23.8512 20.8287 24.5666 21.125 25.3125 21.125H28.125V29.5625Z"
                        fill="#2671D9" />
                    </svg>
                    <div class="py-2 w-[200px] flex-grow truncate pe-3">
                      <span class="text-[#333333] text-sm font-semibold">{{ fileNamemitra }}</span>
                      <p class="text-[#9E9E9E] text-xs">{{ fileSizemitra }}</p>
                    </div>
                  </a>
                  <div v-else class="w-[333px] h-auto">
                    <span class="text-[#9E9E9E] text-sm font-semibold">File belum diupload</span>
                  </div>
                </div>
                <div>
                  <label class="text-[#4D5E80] font-semibold">Dokumen Surat Menyurat
                    <span class="text-[#B3B3B3] text-xs">(Opsional)</span></label>
                  <a :href="linkDownloadsurat" v-if="fileNamesurat" class="w-[333px] h-auto border-[1px] flex rounded-lg mt-2 items-center">
                    <svg width="45" height="46" class="mx-4 my-2" viewBox="0 0 45 46" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <circle cx="22.5" cy="23" r="22.5" fill="#E9F1FB" />
                      <path
                        d="M30 20.1312C29.9902 20.0451 29.9714 19.9603 29.9437 19.8781V19.7937C29.8987 19.6974 29.8385 19.6087 29.7656 19.5313L24.1406 13.9062C24.0631 13.8333 23.9745 13.7732 23.8781 13.7281H23.7937C23.6985 13.6735 23.5933 13.6384 23.4844 13.625H17.8125C17.0666 13.625 16.3512 13.9213 15.8238 14.4488C15.2963 14.9762 15 15.6916 15 16.4375V29.5625C15 30.3084 15.2963 31.0238 15.8238 31.5512C16.3512 32.0787 17.0666 32.375 17.8125 32.375H27.1875C27.9334 32.375 28.6488 32.0787 29.1762 31.5512C29.7037 31.0238 30 30.3084 30 29.5625V20.1875V20.1312ZM24.375 16.8219L26.8031 19.25H25.3125C25.0639 19.25 24.8254 19.1512 24.6496 18.9754C24.4738 18.7996 24.375 18.5611 24.375 18.3125V16.8219ZM28.125 29.5625C28.125 29.8111 28.0262 30.0496 27.8504 30.2254C27.6746 30.4012 27.4361 30.5 27.1875 30.5H17.8125C17.5639 30.5 17.3254 30.4012 17.1496 30.2254C16.9738 30.0496 16.875 29.8111 16.875 29.5625V16.4375C16.875 16.1889 16.9738 15.9504 17.1496 15.7746C17.3254 15.5988 17.5639 15.5 17.8125 15.5H22.5V18.3125C22.5 19.0584 22.7963 19.7738 23.3238 20.3012C23.8512 20.8287 24.5666 21.125 25.3125 21.125H28.125V29.5625Z"
                        fill="#2671D9" />
                    </svg>
                    <div class="py-2 w-[200px] flex-grow truncate pe-3">
                      <span class="text-[#333333] text-sm font-semibold">{{ fileNamesurat }}</span>
                      <p class="text-[#9E9E9E] text-xs">{{ fileSizesurat }}</p>
                    </div>
                  </a>
                  <div v-else class="w-[333px] h-auto">
                    <span class="text-[#9E9E9E] text-sm font-semibold">File belum diupload</span>
                  </div>
                </div>
              </div>
              <div class="px-6 mt-6 mb-4">
                <label class="text-[#4D5E80] font-semibold">Dokumen Lainnya
                  <span class="text-[#B3B3B3] text-xs">(Opsional)</span></label>
                <a :href="linkDownloadlainnya" v-if="fileNamelainnya" class="w-[333px] h-auto border-[1px] flex rounded-lg mt-2 items-center">
                  <svg width="45" height="46" class="mx-4 my-2" viewBox="0 0 45 46" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <circle cx="22.5" cy="23" r="22.5" fill="#E9F1FB" />
                    <path
                      d="M30 20.1312C29.9902 20.0451 29.9714 19.9603 29.9437 19.8781V19.7937C29.8987 19.6974 29.8385 19.6087 29.7656 19.5313L24.1406 13.9062C24.0631 13.8333 23.9745 13.7732 23.8781 13.7281H23.7937C23.6985 13.6735 23.5933 13.6384 23.4844 13.625H17.8125C17.0666 13.625 16.3512 13.9213 15.8238 14.4488C15.2963 14.9762 15 15.6916 15 16.4375V29.5625C15 30.3084 15.2963 31.0238 15.8238 31.5512C16.3512 32.0787 17.0666 32.375 17.8125 32.375H27.1875C27.9334 32.375 28.6488 32.0787 29.1762 31.5512C29.7037 31.0238 30 30.3084 30 29.5625V20.1875V20.1312ZM24.375 16.8219L26.8031 19.25H25.3125C25.0639 19.25 24.8254 19.1512 24.6496 18.9754C24.4738 18.7996 24.375 18.5611 24.375 18.3125V16.8219ZM28.125 29.5625C28.125 29.8111 28.0262 30.0496 27.8504 30.2254C27.6746 30.4012 27.4361 30.5 27.1875 30.5H17.8125C17.5639 30.5 17.3254 30.4012 17.1496 30.2254C16.9738 30.0496 16.875 29.8111 16.875 29.5625V16.4375C16.875 16.1889 16.9738 15.9504 17.1496 15.7746C17.3254 15.5988 17.5639 15.5 17.8125 15.5H22.5V18.3125C22.5 19.0584 22.7963 19.7738 23.3238 20.3012C23.8512 20.8287 24.5666 21.125 25.3125 21.125H28.125V29.5625Z"
                      fill="#2671D9" />
                  </svg>
                  <div class="py-2 w-[200px] flex-grow truncate pe-3">
                    <span class="text-[#333333] text-sm font-semibold">{{ fileNamelainnya }}</span>
                    <p class="text-[#9E9E9E] text-xs">{{ fileSizelainnya }}</p>
                  </div>
                </a>
                <div v-else class="w-[333px] h-auto">
                  <span class="text-[#9E9E9E] text-sm font-semibold">File belum diupload</span>
                </div>
              </div>
            </div>
            <div v-else>
              <div class="px-6 mt-6 mb-4 flex justify-between">
                <div>
                  <label class="text-[#4D5E80] font-semibold">Proposal Mitra
                    <span class="text-[#B3B3B3] text-xs">(Opsional)</span></label>
                  <a :href="linkDownloadmitra" v-if="fileNamemitra" class="w-[333px] h-auto border-[1px] flex rounded-lg mt-2 items-center">
                    <svg width="45" height="46" class="mx-4 my-2" viewBox="0 0 45 46" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <circle cx="22.5" cy="23" r="22.5" fill="#E9F1FB" />
                      <path
                        d="M30 20.1312C29.9902 20.0451 29.9714 19.9603 29.9437 19.8781V19.7937C29.8987 19.6974 29.8385 19.6087 29.7656 19.5313L24.1406 13.9062C24.0631 13.8333 23.9745 13.7732 23.8781 13.7281H23.7937C23.6985 13.6735 23.5933 13.6384 23.4844 13.625H17.8125C17.0666 13.625 16.3512 13.9213 15.8238 14.4488C15.2963 14.9762 15 15.6916 15 16.4375V29.5625C15 30.3084 15.2963 31.0238 15.8238 31.5512C16.3512 32.0787 17.0666 32.375 17.8125 32.375H27.1875C27.9334 32.375 28.6488 32.0787 29.1762 31.5512C29.7037 31.0238 30 30.3084 30 29.5625V20.1875V20.1312ZM24.375 16.8219L26.8031 19.25H25.3125C25.0639 19.25 24.8254 19.1512 24.6496 18.9754C24.4738 18.7996 24.375 18.5611 24.375 18.3125V16.8219ZM28.125 29.5625C28.125 29.8111 28.0262 30.0496 27.8504 30.2254C27.6746 30.4012 27.4361 30.5 27.1875 30.5H17.8125C17.5639 30.5 17.3254 30.4012 17.1496 30.2254C16.9738 30.0496 16.875 29.8111 16.875 29.5625V16.4375C16.875 16.1889 16.9738 15.9504 17.1496 15.7746C17.3254 15.5988 17.5639 15.5 17.8125 15.5H22.5V18.3125C22.5 19.0584 22.7963 19.7738 23.3238 20.3012C23.8512 20.8287 24.5666 21.125 25.3125 21.125H28.125V29.5625Z"
                        fill="#2671D9" />
                    </svg>
                    <div class="py-2 w-[200px] flex-grow truncate pe-3">
                      <span class="text-[#333333] text-sm font-semibold">{{ fileNamemitra }}</span>
                      <p class="text-[#9E9E9E] text-xs">{{ fileSizemitra }}</p>
                    </div>
                  </a>
                  <div v-else class="w-[333px] h-auto">
                    <span class="text-[#9E9E9E] text-sm font-semibold">File belum diupload</span>
                  </div>
                </div>
                <div>
                  <label class="text-[#4D5E80] font-semibold">
                    Dokumen Surat Menyurat
                    <span class="text-[#FF5656] text-xs">*</span>
                  </label>
                  <a :href="linkDownloadsurat" v-if="fileNamesurat" class="w-[333px] h-auto border-[1px] flex rounded-lg mt-2 items-center">
                    <svg width="45" height="46" class="mx-4 my-2" viewBox="0 0 45 46" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <circle cx="22.5" cy="23" r="22.5" fill="#E9F1FB" />
                      <path
                        d="M30 20.1312C29.9902 20.0451 29.9714 19.9603 29.9437 19.8781V19.7937C29.8987 19.6974 29.8385 19.6087 29.7656 19.5313L24.1406 13.9062C24.0631 13.8333 23.9745 13.7732 23.8781 13.7281H23.7937C23.6985 13.6735 23.5933 13.6384 23.4844 13.625H17.8125C17.0666 13.625 16.3512 13.9213 15.8238 14.4488C15.2963 14.9762 15 15.6916 15 16.4375V29.5625C15 30.3084 15.2963 31.0238 15.8238 31.5512C16.3512 32.0787 17.0666 32.375 17.8125 32.375H27.1875C27.9334 32.375 28.6488 32.0787 29.1762 31.5512C29.7037 31.0238 30 30.3084 30 29.5625V20.1875V20.1312ZM24.375 16.8219L26.8031 19.25H25.3125C25.0639 19.25 24.8254 19.1512 24.6496 18.9754C24.4738 18.7996 24.375 18.5611 24.375 18.3125V16.8219ZM28.125 29.5625C28.125 29.8111 28.0262 30.0496 27.8504 30.2254C27.6746 30.4012 27.4361 30.5 27.1875 30.5H17.8125C17.5639 30.5 17.3254 30.4012 17.1496 30.2254C16.9738 30.0496 16.875 29.8111 16.875 29.5625V16.4375C16.875 16.1889 16.9738 15.9504 17.1496 15.7746C17.3254 15.5988 17.5639 15.5 17.8125 15.5H22.5V18.3125C22.5 19.0584 22.7963 19.7738 23.3238 20.3012C23.8512 20.8287 24.5666 21.125 25.3125 21.125H28.125V29.5625Z"
                        fill="#2671D9" />
                    </svg>
                    <div class="py-2 w-[200px] flex-grow truncate pe-3">
                      <span class="text-[#333333] text-sm font-semibold">{{ fileNamesurat }}</span>
                      <p class="text-[#9E9E9E] text-xs">{{ fileSizesurat }}</p>
                    </div>
                  </a>
                  <div v-else class="w-[333px] h-auto">
                    <span class="text-[#9E9E9E] text-sm font-semibold">File belum diupload</span>
                  </div>
                </div>
                <div>
                  <label class="text-[#4D5E80] font-semibold">Dokumen Lainnya
                    <span class="text-[#B3B3B3] text-xs">(Opsional)</span></label>
                  <a :href="linkDownloadlainnya" v-if="fileNamelainnya" class="w-[333px] h-auto border-[1px] flex rounded-lg mt-2 items-center">
                    <svg width="45" height="46" class="mx-4 my-2" viewBox="0 0 45 46" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <circle cx="22.5" cy="23" r="22.5" fill="#E9F1FB" />
                      <path
                        d="M30 20.1312C29.9902 20.0451 29.9714 19.9603 29.9437 19.8781V19.7937C29.8987 19.6974 29.8385 19.6087 29.7656 19.5313L24.1406 13.9062C24.0631 13.8333 23.9745 13.7732 23.8781 13.7281H23.7937C23.6985 13.6735 23.5933 13.6384 23.4844 13.625H17.8125C17.0666 13.625 16.3512 13.9213 15.8238 14.4488C15.2963 14.9762 15 15.6916 15 16.4375V29.5625C15 30.3084 15.2963 31.0238 15.8238 31.5512C16.3512 32.0787 17.0666 32.375 17.8125 32.375H27.1875C27.9334 32.375 28.6488 32.0787 29.1762 31.5512C29.7037 31.0238 30 30.3084 30 29.5625V20.1875V20.1312ZM24.375 16.8219L26.8031 19.25H25.3125C25.0639 19.25 24.8254 19.1512 24.6496 18.9754C24.4738 18.7996 24.375 18.5611 24.375 18.3125V16.8219ZM28.125 29.5625C28.125 29.8111 28.0262 30.0496 27.8504 30.2254C27.6746 30.4012 27.4361 30.5 27.1875 30.5H17.8125C17.5639 30.5 17.3254 30.4012 17.1496 30.2254C16.9738 30.0496 16.875 29.8111 16.875 29.5625V16.4375C16.875 16.1889 16.9738 15.9504 17.1496 15.7746C17.3254 15.5988 17.5639 15.5 17.8125 15.5H22.5V18.3125C22.5 19.0584 22.7963 19.7738 23.3238 20.3012C23.8512 20.8287 24.5666 21.125 25.3125 21.125H28.125V29.5625Z"
                        fill="#2671D9" />
                    </svg>
                    <div class="py-2 w-[200px] flex-grow truncate pe-3">
                      <span class="text-[#333333] text-sm font-semibold">{{ fileNamelainnya }}</span>
                      <p class="text-[#9E9E9E] text-xs">{{ fileSizelainnya }}</p>
                    </div>
                  </a>
                  <div v-else class="w-[333px] h-auto">
                    <span class="text-[#9E9E9E] text-sm font-semibold">File belum diupload</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
        <div class="flex flex-row w-[1046px] h-auto ml-4 py-4">
          <div class="flex flex-col w-[511px] h-auto">
            <div class="flex items-center">
              <h1 class="font-sans text-[#4D5E80] text-[16px] font-semibold">Tanggapan</h1>
            </div>
            <div
              class="w-full h-[88px] bg-[#E0E0E0] border-[#E5E7E9] border-[1px] rounded-lg mt-2 flex items-start justify-start">
              <div class="flex p-4">
                <div class="ml-4">
                  <span class="block text-[#4D5E80] font-sans text-[14px] font-semibold">{{ dataBerkas?.responseText }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col w-[511px] h-auto ml-6">
            <div class="flex items-center">
              <h1 class="font-sans text-[#4D5E80] text-[16px] font-semibold">Approval</h1>
            </div>
            <div
              class="w-full h-[88px] bg-[#E0E0E0] border-[#E5E7E9] border-[1px] rounded-lg mt-2 flex items-start justify-start">
              <div class="flex p-4">
                <div class="ml-4">
                  <span class="block text-[#4D5E80] font-sans text-[14px] font-semibold">{{ dataBerkas?.approvalNote }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-if="position == 'PartnershipVP'" class="flex flex-row w-[1046px] h-auto ml-4 py-7">
          <button @click="SendReject" class="absolute bottom-[12px] right-[115px] flex">
            <div
              class="flex items-center justify-center w-[72px] h-[40px] rounded-lg bg-[#FFFFFF] border-[#C53830] border-[1px] hover:bg-[#FEE2E2] cursor-pointer transition-all">
              <span class="text-[14px] font-sans font-medium text-[#C53830] ml-3 mt-[9px] mr-3 mb-[9px]">Tolak</span>
            </div>
          </button>
          <button @click="SendDisposeManager" class="absolute bottom-[12px] right-[25px] flex">
            <div
              class="flex items-center justify-center w-[72px] h-[40px] rounded-lg bg-[#2671D9] hover:bg-[#1E5BB7] border-[#FFFFFF] border-[1px]">
              <span class="text-[14px] font-sans font-medium text-[#FFFFFF] ml-3 mt-[9px] mr-3 mb-[9px]">Terima</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { baseURL } from '@/api/apiManager';
import { fetchGet, fetchPost } from '@/api/apiFunction';
import SelectSearch from '../SelectSearch/SelectSearch.vue';
import Loading from '../loading.vue';
import ModalFailed from '../modalfailed.vue';
import ModalSuccess from '../modalsuccess.vue';
import ModalDialog from '../modaldialog.vue';

export default {
  components: {
    SelectSearch,
    Loading,
    ModalFailed,
    ModalSuccess,
    ModalDialog
  },
  data() {
    return {
      showDisposePopup: false,
      isDropdownArrowOpen: false,
      isDropdownArrowOpen1: false,
      isDropdownArrowOpen2: false,
      isDropdownArrowOpen3: false,
      showDropdown: false,
      showPopup: false,
      staffKemitraan: "",
      dataBerkas: null,
      base: null,
      id: null,
      fileNameKKB: null,
      fileSizeKKB: null,
      linkDownloadKKB: "",
      fileNameKKR: null,
      fileSizeKKR: null,
      linkDownloadKKR: "",
      fileNameKKF: null,
      fileSizeKKF: null,
      linkDownloadKKF: "",
      fileNameKKO: null,
      fileSizeKKO: null,
      linkDownloadKKO: "",
      fileNamemitra: null,
      fileSizemitra: null,
      linkDownloadmitra: "",
      fileNamesurat: null,
      fileSizesurat: null,
      linkDownloadsurat: "",
      fileNamelainnya: null,
      fileSizelainnya: null,
      linkDownloadlainnya: "",

      optionsStaff: [],
      disposedStaff: null,

      modalFailed: {
        isVisible: false,
        title: '',
        message: ''
      },
      modalSuccess: {
        isVisible: false,
        title: '',
        message: '',
        closeFunction: () => null
      },
      modalDialog: {
        isVisible: false,
        title: '',
        message: '',
        okFunction: () => null,
        closeFunction: () => null
      },
      isLoading: false,
      position: null,
    };
  },
  computed: {
    isStaffSelected() {
      return this.disposedStaff != null;
    },
  },
  watch: {
    dataBerkas: 'checkConditions',
    optionsStaff: 'checkConditions',
  },
  methods: {
    closeModalFailed() {
      this.modalFailed = {
        isVisible: false,
        title: '',
        message: ''
      }
    },
    closeModalSuccess() {
      this.modalSuccess = {
        isVisible: false,
        title: '',
        message: '',
        closeFunction: () => null
      }
    },
    closeModalDialog() {
      this.modalDialog = {
        isVisible: false,
        title: '',
        message: '',
        okFunction: () => null,
        closeFunction: () => null
      }
    },
    checkConditions() {
      if (this.dataBerkas !== null && this.optionsStaff.length > 0) {
        const selectedStaff = this.optionsStaff.find(item => item.value == this.dataBerkas.disposedStaff);
        if (selectedStaff) {
          this.disposedStaff = selectedStaff;
        }
      }
    },
    closePopup() {
      this.showDisposePopup = false;
    },
    toggleDropdownArrow() {
      this.isDropdownArrowOpen = !this.isDropdownArrowOpen;
    },
    toggleDropdownArrow1() {
      this.isDropdownArrowOpen1 = !this.isDropdownArrowOpen1;
    },
    toggleDropdownArrow2() {
      this.isDropdownArrowOpen2 = !this.isDropdownArrowOpen2;
    },
    toggleDropdownArrow3() {
      this.isDropdownArrowOpen3 = !this.isDropdownArrowOpen3;
    },
    navigateToDetail() {
      this.$router.push("/masukmanager");
    },
    navigateToStaff() {
      if (this.disposedStaff) {
        this.$router.push("/masukmanager");
      }
    },
    handleSelectionChange(option) {
      this.disposedStaff = option;
      console.log("Selected Option:", option);
    },
    // Popup Create
    SendDispose() {
      this.showDisposePopup = false;
      this.modalDialog = {
        isVisible: true,
        title: 'Dispose Pengajuan',
        message: `Apakan anda yakin akan mendispose pengajuan ke ${this.disposedStaff.label}`,
        okFunction: this.openDispose,
        closeFunction: this.closeDispose
      }
    },
    openDispose() {
      this.closeModalDialog();
      this.postDispose(this.successDispose, this.failDispose);
    },
    closeDispose() {
      this.closeModalDialog()
      this.showDisposePopup = true;
    },
    successDispose() {
      this.modalSuccess = {
        isVisible: true,
        title: 'Dispose Berhasil',
        message: `Pengajuan berhasil didispose ke ${this.disposedStaff.label}`,
        closeFunction: this.closeSelesaiDispose
      }
    },
    failDispose(data) {
      this.modalFailed = {
        isVisible: true,
        title: 'Dispose Gagal',
        message: data?.message ? data.message : "Silahkan hubungi admin"
      }
    },
    closeSelesaiDispose() {
      this.closeModalSuccess();
      this.$router.push('/masukmanager')
    },

    // Popup dispose manager
    SendDisposeManager() {
      this.showDisposeManagerPopup = false;
      this.modalDialog = {
        isVisible: true,
        title: 'Dispose Pengajuan Ke Manager',
        message: `Apakan anda yakin akan mendispose pengajuan ke manager`,
        okFunction: this.openDisposeManager,
        closeFunction: this.closeDisposeManager
      }
    },
    openDisposeManager() {
      this.closeModalDialog();
      this.postDisposeManager(this.successDisposeManager, this.failDisposeManager);
    },
    closeDisposeManager() {
      this.closeModalDialog()
      this.showDisposeManagerPopup = true;
    },
    successDisposeManager() {
      this.modalSuccess = {
        isVisible: true,
        title: 'Dispose Ke Manager Berhasil',
        message: `Pengajuan berhasil di dispose ke manager`,
        closeFunction: this.closeSelesaiDisposeManager
      }
    },
    failDisposeManager(data) {
      this.modalFailed = {
        isVisible: true,
        title: 'Dispose Gagal',
        message: data?.message ? data.message : "Silahkan hubungi admin"
      }
    },
    closeSelesaiDisposeManager() {
      this.closeModalSuccess();
      this.$router.push('/masukmanager')
    },

    // Popup reject
    SendReject() {
      this.showRejectPopup = false;
      this.modalDialog = {
        isVisible: true,
        title: 'Tolak Pengajuan',
        message: `Apakan anda yakin akan menolak pengajuan ini`,
        okFunction: this.openReject,
        closeFunction: this.closeReject
      }
    },
    openReject() {
      this.closeModalDialog();
      this.postReject(this.successReject, this.failReject);
    },
    closeReject() {
      this.closeModalDialog()
      this.showRejectPopup = true;
    },
    successReject() {
      this.modalSuccess = {
        isVisible: true,
        title: 'Tolak Pengajuan Berhasil',
        message: `Pengajuan berhasil di tolak`,
        closeFunction: this.closeSelesaiReject
      }
    },
    failReject(data) {
      this.modalFailed = {
        isVisible: true,
        title: 'Tolak Gagal',
        message: data?.message ? data.message : "Silahkan hubungi admin"
      }
    },
    closeSelesaiReject() {
      this.closeModalSuccess();
      this.$router.push('/masukmanager')
    },
    // api
    async getDataApi(base, id) {
      this.isLoading = true;
      const positionLevel = localStorage.getItem("position");
      let url = null;
      if (base == "PKS") {
        if (positionLevel == "PartnershipManager") {
          url = `mitra/manager/pks/incoming-data/${id}`;
        }
        if (positionLevel == "PartnershipVP") {
          url = `mitra/vp/pks/incoming-data/${id}`;
        }
      } else {
        if (positionLevel == "PartnershipManager") {
          url = `mitra/manager/mounda/incoming-data/${id}`;
        }
        if (positionLevel == "PartnershipVP") {
          url = `mitra/vp/mounda/incoming-data/${id}`;
        }
      }
      if (!url) {
        this.isLoading = false;
        return this.modalFailed = {
          isVisible: true,
          title: 'Role Tidak Terdaftar',
          message: "Posisi anda tidak dapat mengakses halaman ini"
        }
      }
      if (base == "PKS") {
        const res = await fetchGet(url, null, this.$router);
        if (res.status == 200) {
          this.dataBerkas = res.data;
          res.data.attachmentsPks.forEach((item) => {
            if (item.fileType == 'KKO') {
              this.fileNameKKO = item.fileName;
              this.fileSizeKKO = item.fileSize;
              this.linkDownloadKKO = `${baseURL.replace('/api',"")}/download/file/${item.id}`
            }
            if (item.fileType == 'KKF') {
              this.fileNameKKF = item.fileName;
              this.fileSizeKKF = item.fileSize;
              this.linkDownloadKKF = `${baseURL.replace('/api',"")}/download/file/${item.id}`
            }
            if (item.fileType == 'KKR') {
              this.fileNameKKR = item.fileName;
              this.fileSizeKKR = item.fileSize;
              this.linkDownloadKKR = `${baseURL.replace('/api',"")}/download/file/${item.id}`
            }
            if (item.fileType == 'KKB') {
              this.fileNameKKB = item.fileName;
              this.fileSizeKKB = item.fileSize;
              this.linkDownloadKKB = `${baseURL.replace('/api',"")}/download/file/${item.id}`
            }
            if (item.fileType == 'Dokumen Surat Menyurat') {
              this.fileNamesurat = item.fileName;
              this.fileSizesurat = item.fileSize;
              this.linkDownloadsurat = `${baseURL.replace('/api',"")}/download/file/${item.id}`
            }
            if (item.fileType == 'Proposal Mitra') {
              this.fileNamemitra = item.fileName;
              this.fileSizemitra = item.fileSize;
              this.linkDownloadmitra = `${baseURL.replace('/api',"")}/download/file/${item.id}`
            }
            if (item.fileType == 'Dokumen Lainnya') {
              this.fileNamelainnya = item.fileName;
              this.fileSizelainnya = item.fileSize;
              this.linkDownloadlainnya = `${baseURL.replace('/api',"")}/download/file/${item.id}`
            }
          })
          this.isLoading = false;
          console.log(res.data);
        } else {
          this.isLoading = false;
          this.modalFailed = {
            isVisible: true,
            title: 'Gagal Ambil Data',
            message: res.data.message ? res.data.message : "Silahkan hubungi admin"
          }
        }
      } else {
        const res = await fetchGet(
          url,
          null,
          this.$router
        );
        if (res.status == 200) {
          this.dataBerkas = res.data;
          res.data.attachmentsMou.forEach((item) => {
            if (item.fileType == 'Dokumen Surat Menyurat') {
              this.fileNamesurat = item.fileName;
              this.fileSizesurat = item.fileSize;
              this.linkDownloadsurat = `${baseURL.replace('/api',"")}/download/file/${item.id}`
            }
            if (item.fileType == 'Proposal Mitra') {
              this.fileNamemitra = item.fileName;
              this.fileSizemitra = item.fileSize;
              this.linkDownloadmitra = `${baseURL.replace('/api',"")}/download/file/${item.id}`
            }
            if (item.fileType == 'Dokumen Lainnya') {
              this.fileNamelainnya = item.fileName;
              this.fileSizelainnya = item.fileSize;
              this.linkDownloadlainnya = `${baseURL.replace('/api',"")}/download/file/${item.id}`
            }
          })
          this.isLoading = false;
          console.log(res.data);
        } else {
          this.isLoading = false;
          this.modalFailed = {
            isVisible: true,
            title: 'Gagal Ambil Data',
            message: res.data.message ? res.data.message : "Silahkan hubungi admin"
          }
        }
      }
    },
    async getDataUserApi() {
      this.isLoading = true;
      const params = { 'role': 'PartnershipStaff' }
      const res = await fetchGet('account/list-user', params, this.$router);
      if (res.status == 200) {
        this.optionsStaff = res.data.map(item => ({
          value: item.username,
          label: `${item.firstName} ${item.lastName}`
        }))
        this.isLoading = false;
        console.log(res.data, 'user');
      } else {
        this.isLoading = false;
        this.modalFailed = {
          isVisible: true,
          title: 'Gagal Ambil Data',
          message: res.data.message ? res.data.message : "Silahkan hubungi admin"
        }
      }
    },
    async postDispose(successFunction, failFunction) {
      this.isLoading = true;
      
      if (!this.disposedStaff) {
        this.isLoading = false;
        return this.modalFailed = {
          isVisible: true,
          title: 'Data Tidak Lengkap',
          message: "Silahkan pilih staff terlebih dahulu"
        }
      }
      const params = { disposedStaff: this.disposedStaff.value }
      if (this.base == "PKS") {
        const res = await fetchPost(`mitra/manager/pks/incoming-data/${this.id}`, params, null, this.$router);
        if (res.status == 200) {
          this.isLoading = false;
          successFunction();
        } else {
          this.isLoading = false;
          failFunction();
        }
      } else {
        const res = await fetchPost(`mitra/manager/mounda/incoming-data/${this.id}`, params, null, this.$router);
        if (res.status == 200) {
          this.isLoading = false;
          successFunction();
        } else {
          this.isLoading = false;
          failFunction();
        }
      }
    },
    async postDisposeManager(successFunction, failFunction) {
      this.isLoading = true;
      let url = null;
      if (this.position == "PartnershipVP") {
        if (this.base == 'PKS') {
          url = `mitra/vp/pks/incoming-data/${this.id}`;
        } else {
          url = `mitra/vp/mounda/incoming-data/${this.id}`;
        }
      }
      if (!url) {
        this.isLoading = false;
        return this.modalFailed = {
          isVisible: true,
          title: 'Role Tidak Terdaftar',
          message: "Posisi anda tidak dapat mengakses halaman ini"
        }
      }
      const res = await fetchPost(url, null, null, this.$router);
      if (res.status == 200) {
        this.isLoading = false;
        successFunction();
      } else {
        this.isLoading = false;
        failFunction();
      }
    },
    async postReject(successFunction, failFunction) {
      this.isLoading = true;
      let url = null;
      if (this.position == "PartnershipVP") {
        if (this.base == 'PKS') {
          url = `mitra/vp/pks/incoming-data/${this.id}/reject`;
        } else {
          url = `mitra/vp/mounda/incoming-data/${this.id}/reject`;
        }
      }
      if (!url) {
        this.isLoading = false;
        return this.modalFailed = {
          isVisible: true,
          title: 'Role Tidak Terdaftar',
          message: "Posisi anda tidak dapat mengakses halaman ini"
        }
      }
      const res = await fetchPost(url, null, null, this.$router);
      if (res.status == 200) {
        this.isLoading = false;
        successFunction();
      } else {
        this.isLoading = false;
        failFunction();
      }
    },
  },
  mounted() {
    if (this.$route.params.id && this.$route.params.base) {
      this.getDataApi(this.$route.params.base, this.$route.params.id);
    }
    this.getDataUserApi();
    this.base = this.$route.params.base;
    this.id = this.$route.params.id;
    this.position = localStorage.getItem("position")
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.rotate-180 {
  transform: rotate(180deg);
}
</style>
