<script>
import appHeader from "../components/appHeader.vue";
import SideMenu from "../components/sideMenu.vue";
import CryptoJS from "crypto-js";

export default {
  components: { appHeader, SideMenu },
  data(){
    return{
      userInfo:{
        name : null,
        surname: null,
        identity: null,
        mail:null
      }
    }
  },
  methods:{
    onSave(){
      this.$appAxios.post("/userInfo",{...this.userInfo}).then(data_res=>{
        console.log(data_res)
      })
    }
  }
};
</script>
<template>
  <div>
    <appHeader></appHeader>
    <div class="d-flex justify-content-center  align-items-center">
      <side-menu class="me-2 "></side-menu>
      <div class="account-info col-lg-3 ">
        <h5 class="ms-5">Hesap Bilgilerim</h5>
        <form action="">
          <div class="mb-3 ms-5">
            <label class="form-label"
              >Ad</label
            >
            <input
              type="text"
              class="form-control a-form"
              v-model="userInfo.name"
              
            />
          </div>
          <div class="mb-3 ms-5">
            <label class="form-label"
              >Soyad</label
            >
            <input
              type="text"
              class="form-control a-form"
              v-model="userInfo.surname"
              
            />
          </div>
          <div class="mb-3 ms-5">
            <label class="form-label"
              >T.C. Kimlik No</label
            >
            <input
              type="text"
              class="form-control a-form"
              v-model="userInfo.identity"
              
            />
          </div>
          <div class="mb-3 ms-5">
            <label class="form-label"
              >E-Mail</label
            >
            <input
              type="email"
              class="form-control a-form"
              v-model="userInfo.mail"
              
            />
          </div>
          <button @click="onSave" class="btn btn-danger ms-5"><b>Bilgilerimi Güncelle</b></button>
        </form>
      </div>
    </div>
  </div>
</template>
<style>
.a-form {
  border: 1px solid rgb(158, 158, 158) !important; 
}

</style>
