<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from '@/components/NavbarComponent.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
  <section  >
   <div style="background: #FBFBFB;" class="container mx-auto min-h-screen flex flex-col">
     <Navbar class="px-12"/>
     <main class="flex-grow px-12">
       <section class="">
         <RouterView />

       </section>
     </main>
     <Footer />
   </div>
  </section>
</template>

<style>
  .style__search-icon {
    border: 1px solid #0EAFC0;
    border-radius: 9px;
    padding: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  .nav__main-class, container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .unique-span {
    margin: 0 40px;
  }

  .button_style {
    display: flex;
    padding: 8px;
    margin: 4px;
    background-color: #0EAFC0;
    border-radius: 5px;
    width: 98px;
    height: 40px;
    color: white;
    justify-content: center;
    font-family: Poppins;
    font-bold: bold;
  }
</style>
