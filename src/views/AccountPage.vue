<script>
import appHeader from "../components/appHeader.vue";
import {mapGetters} from "vuex"
export default {
  components: { appHeader },
  computed: {
    ...mapGetters(["_isNotAuthenticated", "_isAuthenticated"]),
  },
  methods:{
    onLogout(){
        this.$store.commit("logoutUser")
        this.$router.push({name:"LoginPage"})
    }
  }
};
</script>
<template>
  <div>
    <appHeader></appHeader>
    <div class="d-flex justify-content-around align-items-center">
      <div class="side-menu col-lg-2 col-2 mt-5">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <router-link :to="{name:'Ticket'}">Seyahatlerim</router-link>
          </li>
          <li class="list-group-item">Alarmlarım</li>
          <li class="list-group-item">Kullanıcı Bilgilerim</li>
          <li class="list-group-item">Ödeme Bilgilerim</li>
          <li class="list-group-item">Kayıtlı Yolcularım</li>
          <li class="list-group-item">
            <a @click="onLogout">Çıkış Yap</a>
          </li>
        </ul>
      </div>
      <div class="account-info col-lg-6 col-6">deneme</div>
    </div>
  </div>
</template>
<style>
.side-menu{
    border: solid 1px rgb(158, 158, 158);
}
.side-menu ul li{
    padding-bottom: 15px;
    margin-bottom: 20px;
}
.side-menu ul li a{
    text-decoration: none;
    color: black;
    cursor: pointer;
}
.account-info {
  background-color: blue;
}
</style>
