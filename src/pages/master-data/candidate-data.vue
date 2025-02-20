<template>
  <div class="">
    <div class="background">
      <div class="flex">
        <SidebarMasterData />
        <div class="flex-grow">
          <MainBar />
          <CandidateList />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MainBar from "@/components/NavBar/MainBar.vue";
import SidebarMasterData from "@/components/NavBar/SidebarMasterData.vue";
import CandidateList from "@/components/MasterData/candidate-list.vue";

export default {
  components: {
    SidebarMasterData,
    CandidateList,
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