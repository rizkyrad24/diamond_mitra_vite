<template>
  <div class="">
    <div class="background">
      <div class="flex">
        <SidebarKemitraan />
        <div class="flex-grow">
          <MainBar />
          <ApprovalDitolak />
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import MainBar from "@/components/NavBar/MainBar.vue";
import SidebarKemitraan from "@/components/NavBar/SidebarKemitraan.vue";
import ApprovalDitolak from "@/components/Manager/ApprovalDitolak.vue";


export default {
components: {
    SidebarKemitraan,
    ApprovalDitolak,
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
  