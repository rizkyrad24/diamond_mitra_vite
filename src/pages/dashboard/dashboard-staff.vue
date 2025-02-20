<template>
    <div class="">
      <div class="background">
        <div class="flex">
          <SidebarStaff />
          <div class="flex-grow">
            <MainBar />
            <DashboardStaff />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import MainBar from "@/components/NavBar/MainBar.vue";
  import SidebarStaff from "@/components/NavBar/SidebarStaff.vue";
  import DashboardStaff from "@/components/Staff/DashboardStaff.vue";
  
  export default {
    components: {
      SidebarStaff,
      DashboardStaff,
      MainBar,
    },
  };
  </script>
  
  <style>
  .background {
    width: Fixed (1, 366px) px;
    height: Hug (1, 416px) px;
    left: 3733px;
    gap: 0px;
    opacity: 0px;
    background: #f6f7fd;
  }
  </style>
  