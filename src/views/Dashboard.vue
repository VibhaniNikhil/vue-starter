<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col md="12">Welcome to User</b-col>
    </b-row>
  </div>
</template>

<script>
import Datatable from "./Test/test";

export default {
  name: "dashboard",
  components: {
    Datatable
  },
  data: function() {
    return {
      selected: "Month"
    };
  }
};
</script>
