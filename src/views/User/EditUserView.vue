<template>
  <div>
    <user-form :userId="$route.params.id">
      <template v-slot:back-link>
        <router-link :to="{ name: 'user-detail' }"
          >Back to user detail</router-link
        >
      </template>
    </user-form>
  </div>
</template>

<script>
import UserForm from "@/components/User/UserForm.vue";
export default {
  name: "EditUserView",

  components: {
    "user-form": UserForm
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {}
};
</script>

<style lang="scss" scoped></style>
