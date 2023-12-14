<template>
  <div>
    <app-bar @showDrawer="showDrawer"></app-bar>
    <router-view></router-view>
    <navigation-drawer
      :isShowingDrawer.sync="isShowingDrawer"
    ></navigation-drawer>
  </div>
</template>

<script>
import AppBar from "@/components/AppBar.vue";
import NavigationDrawer from "@/components/NavigationDrawer.vue";

export default {
  data() {
    return {
      isShowingDrawer: false
    };
  },
  components: {
    AppBar,
    NavigationDrawer
  },
  methods: {
    showDrawer() {
      this.isShowingDrawer = true;
    }
  }
};
</script>

<style></style>
