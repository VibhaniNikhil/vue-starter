<template>
  <AppHeaderDropdown right no-caret>
    <template slot="header">
      <img src="img/avatars/6.jpg" class="img-avatar" alt="admin@bootstrapmaster.com">
    </template>\
    <template slot="dropdown">
      <!-- <b-dropdown-header
        tag="div"
        class="text-center">
        <strong>Settings</strong>
      </b-dropdown-header>-->
      <b-dropdown-item>
        <i class="fa fa-user"/> Profile
      </b-dropdown-item>
      <b-dropdown-item @click="onClickToLogout">
        <i class="fa fa-lock"/> Logout
      </b-dropdown-item>
    </template>
  </AppHeaderDropdown>
</template>

<script>
import { HeaderDropdown as AppHeaderDropdown } from "@coreui/vue";
import { mapActions } from "vuex";

export default {
  name: "DefaultHeaderDropdownAccnt",
  components: {
    AppHeaderDropdown
  },
  data: () => {
    return { itemsCount: 42 };
  },
  methods: {
    ...mapActions({
      logout: "logout"
    }),
    onClickToLogout() {
      this.logout();
      this.$router.push("/login");
    }
  }
};
</script>