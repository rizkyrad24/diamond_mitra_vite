<template>
  <div class="">
    <div class="background">
      <div class="flex">
        <SidebarStaff />
        <div class="flex-grow">
          <MainBar />
          <MasukStaff />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MainBar from "@/components/NavBar/MainBar.vue";
import SidebarStaff from "@/components/NavBar/SidebarStaff.vue";
import MasukStaff from "@/components/Staff/MasukStaff.vue";

export default {
  components: {
    SidebarStaff,
    MainBar,
    MasukStaff,
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
