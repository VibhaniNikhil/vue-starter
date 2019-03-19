<template>
  <div>
    <b-card>
      <b-row>
        <b-col lg="12">
          <!-- md-ripple -->
          <b-col lg="12">
            <b-button
              v-bind:style="{width: '8%', bottom: '8px', position: 'relative', right: '15px'}"
              block
              variant="primary"
              @click="onClickToAddUser"
            >Add {{this.$route.path == '/users/expert/list'?"Expert":"Listener"}}</b-button>
          </b-col>
          <v-server-table
            ref="table"
            class="userTable"
            url="/people"
            :columns="columns"
            :options="options"
          >
            <template slot="action" scope="props">
              <div>
                <md-button class="md-icon-button" @click="onClickToEdit(props.row.id)">
                  <a class="cui-pencil icons"/>
                </md-button>
                <md-button class="md-icon-button" @click="onClickToDelete(props.index)">
                  <a class="cui-trash icons"/>
                </md-button>
              </div>
            </template>
          </v-server-table>
        </b-col>
      </b-row>
    </b-card>
    <b-modal title="Delete" v-model="openModal" @ok="onClickToConfirmDelete">Are you sure to delete?</b-modal>
  </div>
</template>

<script>
import Vue from "vue";
import { ServerTable } from "vue-tables-2";
import NProgress from "nprogress";
import axios from "axios";
import { Promise } from "q";
import { resolve } from "url";

Vue.use(ServerTable);
Vue.use(NProgress);

export default {
  name: "Users",
  data() {
    return {
      openModal: false,
      deletedId: null,
      columns: ["id", "name", "age", "action"],
      options: {
        requestFunction: function(data) {
          NProgress.start();
          return axios
            .get("http://dummy.restapiexample.com/api/v1/employees", {
              params: data
            })
            .then(res => {
              NProgress.done();
              let rows = [];
              for (let i = 0; i < 10; i++) {
                rows.push({
                  id: res.data[i].id,
                  name: res.data[i].employee_name,
                  age: res.data[i].employee_age
                });
              }
              return {
                data: rows,
                count: 100
              };
            });
        },
        saveState: true,
        storage: localStorage
      }
    };
  },
  created() {},
  methods: {
    onClickToDelete(rowIndex) {
      this.openModal = true;
      this.deletedId = rowIndex;
    },
    onClickToConfirmDelete() {
      if (this.deletedId) {
        // this.$refs.table.data.splice(this.deletedId, 1);
        this.$refs.table.refresh();
      }
      this.deletedId = null;
    },
    onClickToEdit(id) {
      if (this.$route.path == "/users/expert/list") {
        this.$router.push(`/users/expert/edit-expert/${id}`);
      } else {
        this.$router.push(`/users/listener/edit-listener/${id}`);
      }
    },
    onClickToAddUser() {
      if (this.$route.path == "/users/expert/list") {
        this.$router.push("/users/expert/add");
      } else {
        this.$router.push("/users/listener/add");
      }
    }
  }
};
</script>

<style scoped>
.userTable >>> table.VueTables__table th:nth-child(4),
.userTable >>> table.VueTables__table td:nth-child(4) {
  width: 8% !important;
  text-align: center;
}

.userTable >>> table.VueTables__table th:nth-child(2) {
  width: 30% !important;
}

.userTable >>> table.VueTables__table th:nth-child(3) {
  width: 20% !important;
}

.userTable >>> table.VueTables__table th:nth-child(1) {
  width: 5% !important;
}
</style>