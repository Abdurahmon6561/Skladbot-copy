<template>
  <div class="flex flex-col">
    <div class="container items-center justify-center p-2 mx-auto w-full">
      <Navbar />
      <main>
        <div
    class="flex justify-center items-center mt-[66px] text-center px-4 lg:px-0"
  >
    <div>
      <div
        class="gap-3 text-[16px] text-center justify-center items-center hidden sm:flex"
      >
        <img src="/images/noto_trophy.svg" alt="trofey" class="w-6 h-6" />
        <p class="font-normal">Лучшие стартапы России. Продукт недели #2</p>
      </div>

      <div class="w-full lg:w-[771px] text-center mt-[40px]">
        <h1 class="font-semibold text-[30px] lg:text-[50px]">
          Календарь для склада
        </h1>
        <p
          class="font-normal text-[16px] lg:text-[21px] mt-[20px] lg:mt-[30px]"
        >
          SkladBot поможет оцифровать все дела на складе. С календарем вы
          сможете контролировать сроки, этапы и ответственных за задачу.
        </p>
      </div>

      <div
        class="flex flex-col lg:flex-row gap-4 mt-10 lg:mt-14 justify-center"
      >
        <button
        @click="scrollToPresentation"
          class="bg-[#3C57FF] rounded-md text-white font-semibold p-3 h-[56px] w-full lg:w-auto lg:px-8 transition duration-700 ease-in-out hover:scale-105"
        >
          Получить видео-презентацию
        </button>
        <button
          class="border-[#cad9fc] border bg-white shadow-sm rounded-md text-[#3C57FF] font-semibold p-3 h-[56px] w-full lg:w-auto lg:px-8 transition duration-700 ease-in-out hover:scale-105"
        >
          Готовы оплатить
        </button>
      </div>
    </div>
        </div>
        <Video />
        <Possibilities />
        <div ref="presentationRef">
          <Presentation />
        </div>
        <Cards />
        <Support />
        <Results />
        <Article />
      </main>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from "../components/navbar/Navbar.vue";
import Video from "../components/main/Video.vue";
import Cards from "../components/main/Cards.vue";
import Presentation from "../components/main/Presentation.vue";
import Possibilities from "../components/calendar/Possibilities.vue";
import Results from "../components/main/Results.vue";
import Support from "../components/main/Support.vue";
import Article from "../components/main/Article.vue";
import Footer from "../components/footer/Footer.vue";
import { ref } from "vue";

const presentationRef = ref(null);

const scrollToPresentation = () => {
  if (presentationRef.value) {
    presentationRef.value.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<style>
@import "tailwindcss/tailwind.css";
</style>
