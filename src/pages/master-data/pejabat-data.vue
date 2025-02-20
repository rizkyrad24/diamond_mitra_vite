<template>
  <div class="">
    <div class="background">
      <div class="flex">
        <SidebarMasterData />
        <div class="flex-grow">
          <MainBar />
          <PejabatList />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MainBar from "@/components/NavBar/MainBar.vue";
import PejabatList from "@/components/MasterData/pejabat-list.vue";
import SidebarMasterData from "@/components/NavBar/SidebarMasterData.vue";

export default {
  components: {
    SidebarMasterData,
    PejabatList,
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