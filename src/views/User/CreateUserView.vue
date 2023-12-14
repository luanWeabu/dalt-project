<template>
  <div>
    <user-form />
  </div>
</template>

<script>
import UserForm from "@/components/User/UserForm.vue";

export default {
  name: "CreateUserView",

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
