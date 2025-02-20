<template>
  <div class="login-page">
    <LoginPage />
  </div>
</template>

<script>
import LoginPage from "@/components/LoginPage.vue";

export default {
  components: {
    LoginPage,
  },
};
</script>

<style scoped>
.login-page {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #FFFFFF;
}
</style>
