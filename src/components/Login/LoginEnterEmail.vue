<template>
  <div>
    <v-card
      ><div class="text-center">
        <h2 class="indigo--text">Login</h2>
        <p>Enter your email</p>
      </div>
      <v-form>
        <v-container>
          <v-row class="align-center">
            <v-col cols="12" sm="6" class="mx-auto">
              <v-text-field
                v-model="email"
                type="email"
                label="email"
                clearable
                outlined
                class="mb-2"
              ></v-text-field>
              <v-btn @click="changeCurrentStep">Next</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form></v-card
    >
  </div>
</template>

<script>
import { LOGIN_EVENT } from "@/constant/event.constant";

export default {
  name: "LoginEnterEmail",

  data() {
    return {
      email: ""
    };
  },

  mounted() {},

  methods: {
    changeCurrentStep() {
      this.$emit(LOGIN_EVENT.NEXT_STEP);
    }
  }
};
</script>

<style lang="scss" scoped></style>
