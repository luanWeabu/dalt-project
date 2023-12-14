<template>
  <div>
    <v-app-bar color="#212121" dense dark>
      <v-app-bar-nav-icon @click="showDrawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Dalt Admin</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon><v-icon>mdi-account</v-icon></v-btn>
    </v-app-bar>
  </div>
</template>

<script>
import { LAYOUT_EVENT } from "@/constant/event.constant";

export default {
  name: "AppBar",

  methods: {
    showDrawer() {
      this.$emit(LAYOUT_EVENT.SHOW_DRAWER);
    }
  }
};
</script>

<style lang="scss" scoped></style>
