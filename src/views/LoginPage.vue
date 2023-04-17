<script></script>
<template>
  <div class="d-flex justify-content-center align-items-center f-container">
    
    <div class="col-lg-3 f-box">
        <router-link class="close-btn" :to="{name:'MainPage'}"><i class="fa fa-times d-flex justify-content-end" aria-hidden="true"></i></router-link>
        <h2 class="text-center">Üye Girişi</h2>
        <button class="btn facebook-btn mt-3"><b>Facebook ile Giriş Yap</b></button>
        <button class="btn google-btn mt-3">Google ile Giriş Yap</button>
        <hr>
      <div class="form-floating mb-3">
        <input
          type="email"
          class="form-control"
          id="floatingInput"
          placeholder="name@example.com"
        />
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating mb-2">
        <input
          type="password"
          class="form-control"
          id="floatingPassword"
          placeholder="Password"
        />
        <label for="floatingPassword mb-">Password</label>
      </div>
      <div>
        <a href=""><b>Şifrenizi mi Unuttunuz?</b></a>
      </div>
      <button class="login-btn btn mt-3"><b>Giriş Yap</b></button>
      <p class="text-center mt-2"><b>Henüz üye değil misiniz</b></p>
      <router-link class="route" :to="{name:'RegisterPage'}">
        <button class="btn register-btn"><b>Üye Ol</b></button>
      </router-link>
      
    </div>
  </div>
</template>
<style scoped>
.f-container{
    height: 100vh;
}
.form-floating  input{
    border-bottom: 1px solid rgb(158, 158, 158) !important ;
    border-radius: 0px;
}
.f-box{
    border-radius: 5px;
    box-shadow: 2px 2px 5px 5px rgb(213, 213, 213);
    padding: 50px;
}
.facebook-btn{
    width: 100%;
    background-color: #45619d;
    color: white;
}
.google-btn{
    width: 100%;
    background-color: #4285f4;
    color: white;
}
a{
    color: rgb(78, 78, 78);
    font-size: 13px;
    display: flex;
    justify-content: end;
}
.login-btn{
    background-color: #d23b38;
    width: 100%;
    color: white;
}
p{
    font-size: 13px;
}
.register-btn{
  
    color: #d23b38;
    width: 100%;
    border: 1px solid #d23b38 ;
}
.close-btn{
    text-decoration: none;
    font-size: 20px;
}
.route{
  text-decoration: none;
}
</style>