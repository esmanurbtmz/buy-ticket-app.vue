<script></script>
<template>
  <div>
    <div class="c-container d-block justify-content-center pt-2 pb-2">
      <div class="d-flex">
        <label for="city" class="ps-2 d-flex align-items-center">
          <b>Kalkış:</b>
        </label>
        <select
          class="form-select"
          name="city"
          aria-label="Default select example"
        >
          <option>Kayseri</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div class="d-flex">
        <label for="city" class="ps-2 d-flex align-items-center">
          <b>Varış:</b>
        </label>
        <select
          class="form-select"
          name="city"
          aria-label="Default select example"
        >
          <option >Kayseri</option>
          <option selected value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div>
        <input type="date" class="form-control city-form">
      </div>
    </div>
  </div>
</template>

<style>
.c-container {
  background-color: white;
  border-radius: 10px;
}
.form-select {
  border: none;
  padding: 30px;
}
.city-form{
    border: none !important;
    padding: 30px !important;
}
</style>
