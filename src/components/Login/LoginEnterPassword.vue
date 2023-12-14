<template>
  <div>
    <v-card>
      <div class="text-center">
        <v-avatar size="100" color="indigo lighten-4"
          ><v-icon size="40">mdi-account</v-icon></v-avatar
        >
      </div>
      <v-form>
        <v-container>
          <v-row class="align-center justify-center">
            <v-col cols="12" sm="6" class="max-auto">
              <v-card-text>Email Something will render</v-card-text>
              <v-text-field
                v-model="password"
                :append-icon="isPasswordVisible ? 'mdi-eye' : 'mdi-eye-off'"
                :type="isPasswordVisible ? 'text' : 'password'"
                counter="25"
                label="Please, Enter your password"
                @click:append="isPasswordVisible != isPasswordVisible"
              >
              </v-text-field>
              <v-btn>Login</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "LoginEnterPassword",

  data() {
    return {
      isPasswordVisible: false,
      password: "Password"
    };
  },

  mounted() {},

  methods: {}
};
</script>

<style lang="scss" scoped></style>
