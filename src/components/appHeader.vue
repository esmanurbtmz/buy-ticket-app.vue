<script>
</script>

<template>
  <nav class="navbar bg-body-tertiary">
    <div class="container-fluid d-flex justify-content-around">
      <a class="navbar-brand" href="#"><h2><b>BiletAl.com</b></h2></a>
      <div class="menu">
        <router-link :to="{name:'LoginPage'}">Üye Girişi |</router-link>
        <a class="pe-2" href=""> Seyahatlerim |</a>
        <a class="pe-2" href="">Yardım</a>
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">BiletAl.com</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
              <a class="nav-link" href="#">
                <i class="fa fa-user-circle" aria-hidden="true"></i>
                <b> Giriş Yap</b>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <i class="fa fa-car" aria-hidden="true"></i>
                <b> Seyahatlerim</b>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <i class="fa fa-question" aria-hidden="true"></i>
                <b> Yardım</b>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<style>
.navbar{
    background-color: #d23b38;
}
.navbar-toggler{
    background-color: white;
}
@media screen and (min-width: 480px) {
  .navbar-toggler {
    display: none;
  }
}
.menu a{
    text-decoration: none;
    color: white;
}
@media screen and (max-width: 480px) {
  .menu {
    display: none;
  }
}
.navbar-brand{
    color: white;
}
.nav-link{
  color: black;
}
</style>