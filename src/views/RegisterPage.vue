<script>
import CryptoJS from "crypto-js";
export default {
  data() {
    return {
      userData: {
        email: null,
        password: null,
      },
      isActive: true
    };
  },
  methods: {
    onSave() {
      if (this.userData.email != null && this.userData.password != null) {
        const password = CryptoJS.HmacSHA1(
          this.userData.password,
          this.$store.getters._saltKey
        ).toString();
        this.$appAxios
          .post("/users", { ...this.userData, password })
          .then((registered_user_response) => {
            console.log("registered_user_response", registered_user_response);
            this.$router.push({ name: "LoginPage" });
          });
      } else {
        console.log("boş veri");
      }
    },
  }
};
</script>
<template>
  <div class="d-flex justify-content-center align-items-center f-container">
    <div class="col-lg-3 f-box">
      <router-link class="close-btn" :to="{ name: 'MainPage' }"
        ><i
          class="fa fa-times d-flex justify-content-end"
          aria-hidden="true"
        ></i
      ></router-link>
      <h2 class="text-center">Üye Ol</h2>
      <button class="btn facebook-btn mt-3">
        <b>Facebook ile Giriş Yap</b>
      </button>
      <button class="btn google-btn mt-3"><b>Google ile Giriş Yap</b></button>
      <hr />
      <div class="form-floating mb-3">
        <input
        required
          v-model="userData.email"
          type="email"
          class="form-control"
          id="floatingInput"
          placeholder="name@example.com"
          
        />
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating mb-2">
        <input
          v-model="userData.password"
          type="password"
          class="form-control"
          id="floatingPassword"
          placeholder="Password"
          required
        />
        <label for="floatingPassword mb-">Password</label>
      </div>
      <button :disabled="isActive" @click="onSave" class="btn register-btn">
        <b>Üye Ol</b>
      </button>
    </div>
  </div>
</template>
<style scoped>
.f-container {
  height: 100vh;
}
.form-floating input {
  border-bottom: 1px solid rgb(158, 158, 158) !important ;
  border-radius: 0px;
}
.f-box {
  border-radius: 5px;
  box-shadow: 2px 2px 5px 5px rgb(213, 213, 213);
  padding: 50px;
}
.facebook-btn {
  width: 100%;
  background-color: #45619d;
  color: white;
}
.google-btn {
  width: 100%;
  background-color: #4285f4;
  color: white;
}
a {
  color: rgb(78, 78, 78);
  font-size: 13px;
  display: flex;
  justify-content: end;
}
p {
  font-size: 13px;
}
.register-btn {
  color: white;
  width: 100%;
  background-color: #d23b38;
}
.close-btn {
  text-decoration: none;
  font-size: 20px;
}
</style>
