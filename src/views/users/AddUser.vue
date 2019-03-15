<template>
  <div>
    <b-card>
      <b-row>
        <b-col sm="12">
          <b-card>
            <div slot="header">
              <strong>{{this.$route.params.id?'Update':'Add'}} {{this.$route.path.split('/')[2] == "listener"?"Listener":"Expert"}}</strong>
            </div>
            <b-form>
              <b-form-group>
                <label for="company">First Name</label>
                <b-form-input
                  class="form-control"
                  v-model="user.firstName"
                  v-validate="'required'"
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Enter your first name"
                  :class="{ 'is-invalid': submitted && errors.has('firstName') }"
                ></b-form-input>
                <div
                  v-if="submitted && errors.has('firstName')"
                  class="invalid-feedback"
                >{{errors.first('firstName')}}</div>
              </b-form-group>
              <b-form-group>
                <label for="company">Last Name</label>
                <b-form-input
                  type="text"
                  id="lastName"
                  name="lastName"
                  v-model="user.lastName"
                  v-validate="'required'"
                  placeholder="Enter your last name"
                  :class="{ 'is-invalid': submitted && errors.has('lastName') }"
                ></b-form-input>
                <div
                  v-if="submitted && errors.has('lastName')"
                  class="invalid-feedback"
                >{{ errors.first('lastName') }}</div>
              </b-form-group>
              <b-form-group>
                <label for="company">Email</label>
                <b-form-input
                  type="email"
                  id="email"
                  name="email"
                  v-validate="'required|email'"
                  v-model="user.email"
                  placeholder="Enter your email address"
                  :class="{ 'is-invalid': submitted && errors.has('email') }"
                ></b-form-input>
                <div
                  v-if="submitted && errors.has('email')"
                  class="invalid-feedback"
                >{{ errors.first('email') }}</div>
              </b-form-group>
              <div slot="footer">
                <b-button size="sm" variant="primary" @click="onClickToSubmit">
                  <i class="fa fa-dot-circle-o"></i> Submit
                </b-button>
                <b-button type="reset" size="sm" variant="danger" @click="onClickToReset">
                  <i class="fa fa-ban"></i> Reset
                </b-button>
              </div>
            </b-form>
          </b-card>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "AddUser",
  data() {
    return {
      user: {
        firstName: "",
        lastName: "",
        email: ""
      },
      submitted: false
    };
  },
  methods: {
    onClickToSubmit() {
      this.submitted = true;
      this.$validator.validate().then(valid => {
        if (valid) {
          this.submitted = false;
        }
      });
    },
    onClickToReset() {
      this.user = { firstName: "", lastName: "", email: "" };
      this.submitted = false;
    }
  },
  created() {
    // console.log(this.$route.params.id)
  }
};
</script>