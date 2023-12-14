<template>
  <div>
    <v-main>
      <v-col cols="12" lg="7" class="mx-auto"
        ><h1 class="text-center">User List</h1>
        <v-card>
          <v-card-title>
            <v-btn @click="$router.push({ name: 'user-create' })"
              >Create user</v-btn
            >
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            ></v-text-field
          ></v-card-title>
          <v-data-table :headers="headers" :items="users">
            <template v-slot:[`item.actions`]="{ item }">
              <v-icon @click="editUser(item.id)">mdi-information</v-icon>
              <v-icon @click="deleteUser(item.id)">mdi-delete</v-icon>
            </template>
          </v-data-table>
          <v-dialog max-width="500" v-model="dialogDelete">
            <v-card>
              <v-card-title class="text-h5"
                >Are you sure want to delete this item????</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete"
                  >Cancel</v-btn
                >
                <v-btn color="blue darken-1" text @click="deleteUserConfirm"
                  >OK</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-card>
      </v-col>
    </v-main>
  </div>
</template>

<script>
import userService from "@/service/user.service";

export default {
  name: "UserListView",

  data() {
    return {
      headers: [
        { text: "firstName", value: "firstName" },
        { text: "lastName", value: "lastName" },
        { text: "email", value: "email" },
        { text: "role", value: "role" },
        { text: "dateOfBirth", value: "dateOfBirth" },
        { text: "phone", value: "phone" },
        { text: "actions", value: "actions" }
      ],
      search: "",
      users: [],
      dialog: false,
      dialogDelete: false,
      editedIndex: -1,
      editedUser: {
        firstName: "",
        lastName: "",
        email: "",
        role: "",
        dateOfBirth: "",
        phone: ""
      },
      defaultUser: {
        firstName: "",
        lastName: "",
        email: "",
        role: "",
        dateOfBirth: "",
        phone: ""
      }
    };
  },

  async mounted() {
    this.users = await userService.queryListUser();
  },
  methods: {
    editUser(id) {
      this.$router.push({ name: "user-detail", params: { id } });
    },

    deleteUser(item) {
      this.editedIndex = this.users.indexOf(item);
      this.editedUser = Object.assign({}, item);
      this.dialogDelete = true;
    },
    deleteUserConfirm() {
      this.users.splice(this.users, 1);
      this.dialogDelete = false;
    },
    closeDelete() {
      this.dialogDelete = false;
    }
  }
};
</script>

<style lang="scss" scoped></style>
