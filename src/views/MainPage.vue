<script setup>
import appHeader from "../components/appHeader.vue";
import cityComponent from "./cityComponent.vue"
</script>

<template>
    <div>
        <app-header></app-header>
        <div class="main container-fluid mt-5">
            <div class="row d-flex justify-content-end">
                <div class="col-lg-5">deneme</div>
            <div class="col-lg-5"></div>
            </div>
        </div>
    </div>
</template>

<style>
.main{
    overflow: hidden !important;
    height: 70vh;
    background-image: url("../../medias/images/spring-background-2020.png");
    background-repeat: no-repeat;
}
</style>