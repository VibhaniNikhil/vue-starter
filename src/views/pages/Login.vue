<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="6">
          <b-card-group>
            <b-card no-body class="p-4">
              <b-card-body>
                <b-form @submit="onClickToSubmit">
                  <h1>Login</h1>
                  <p class="text-muted">Sign In to your account</p>
                  <b-input-group class="mb-3">
                    <b-input-group-prepend>
                      <b-input-group-text>
                        <i class="icon-user"></i>
                      </b-input-group-text>
                    </b-input-group-prepend>
                    <b-form-input
                      type="email"
                      class="form-control"
                      placeholder="Email Address"
                      v-model="user.email"
                      v-validate="'required|email'"
                      id="email"
                      name="email"
                      :class="{ 'is-invalid': submitted && errors.has('email') }"
                    />
                    <div
                      v-if="submitted && errors.has('email')"
                      class="invalid-feedback"
                    >{{ errors.first('email') }}</div>
                  </b-input-group>
                  <b-input-group class="mb-4">
                    <b-input-group-prepend>
                      <b-input-group-text>
                        <i class="icon-lock"></i>
                      </b-input-group-text>
                    </b-input-group-prepend>
                    <b-form-input
                      type="password"
                      class="form-control"
                      placeholder="Password"
                      v-validate="{required: true, min: 6}"
                      id="password"
                      name="password"
                      v-model="user.password"
                      :class="{ 'is-invalid': submitted && errors.has('password') }"
                    />
                    <div
                      v-if="submitted && errors.has('password')"
                      class="invalid-feedback"
                    >{{ errors.first('password') }}</div>
                  </b-input-group>
                  <b-row>
                    <b-col cols="6">
                      <b-button variant="primary" @click="onClickToSubmit" class="px-4">Login</b-button>
                    </b-col>
                    <b-col cols="6" class="text-right">
                      <b-button variant="link" class="px-0">Forgot password?</b-button>
                    </b-col>
                  </b-row>
                </b-form>
              </b-card-body>
            </b-card>
          </b-card-group>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      user: {
        email: "",
        password: ""
      },
      submitted: false
    };
  },
  computed: {
    ...mapState(["auth"])
  },
  methods: {
    ...mapActions({
      login: "login",
      addUser: "addUser"
    }),
    onClickToSubmit() {
      this.submitted = true;
      this.$validator.validate().then(valid => {
        if (valid) {
          this.login(this.user);          
          this.$router.push("/dashboard");
        }
      });
    }
  },
  created() {
    if (this.$store.getters.isAuth) {
      this.$router.push("/dashboard");
    }
  },
  mounted() {
    
  }
};
</script>
 