<template>
    <div class="flex flex-col">
      <div class="container items-center justify-center p-2 mx-auto w-full">
        <Navbar />
        <main>
          <Hero />
          <Video />
          <Possibilities />
          <Presentation />
          <Cards />
          <Support />
          <Results />
          <Article/>
        </main>
      </div>
      <Footer />
    </div>
  </template>
  
  <script setup>
  import Navbar from "../components/navbar/Navbar.vue";
  import Hero from "../components/calendar/Hero.vue";
  import Video from "../components/main/Video.vue";
  import Cards from "../components/main/Cards.vue";
  import Presentation from "../components/main/Presentation.vue";
  import Possibilities from "../components/calendar/Possibilities.vue";
  import Results from "../components/main/Results.vue";
  import Support from "../components/main/Support.vue";
  import Article from "../components/main/Article.vue";
  import Footer from "../components/footer/Footer.vue";
  </script>
  
  <style>
  @import "tailwindcss/tailwind.css";
  </style>
  