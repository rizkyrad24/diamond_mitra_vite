<template>
  <div class="flex flex-col items-start p-4 w-[248px] h-[1416px] bg-white border-r border-neutral-stroke">
    <!-- Logo Section -->
    <div
      class="flex justify-between items-center w-[216px] h-[27px] mt-4 cursor-pointer"
      @click="navigateToDetail"
    >
      <svg
        width="77"
        height="13"
        viewBox="0 0 77 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <rect
          width="77"
          height="13"
          fill="url(#pattern0_1974_2101)"
        />
        <defs>
          <pattern
            id="pattern0_1974_2101"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlink:href="#image0_1974_2101"
              transform="matrix(0.00398406 0 0 0.0235979 0 -0.0191542)"
            />
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
    <div class="w-[216px] h-0 border items-center border-[#E5E7E9] mt-[23px] mb-6" />
    <div class="flex flex-col w-full gap-[8px]">
      <!-- User -->
      <button
        :class="['flex text-[14px] font-sans font-semibold items-center justify p-2 rounded-lg transition-colors', isActive('SelesaiStaff') ? 'bg-[#2671D9] text-[#FFFFFF]' : 'text-[#333333] hover:bg-[#DBEAFE]']"
        @click="navigateTo('User')"
      >
        <svg
          class="ml-[5px] mr-[14px]"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.27759 6.66H13.2151H9.27759Z"
            fill="white"
          />
          <path
            d="M9.27759 6.66H13.2151"
            :stroke="isActive('User') ? '#FFFFFF' : '#2671D9'"
            stroke-width="1.3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4.78491 6.66L5.34741 7.2225L7.03491 5.535"
            :stroke="isActive('User') ? '#FFFFFF' : '#2671D9'"
            stroke-width="1.3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.27759 11.91H13.2151"
            :stroke="isActive('User') ? '#FFFFFF' : '#2671D9'"
            stroke-width="1.3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4.78491 11.91L5.34741 12.4725L7.03491 10.785"
            :stroke="isActive('User') ? '#FFFFFF' : '#2671D9'"
            stroke-width="1.3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6.75 16.5H11.25C15 16.5 16.5 15 16.5 11.25V6.75C16.5 3 15 1.5 11.25 1.5H6.75C3 1.5 1.5 3 1.5 6.75V11.25C1.5 15 3 16.5 6.75 16.5Z"
            :stroke="isActive('User') ? '#FFFFFF' : '#2671D9'"
            stroke-width="1.3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        User
      </button>
      <!-- Pejabat -->
      <button
        :class="['flex text-[14px] font-sans font-semibold items-center justify p-2 rounded-lg transition-colors', isActive('SelesaiStaff') ? 'bg-[#2671D9] text-[#FFFFFF]' : 'text-[#333333] hover:bg-[#DBEAFE]']"
        @click="navigateTo('Pejabat')"
      >
        <svg
          class="ml-[5px] mr-[14px]"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.27759 6.66H13.2151H9.27759Z"
            fill="white"
          />
          <path
            d="M9.27759 6.66H13.2151"
            :stroke="isActive('Pejabat') ? '#FFFFFF' : '#2671D9'"
            stroke-width="1.3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4.78491 6.66L5.34741 7.2225L7.03491 5.535"
            :stroke="isActive('Pejabat') ? '#FFFFFF' : '#2671D9'"
            stroke-width="1.3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.27759 11.91H13.2151"
            :stroke="isActive('Pejabat') ? '#FFFFFF' : '#2671D9'"
            stroke-width="1.3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4.78491 11.91L5.34741 12.4725L7.03491 10.785"
            :stroke="isActive('Pejabat') ? '#FFFFFF' : '#2671D9'"
            stroke-width="1.3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6.75 16.5H11.25C15 16.5 16.5 15 16.5 11.25V6.75C16.5 3 15 1.5 11.25 1.5H6.75C3 1.5 1.5 3 1.5 6.75V11.25C1.5 15 3 16.5 6.75 16.5Z"
            :stroke="isActive('Pejabat') ? '#FFFFFF' : '#2671D9'"
            stroke-width="1.3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Pejabat
      </button>
      <!-- Pelanggan -->
      <button
        :class="['flex text-[14px] font-sans font-semibold items-center justify p-2 rounded-lg transition-colors', isActive('SelesaiStaff') ? 'bg-[#2671D9] text-[#FFFFFF]' : 'text-[#333333] hover:bg-[#DBEAFE]']"
        @click="navigateTo('Pelanggan')"
      >
        <svg
          class="ml-[5px] mr-[14px]"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.27759 6.66H13.2151H9.27759Z"
            fill="white"
          />
          <path
            d="M9.27759 6.66H13.2151"
            :stroke="isActive('Pelanggan') ? '#FFFFFF' : '#2671D9'"
            stroke-width="1.3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4.78491 6.66L5.34741 7.2225L7.03491 5.535"
            :stroke="isActive('Pelanggan') ? '#FFFFFF' : '#2671D9'"
            stroke-width="1.3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.27759 11.91H13.2151"
            :stroke="isActive('Pelanggan') ? '#FFFFFF' : '#2671D9'"
            stroke-width="1.3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4.78491 11.91L5.34741 12.4725L7.03491 10.785"
            :stroke="isActive('Pelanggan') ? '#FFFFFF' : '#2671D9'"
            stroke-width="1.3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6.75 16.5H11.25C15 16.5 16.5 15 16.5 11.25V6.75C16.5 3 15 1.5 11.25 1.5H6.75C3 1.5 1.5 3 1.5 6.75V11.25C1.5 15 3 16.5 6.75 16.5Z"
            :stroke="isActive('Pelanggan') ? '#FFFFFF' : '#2671D9'"
            stroke-width="1.3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Pelanggan
      </button>
      <!-- Produk -->
      <button
        :class="['flex text-[14px] font-sans font-semibold items-center justify p-2 rounded-lg transition-colors', isActive('SelesaiStaff') ? 'bg-[#2671D9] text-[#FFFFFF]' : 'text-[#333333] hover:bg-[#DBEAFE]']"
        @click="navigateTo('Produk')"
      >
        <svg
          class="ml-[5px] mr-[14px]"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.27759 6.66H13.2151H9.27759Z"
            fill="white"
          />
          <path
            d="M9.27759 6.66H13.2151"
            :stroke="isActive('Produk') ? '#FFFFFF' : '#2671D9'"
            stroke-width="1.3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4.78491 6.66L5.34741 7.2225L7.03491 5.535"
            :stroke="isActive('Produk') ? '#FFFFFF' : '#2671D9'"
            stroke-width="1.3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.27759 11.91H13.2151"
            :stroke="isActive('Produk') ? '#FFFFFF' : '#2671D9'"
            stroke-width="1.3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4.78491 11.91L5.34741 12.4725L7.03491 10.785"
            :stroke="isActive('Produk') ? '#FFFFFF' : '#2671D9'"
            stroke-width="1.3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6.75 16.5H11.25C15 16.5 16.5 15 16.5 11.25V6.75C16.5 3 15 1.5 11.25 1.5H6.75C3 1.5 1.5 3 1.5 6.75V11.25C1.5 15 3 16.5 6.75 16.5Z"
            :stroke="isActive('Produk') ? '#FFFFFF' : '#2671D9'"
            stroke-width="1.3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Produk
      </button>
      <!-- Candidate -->
      <button
        :class="['flex text-[14px] font-sans font-semibold items-center justify p-2 rounded-lg transition-colors', isActive('SelesaiStaff') ? 'bg-[#2671D9] text-[#FFFFFF]' : 'text-[#333333] hover:bg-[#DBEAFE]']"
        @click="navigateTo('Candidate')"
      >
        <svg
          class="ml-[5px] mr-[14px]"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.27759 6.66H13.2151H9.27759Z"
            fill="white"
          />
          <path
            d="M9.27759 6.66H13.2151"
            :stroke="isActive('Candidate') ? '#FFFFFF' : '#2671D9'"
            stroke-width="1.3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4.78491 6.66L5.34741 7.2225L7.03491 5.535"
            :stroke="isActive('Candidate') ? '#FFFFFF' : '#2671D9'"
            stroke-width="1.3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.27759 11.91H13.2151"
            :stroke="isActive('Candidate') ? '#FFFFFF' : '#2671D9'"
            stroke-width="1.3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4.78491 11.91L5.34741 12.4725L7.03491 10.785"
            :stroke="isActive('Candidate') ? '#FFFFFF' : '#2671D9'"
            stroke-width="1.3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6.75 16.5H11.25C15 16.5 16.5 15 16.5 11.25V6.75C16.5 3 15 1.5 11.25 1.5H6.75C3 1.5 1.5 3 1.5 6.75V11.25C1.5 15 3 16.5 6.75 16.5Z"
            :stroke="isActive('Candidate') ? '#FFFFFF' : '#2671D9'"
            stroke-width="1.3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Candidate
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SidebarStaff",
  data() {
    return {
      selectedMenu: "DashboardStaff",
    };
  },
  methods: {
    navigateToDetail() {
      this.$router.push("/mitra/homepage");
    },
    navigateTo(menu) {
      this.selectedMenu = menu;
      switch (menu) {
        case "User":
          this.$router.push("/mitra/user");
          break;
        case "Pejabat":
          this.$router.push("/mitra/pejabat");
          break;
        case "Pelanggan":
          this.$router.push("/mitra/pelanggan");
          break;
        case "Produk":
          this.$router.push("/mitra/produk");
          break;
        case "Candidate":
          this.$router.push("/mitra/candidate");
          break;
        default:
          break;
      }
    },
    isActive(menu) {
      const routePath = this.$route.path;

      switch (menu) {
        case "DashboardStaff":
          return routePath === "/dashboardstaff";
        case "MasukStaff":
          return routePath.startsWith("/masukstaff");
        case "ProsesStaff":
          return routePath.startsWith("/prosesstaff");
        case "SelesaiStaff":
          return routePath.startsWith("/selesaistaff");
        default:
          return false;
      }
    },
  },
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