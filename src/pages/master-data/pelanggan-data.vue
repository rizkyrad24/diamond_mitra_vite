<template>
  <div class="">
    <div class="background">
      <div class="flex">
        <SidebarMasterData />
        <div class="flex-grow">
          <MainBar />
          <PelangganList />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MainBar from "@/components/NavBar/MainBar.vue";
import SidebarMasterData from "@/components/NavBar/SidebarMasterData.vue";
import PelangganList from "@/components/MasterData/pelanggan-list.vue";

export default {
  components: {
    SidebarMasterData,
    PelangganList,
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