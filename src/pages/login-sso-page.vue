<template>
  <div class="login-page">
    <LoginSSOPage />
  </div>
</template>

<script>
import LoginSSOPage from "@/components/LoginSSOPage.vue";

export default {
  components: {
    LoginSSOPage,
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
