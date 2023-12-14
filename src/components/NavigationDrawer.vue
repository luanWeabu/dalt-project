<template>
  <div>
    <v-navigation-drawer v-model="isShowing" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item :to="{ name: 'home' }">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>
          <v-list-item :to="{ name: 'user-list' }">
            <v-list-item-icon><v-icon>mdi-account</v-icon> </v-list-item-icon>
            <v-list-item-title>User</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { LAYOUT_EVENT } from "@/constant/event.constant";
export default {
  name: "NavigationDrawer",

  props: {
    isShowingDrawer: {
      type: Boolean,
      required: true
    }
  },

  data() {
    return {
      group: "",
      isShowing: false
    };
  },
  watch: {
    isShowing(value) {
      this.$emit(LAYOUT_EVENT.UPDATE_SHOW_DRAWER, value);
    },
    isShowingDrawer(value) {
      this.isShowing = value;
    }
  }
};
</script>

<style lang="scss" scoped></style>
