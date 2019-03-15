<template>
    <div class="app flex-row align-items-center">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="6">
          <b-card-group>
            <b-card no-body class="p-4">
              <b-card-body>
                <b-form @submit="onClickToSubmit">
                  <h1>Forgote Password</h1>
                  <p class="text-muted">Enter your email to reset your password</p>
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
                  <b-row>
                    <b-col cols="6">
                      <b-button variant="primary" class="px-4" @click="onClickToSubmit">Reset Password</b-button>
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
export default {
    name: "ForgotePassword",
    data() {
        return {
        user: {
            email: "",            
        },
        submitted: false
        };
    },
    computed: {
        
    },
    methods: {
        onClickToSubmit() {
            this.submitted = true;
            this.$validator.validate().then(valid => {
                if (valid) {
                    
                }
            });
        }
    },
}
</script>