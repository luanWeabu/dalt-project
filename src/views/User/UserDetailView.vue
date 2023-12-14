<template>
  <div>
    <div class="text-center">User Detail</div>
    <v-main>
      <v-col cols="12" lg="5" class="mx-auto">
        <div class="back-link">
          <slot name="back-link">
            <router-link :to="{ name: 'user-list' }"
              >Back to user list</router-link
            >
          </slot>
        </div>
        <v-form>
          <v-container>
            <v-row class="align-center">
              <v-col cols="10" lg="6" class="mx-auto">
                <v-card>
                  <v-card-text>
                    <div class="information">
                      <h3>First Name</h3>
                      <div>{{ user?.firstName }}</div>
                      <v-divider></v-divider>
                    </div>
                    <div class="information">
                      <h3>Last Name</h3>
                      <div>{{ user?.lastName }}</div>
                      <v-divider></v-divider>
                    </div>
                    <div class="information">
                      <h3>Email</h3>
                      <div>{{ user?.email }}</div>
                      <v-divider></v-divider>
                    </div>
                    <div class="information">
                      <h3>Phone</h3>
                      <div>{{ user?.phone }}</div>
                      <v-divider></v-divider>
                    </div>
                    <div class="information">
                      <h3>Date Of birth</h3>
                      <div>{{ user?.dateOfBirth }}</div>
                      <v-divider></v-divider>
                    </div>
                    <div class="information">
                      <h3>Role</h3>
                      <div>{{ user?.role }}</div>
                    </div>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-col>
    </v-main>
  </div>
</template>

<script>
import userService from "@/service/user.service";

export default {
  name: "UserDetailView",

  data() {
    return {
      id: this.$route.params.id,
      user: null
    };
  },
  async mounted() {
    this.user = await userService.getUserDetail(this.id);
  }
};
</script>

<style lang="scss" scoped>
.information {
  padding: 10px;
}
</style>
