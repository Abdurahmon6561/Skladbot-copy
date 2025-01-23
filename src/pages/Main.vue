<template>
  <div class="flex flex-col">
    <div class="container items-center justify-center p-2 mx-auto w-full">
      <Navbar />
      <main>
        <div class="flex justify-center items-center mt-[66px] text-center px-4 lg:px-0">
          <div>
            <!-- Trophy Section -->
            <div class="gap-3 text-[16px] text-center justify-center items-center hidden sm:flex">
              <img src="/images/noto_trophy.svg" alt="trofey" class="w-6 h-6" />
              <p class="font-normal">Лучшие стартапы России. Продукт недели #2</p>
            </div>

            <!-- Header Section -->
            <div class="w-full lg:w-[771px] text-center mt-[40px]">
              <h1 class="font-semibold text-[30px] lg:text-[50px]">
                Недорогая онлайн-система для управления фулфилментом
              </h1>
              <p class="font-normal text-[16px] lg:text-[21px] mt-[20px] lg:mt-[30px]">
                Простой интерфейс, интегрируется с маркетплейсами по API, закрывает
                все потребности фулфилмента. Возможности — управление персоналом,
                складом, счетами и клиентами. Запросите презентацию, чтобы посмотреть,
                как всё работает.
              </p>
            </div>

            <!-- Button Section -->
            <div class="flex flex-col lg:flex-row gap-4 mt-10 lg:mt-14 justify-center">
              <button
                class="bg-[#3C57FF] rounded-md text-white font-semibold p-3 h-[56px] w-full lg:w-auto lg:px-8"
                @click="scrollToPresentation"
              >
                Получить видео-презентацию
              </button>
              <button
                class="border-[#cad9fc] border bg-white shadow-sm rounded-md text-[#3C57FF] font-semibold p-3 h-[56px] w-full lg:w-auto lg:px-8"
              >
                Готовы оплатить
              </button>
            </div>
          </div>
        </div>
        <Video />
        <Cards />
        <div ref="presentationRef">
          <Presentation />
        </div>
        <Task />
        <Possibilities />
        <Results />
        <Support />
        <Reviews />
        <Article />
      </main>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Navbar from "../components/navbar/Navbar.vue";
import Video from "../components/main/Video.vue";
import Cards from "../components/main/Cards.vue";
import Presentation from "../components/main/Presentation.vue";
import Task from "../components/main/Task.vue";
import Possibilities from "../components/main/Possibilities.vue";
import Results from "../components/main/Results.vue";
import Support from "../components/main/Support.vue";
import Reviews from "../components/main/Reviews.vue";
import Article from "../components/main/Article.vue";
import Footer from "../components/footer/Footer.vue";

const presentationRef = ref(null);

const scrollToPresentation = () => {
  if (presentationRef.value) {
    presentationRef.value.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<style>
@import "tailwindcss/tailwind.css";
</style>
