<template>
  <div class="flex flex-col items-start p-4 w-[248px] h-[1416px] bg-white border-r border-neutral-stroke">
    <!-- Logo -->
    <div @click="navigateToDetail" class="flex justify-between items-center w-[216px] h-[27px] mt-4 cursor-pointer">
      <svg width="77" height="13" viewBox="0 0 77 13" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <rect width="77" height="13" fill="url(#pattern0_1974_2101)" />
        <defs>
          <pattern id="pattern0_1974_2101" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlink:href="#image0_1974_2101" transform="matrix(0.00398406 0 0 0.0235979 0 -0.0191542)" />
          </pattern>
          <image
            id="image0_1974_2101"
            width="251"
            height="44"
            xlink:href="data:image/png;base64,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"
          />
        </defs>
      </svg>
    </div>
    <!-- Line -->
    <div class="w-[216px] h-0 border items-center border-[#E5E7E9] mt-[23px] mb-6"></div>
    <div class="flex flex-col w-full gap-[8px]">
      <!-- Dashboard -->
      <button
        :class="['flex text-[14px] font-sans font-semibold items-center justify p-2 rounded-lg transition-colors', isActive('Dashboard') ? 'bg-[#2671D9] text-[#FFFFFF]' : 'text-[#333333] hover:bg-[#DBEAFE]']"
        @click="navigateTo('Dashboard')"
      >
        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg" :class="['ml-[5px] mr-3', isActive('Dashboard') ? 'filter-white' : '']">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0.9375 1.25C0.9375 0.835786 1.27329 0.5 1.6875 0.5H16.3125C16.7267 0.5 17.0625 0.835786 17.0625 1.25C17.0625 1.66421 16.7267 2 16.3125 2H15.9375V9.6875C15.9375 11.0337 14.8462 12.125 13.5 12.125H12.8531L13.649 14.5128C13.78 14.9058 13.5676 15.3305 13.1747 15.4615C12.7817 15.5925 12.357 15.3801 12.226 14.9872L12.0219 14.375H5.97807L5.77401 14.9872C5.64303 15.3801 5.21829 15.5925 4.82533 15.4615C4.43237 15.3305 4.22 14.9058 4.35099 14.5128L5.14693 12.125H4.5C3.15381 12.125 2.0625 11.0337 2.0625 9.6875V2H1.6875C1.27329 2 0.9375 1.66421 0.9375 1.25ZM3.5625 2V9.6875C3.5625 10.2053 3.98223 10.625 4.5 10.625H13.5C14.0178 10.625 14.4375 10.2053 14.4375 9.6875V2H3.5625ZM6.72807 12.125L6.47807 12.875H11.5219L11.2719 12.125H6.72807ZM11.25 3.3125C11.6642 3.3125 12 3.64829 12 4.0625V8.5625C12 8.97671 11.6642 9.3125 11.25 9.3125C10.8358 9.3125 10.5 8.97671 10.5 8.5625V4.0625C10.5 3.64829 10.8358 3.3125 11.25 3.3125ZM9 5C9.41421 5 9.75 5.33579 9.75 5.75V8.5625C9.75 8.97671 9.41421 9.3125 9 9.3125C8.58579 9.3125 8.25 8.97671 8.25 8.5625V5.75C8.25 5.33579 8.58579 5 9 5ZM6.75 6.6875C7.16421 6.6875 7.5 7.02329 7.5 7.4375V8.5625C7.5 8.97671 7.16421 9.3125 6.75 9.3125C6.33579 9.3125 6 8.97671 6 8.5625V7.4375C6 7.02329 6.33579 6.6875 6.75 6.6875Z"
            :fill="isActive('Dashboard') ? '#FFFFFF' : '#2671D9'"
          />
        </svg>
        Dashboard
      </button>
      <!-- Masuk -->
      <button
        :class="['flex text-[14px] font-sans font-semibold items-center justify p-2 rounded-lg transition-colors', isActive('MasukManager') ? 'bg-[#2671D9] text-[#FFFFFF]' : 'text-[#333333] hover:bg-[#DBEAFE]']"
        @click="navigateTo('MasukManager')"
      >
        <svg class="ml-[8px] mr-[14px]" width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4 2.75C4 1.92157 4.67157 1.25 5.5 1.25H7C7.82843 1.25 8.5 1.92157 8.5 2.75C8.5 3.57843 7.82843 4.25 7 4.25H5.5C4.67157 4.25 4 3.57843 4 2.75Z"
            :fill="isActive('MasukManager') ? '#FFFFFF' : '#2671D9'"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4 2.75H2.5C1.67157 2.75 1 3.42157 1 4.25V13.25C1 14.0784 1.67157 14.75 2.5 14.75H10C10.8284 14.75 11.5 14.0784 11.5 13.25V12.875M4 2.75C4 3.57843 4.67157 4.25 5.5 4.25H7C7.82843 4.25 8.5 3.57843 8.5 2.75M4 2.75C4 1.92157 4.67157 1.25 5.5 1.25H7C7.82843 1.25 8.5 1.92157 8.5 2.75M8.5 2.75H10C10.8284 2.75 11.5 3.42157 11.5 4.25V5.75M6.25 9.5H12.928M12.928 9.5L10.9377 7.4375M12.928 9.5L10.9377 11.375"
            :stroke="isActive('MasukManager') ? '#FFFFFF' : '#2671D9'"
            stroke-width="1.3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Masuk
      </button>
      <!-- Approval -->
      <button
        :class="['flex text-[14px] font-sans font-semibold items-center justify p-2 rounded-lg transition-colors', isActive('Approval') ? 'bg-[#2671D9] text-[#FFFFFF]' : 'text-[#333333] hover:bg-[#DBEAFE]']"
        @click="navigateTo('Approval')"
      >
        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg" :class="['ml-[5px] mr-[14px]', isActive('Approval') ? 'filter-white' : '']">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.46875 2C5.48499 2 4.6875 2.79749 4.6875 3.78125C4.6875 4.76501 5.48499 5.5625 6.46875 5.5625C7.45251 5.5625 8.25 4.76501 8.25 3.78125C8.25 2.79749 7.45251 2 6.46875 2ZM3.1875 3.78125C3.1875 1.96907 4.65657 0.5 6.46875 0.5C8.28093 0.5 9.75 1.96907 9.75 3.78125C9.75 5.59343 8.28093 7.0625 6.46875 7.0625C4.65657 7.0625 3.1875 5.59343 3.1875 3.78125ZM13.2188 4.25C12.5457 4.25 12 4.79565 12 5.46875C12 6.14185 12.5457 6.6875 13.2188 6.6875C13.8918 6.6875 14.4375 6.14185 14.4375 5.46875C14.4375 4.79565 13.8918 4.25 13.2188 4.25ZM10.5 5.46875C10.5 3.96723 11.7172 2.75 13.2188 2.75C14.7203 2.75 15.9375 3.96723 15.9375 5.46875C15.9375 6.97027 14.7203 8.1875 13.2188 8.1875C11.7172 8.1875 10.5 6.97027 10.5 5.46875ZM2.45217 12.9974C3.64857 13.6371 5.01535 14 6.46875 14C7.92216 14 9.28896 13.6371 10.4854 12.9974C10.4365 12.4223 10.2672 11.8829 10.0031 11.4031C9.31627 10.1553 7.9904 9.3125 6.46875 9.3125C4.35903 9.3125 2.62783 10.9331 2.45217 12.9974ZM11.4559 14.1743C9.98628 15.0178 8.28277 15.5 6.46875 15.5C4.58005 15.5 2.81113 14.9773 1.30133 14.0683C1.07983 13.9349 0.942643 13.6969 0.938296 13.4383C0.937768 13.4069 0.9375 13.3754 0.9375 13.3438C0.9375 10.2889 3.41392 7.8125 6.46875 7.8125C8.19355 7.8125 9.73319 8.60216 10.7469 9.83768C11.4148 9.27642 12.2771 8.9375 13.2187 8.9375C15.3416 8.9375 17.0625 10.6584 17.0625 12.7812C17.0625 12.835 17.0614 12.8885 17.0592 12.9417C17.0478 13.2166 16.8869 13.4632 16.6399 13.5843C15.6065 14.0909 14.4447 14.375 13.2187 14.375C12.6131 14.375 12.0229 14.3057 11.4559 14.1743ZM11.9685 12.7507C12.3721 12.8322 12.7901 12.875 13.2187 12.875C14.0386 12.875 14.8204 12.7183 15.5369 12.4336C15.3689 11.304 14.395 10.4375 13.2187 10.4375C12.5631 10.4375 11.9701 10.7063 11.544 11.1415C11.7623 11.6439 11.9081 12.1849 11.9685 12.7507Z"
            :fill="isActive('Approval') ? '#FFFFFF' : '#2671D9'"
          />
        </svg>
        Approval
      </button>
      <!-- Proses -->
      <button
        :class="['flex text-[14px] font-sans font-semibold items-center justify p-2 rounded-lg transition-colors', isActive('Proses') ? 'bg-[#2671D9] text-[#FFFFFF]' : 'text-[#333333] hover:bg-[#DBEAFE]']"
        @click="navigateTo('Proses')"
      >
        <svg class="ml-[5px] mr-[16px]" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14.8006 1.08937L4.18235 9.93824M6.6839 12.4509L9.10754 14.8634C9.25638 15.016 9.44247 15.127 9.64741 15.1856C9.85234 15.2441 10.069 15.2482 10.276 15.1973C10.4841 15.1488 10.6762 15.0476 10.8339 14.9033C10.9915 14.7591 11.1094 14.5768 11.1762 14.3738L15.1555 2.44474C15.2388 2.22131 15.2561 1.97867 15.2054 1.7457C15.1546 1.51273 15.038 1.29923 14.8695 1.13064C14.7009 0.962042 14.4874 0.845444 14.2544 0.794725C14.0214 0.744005 13.7788 0.761301 13.5554 0.844552L1.62628 4.82499C1.41633 4.89654 1.2293 5.02287 1.08453 5.19092C0.939758 5.35897 0.842504 5.56264 0.802823 5.78087C0.761837 5.97949 0.770889 6.18519 0.829164 6.37944C0.88744 6.57369 0.993109 6.7504 1.13666 6.89366L4.18235 9.93935L4.0822 13.7963L6.6839 12.4509Z"
            :stroke="isActive('Proses') ? '#FFFFFF' : '#2671D9'"
            stroke-width="1.3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Proses
      </button>
      <!-- Selesai -->
      <button
        :class="['flex text-[14px] font-sans font-semibold items-center justify p-2 rounded-lg transition-colors', isActive('Selesai') ? 'bg-[#2671D9] text-[#FFFFFF]' : 'text-[#333333] hover:bg-[#DBEAFE]']"
        @click="navigateTo('Selesai')"
      >
        <svg class="ml-[5px] mr-[14px]" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.27759 6.66H13.2151H9.27759Z" fill="white" />
          <path d="M9.27759 6.66H13.2151" :stroke="isActive('Selesai') ? '#FFFFFF' : '#2671D9'" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M4.78491 6.66L5.34741 7.2225L7.03491 5.535" :stroke="isActive('Selesai') ? '#FFFFFF' : '#2671D9'" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M9.27759 11.91H13.2151" :stroke="isActive('Selesai') ? '#FFFFFF' : '#2671D9'" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M4.78491 11.91L5.34741 12.4725L7.03491 10.785" :stroke="isActive('Selesai') ? '#FFFFFF' : '#2671D9'" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
          <path
            d="M6.75 16.5H11.25C15 16.5 16.5 15 16.5 11.25V6.75C16.5 3 15 1.5 11.25 1.5H6.75C3 1.5 1.5 3 1.5 6.75V11.25C1.5 15 3 16.5 6.75 16.5Z"
            :stroke="isActive('Selesai') ? '#FFFFFF' : '#2671D9'"
            stroke-width="1.3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Selesai
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SidebarKemitraan, DashboardButton",
  data() {
    return {
      selectedMenu: "Dashboard",
      position: null,
    };
  },
  methods: {
    navigateToDetail() {
      this.$router.push("/homepage");
    },
    navigateTo(menu) {
      this.selectedMenu = menu;
      switch (menu) {
        case "Dashboard":
          this.$router.push("/dashboard");
          break;
        case "MasukManager":
          this.$router.push("/masukmanager");
          break;
        case "Approval":
          this.$router.push("/approval");
          break;
        case "Proses":
          this.$router.push("/proses");
          break;
        case "Selesai":
          this.$router.push("/selesai");
          break;
        default:
          break;
      }
    },
    isActive(menu) {
      const routePath = this.$route.path;

      switch (menu) {
        case "Dashboard":
          return routePath === "/dashboard";
        case "MasukManager":
          return routePath.startsWith("/masukmanager");
        case "Approval":
          return routePath.startsWith("/approval");
        case "Proses":
          return routePath.startsWith("/proses");
        case "Selesai":
          return routePath.startsWith("/selesai");
        default:
          return false;
      }
    },
  },
  mounted() {
    this.position = localStorage.getItem('position');
  }
};
</script>

<style scoped>
button {
  cursor: pointer;
  border: none;
  outline: none;
  transition: background-color 0.3s;
}
.filter-white {
  fill: white;
}
</style>
