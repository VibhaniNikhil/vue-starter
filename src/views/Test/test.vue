<template>
  <div class="animated fadeIn">
    <b-card>
      <b-row>
        <b-col lg="12">
          <div id="peoples">
            <!-- <v-server-table url="/people" :columns="columns" :options="options"></v-server-table> -->
          </div>
        </b-col>
      </b-row>
      <!--/.row-->
      <b-row>
        <b-col lg="6">
          <!-- <c-table :table-data="items" small caption="<i class='fa fa-align-justify'></i> Condensed Table"></c-table> -->
        </b-col>

        <b-col lg="6">
          <!-- <c-table :table-data="items" fixed bordered caption="<i class='fa fa-align-justify'></i> Bordered Table"></c-table> -->
        </b-col>
      </b-row>

      <b-row>
        <b-col sm="12">
          <!-- <c-table :table-data="itemsArray" :per-page=10 hover striped bordered small fixed caption="<i class='fa fa-align-justify'></i> Combined All Table"></c-table> -->
        </b-col>
      </b-row>
      <b-row>
        <b-col sm="12">
          <!-- <c-table dark :table-data="itemsArray" :per-page=10 hover striped bordered small fixed caption="<i class='fa fa-align-justify'></i> Dark Table"></c-table> -->
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
import Vue from "vue";
import { ServerTable } from "vue-tables-2";
import NProgress from "nprogress";
import axios from "axios";

Vue.use(ServerTable);

export default {
  name: "Datatable",
  data() {
    return {
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
              for (let i = 0; i <= 10; i++) {
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
        templates: {
          action: function(h, row, index) {
            return (
              <span>
                <a href="" class="fa fa-edit" />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="" class="fa fa-remove" />
              </span>
            );
          }
        }
      }
    };
  }
};
</script>

