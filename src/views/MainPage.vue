<script setup>
import appHeader from "../components/appHeader.vue";
import cityComponent from "./cityComponent.vue";
</script>

<template>
  <div>
    <app-header></app-header>
    <div class="main container-fluid mt-5">
      <div class="row flex-wrap d-flex justify-content-center align-items-center">
        <div class="col-lg-4">
          <city-component></city-component>
        </div>
        <div class=" col-lg-6 b-container">
          <h3 class="text-center pt-4">Türkiye'nin En Büyük Otobüs Bileti Sitesi</h3>
          <div class="row  justify-content-around">
            <div class="box col-lg-3 me-1">
              <i class="fa fa-headphones" aria-hidden="true"></i>
              <div>7/24 Müşteri Hizmeti</div>
            </div>
            <div class="box col-lg-3">
              <i class="fa fa-credit-card" aria-hidden="true"></i>
              <div>Güvenli Ödeme</div>
            </div>
            <div class="box col-lg-3 ">
              <i class="fa fa-database" aria-hidden="true"></i>
              <div>Komisyon Yok, Ücretsiz</div>
            </div>
            <div class="box col-lg-3">
              <i class="fa fa-users" aria-hidden="true"></i>
              <div>Ayda 25 Milyondan Fazla Ziyaretçi</div>
            </div>
            <div class="box col-lg-3">
              <i class="fa fa-bell" aria-hidden="true"></i>
              <div>İki Dakikada <br> Biletini Al</div>
            </div>
            <div class="box col-lg-3">
              <i class="fa fa-undo" aria-hidden="true"></i>
              <div>İptal Edilen Bilete <br> Kesintisiz İade</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h3 class="text-center">Otobüs Bileti Kampanyaları</h3>
    <div class="d-flex justify-content-evenly">
      <div class="col-lg-3 col-6 t-company text-center">
        <img src="../../medias/images/146-md.png" alt="">
        <h4 class=" pt-3">CardFinans'tan ParaPuan ve Taksit Kampanyası</h4>
        <a href="">CardFinans bireysel kredi kartlarınızla yapacağınız 500 TL ve üzeri alışverişinize 5...</a>
      </div>
      <div class="col-lg-3 col-6 t-company">
        <img src="../../medias/images/148-md.png" alt="">
        <h4 class=" pt-3">HSBC Puan ve Taksit Kampanyası</h4>
        <a href="">HSBC bireysel kredi kartlarınızla yapacağınız 500 TL ve üzeri alışverişinize 50 TL, ...</a>
      </div>
    </div>
  </div>
</template>

<style>
.main { 
  height: 70vh;
  background-image: url("../../medias/images/spring-background-2020.png");
  background-repeat: no-repeat;
}
.main h3 {
  color: white;
}
.box {
  margin-top: 20px;
  padding:30px 0px 30px 0px ;
  color: white;
  background-color: black;
  opacity: 0.8;
  display: block;
  text-align: center;
  border-radius: 10px;
}
.box i{
  padding-bottom: 5px;
  font-size: 60px;
  color: white;
}
@media screen and (max-width: 1438px) {
  .b-container {
    display: none;
  }
  .main{
    background-image: none;
  }
}
h3{
  color: rgb(91, 91, 91);
}
.t-company img{
  width: 100%;
  border-radius: 10px;
}
h4{
  color: rgb(91, 91, 91);
}
.t-company{
  box-shadow: 2px 2px 2px rgb(174, 174, 174) ;
}
.t-company a{
  text-decoration: none;
  color: rgb(87, 87, 87);
  font-size: 18px;
  padding-bottom: 10px;
  
}
</style>
