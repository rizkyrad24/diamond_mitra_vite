<template>
  <div class="">
    <div class="background">
      <div class="flex">
        <SidebarStaff />
        <div class="flex-grow">
          <MainBar />
          <DetailPengajuanStaff />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MainBar from "@/components/NavBar/MainBar.vue";
import SidebarStaff from "@/components/NavBar/SidebarStaff.vue";
import DetailPengajuanStaff from "@/components/Staff/DetailPengajuanStaff.vue";

export default {
  components: {
    SidebarStaff,
    MainBar,
    DetailPengajuanStaff,
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
