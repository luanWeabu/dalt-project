<template>
  <div>
    <v-main>
      <v-col cols="12" lg="5" class="mx-auto">
        <v-card>
          <div class="back-link">
            <slot name="back-link">
              <router-link :to="{ name: 'user-list' }"
                >Back to user list</router-link
              >
            </slot>
          </div>
          <div class="text-center">
            <h2 class="blue-grey--text">{{ formTitle }}</h2>
          </div>
          <v-form>
            <v-container>
              <v-row class="align-center">
                <v-col cols="10" lg="6" class="mx-auto">
                  <v-text-field
                    outlined
                    type="text"
                    label="firstname"
                    :rules="rules.firstName"
                  ></v-text-field>
                  <v-text-field
                    outlined
                    type="text"
                    label="lastname"
                    :rules="rules.lastName"
                  ></v-text-field>
                  <v-select
                    clearable
                    outlined
                    label="Select"
                    :items="items"
                    :rules="rules.role"
                  ></v-select>
                  <v-text-field
                    type="datetime-local"
                    clearable
                    outlined
                    :rules="rules.dateOfBirth"
                  ></v-text-field>
                  <v-text-field
                    outlined
                    type="text"
                    label="phone number"
                    :rules="rules.phone"
                  ></v-text-field>
                  <v-text-field
                    outlined
                    type="email"
                    label="email"
                    :rules="rules.email"
                  ></v-text-field>
                  <v-btn>{{ submitButtonLabel }}</v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-card>
      </v-col>
    </v-main>
  </div>
</template>

<script>
import { REGEX } from "@/constant/pattern.constant";
export default {
  name: "UserForm",

  props: {
    userId: {
      type: String,
      default: null
    }
  },

  computed: {
    isEditForm() {
      return this.userId !== null;
    },
    formTitle() {
      return this.isEditForm ? "Edit user" : "Create user";
    },
    submitButtonLabel() {
      return this.isEditForm ? "Save" : "Create";
    }
  },

  data() {
    return {
      REGEX,
      items: ["superAdmin", "Admin", "User"],
      terms: false,
      rules: {
        firstName: [(value) => !!value || "First name is required"],
        dateOfBirth: [(value) => !!value || "Date of birth is required"],
        role: [(value) => !!value || "You are need selected role"],
        lastName: [(value) => !!value || "Last name is required"],
        phone: [(value) => !!value || "Phone is required"],
        email: [
          (value) => {
            const regex = REGEX.EMAIL;
            return regex.test(value) || "Invalid e-mail";
          }
        ]
      }
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped></style>
