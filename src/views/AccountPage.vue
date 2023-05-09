<script>
import appHeader from "../components/appHeader.vue";
import SideMenu from "../components/sideMenu.vue";
export default {
  components: { appHeader, SideMenu },
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
              
            />
          </div>
          <div class="mb-3 ms-5">
            <label class="form-label"
              >Soyad</label
            >
            <input
              type="text"
              class="form-control a-form"
              
            />
          </div>
          <div class="mb-3 ms-5">
            <label class="form-label"
              >T.C. Kimlik No</label
            >
            <input
              type="text"
              class="form-control a-form"
              
            />
          </div>
          <div class="mb-3 ms-5">
            <label class="form-label"
              >E-Mail</label
            >
            <input
              type="email"
              class="form-control a-form"
              
            />
          </div>
          <button class="btn btn-danger ms-5"><b>Bilgilerimi Güncelle</b></button>
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
