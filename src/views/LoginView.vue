<template>
  <div>
    <v-main>
      <v-col cols="10" lg="4" class="mx-auto">
        <template v-if="currentStep === LOGIN_STEP.ENTER_EMAIL">
          <login-enter-email
            @nextStep="currentStep = LOGIN_STEP.ENTER_PASSWORD"
          ></login-enter-email>
        </template>
        <template v-if="currentStep === LOGIN_STEP.ENTER_PASSWORD">
          <login-enter-password></login-enter-password>
        </template>
      </v-col>
    </v-main>
  </div>
</template>

<script>
import LoginEnterEmail from "@/components/Login/LoginEnterEmail.vue";
import LoginEnterPassword from "@/components/Login/LoginEnterPassword.vue";
import { LOGIN_STEP } from "@/constant/step.constant";

export default {
  components: {
    "login-enter-email": LoginEnterEmail,
    "login-enter-password": LoginEnterPassword
  },
  data() {
    return {
      LOGIN_STEP,
      currentStep: LOGIN_STEP.ENTER_EMAIL
    };
  },

  methods: {}
};
</script>

<style lang="scss" scoped></style>
