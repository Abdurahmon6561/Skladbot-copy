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
                <p class="font-normal">
                  Лучшие стартапы России. Продукт недели #2
                </p>
              </div>
  
              <div class="w-full lg:w-[871px] text-center mt-[40px]">
                <h1 class="font-semibold text-[30px] lg:text-[50px]">
                    Презентация SkladBot    
                </h1>
                <p
                  class="font-normal text-[16px] lg:text-[21px] mt-[20px] lg:mt-[30px]"
                >
                  Спасибо за интерес к системе. В этом 40-минутном видео мы рассказываем всё о возможностях SkladBot.
                </p>
              </div>
  
              <div
                class="flex flex-col lg:flex-row gap-4 mt-10 lg:mt-14 justify-center"
              >
                <button
                  @click="scrollToPresentation"
                  class="bg-[#3C57FF] rounded-md text-white font-semibold p-3 h-[56px] w-full lg:w-auto lg:px-8 transition duration-700 ease-in-out hover:scale-105"
                >
                Посмотреть ответы на вопросы
                </button>
                <button
                  class="border-[#cad9fc] border bg-white shadow-sm rounded-md text-[#3C57FF] font-semibold p-3 h-[56px] w-full lg:w-auto lg:px-8 transition duration-700 ease-in-out hover:scale-105"
                >
                Оплатить Skladbot
                </button>
              </div>
            </div>
          </div>
          <Video />
          <div ref="presentationRef">
          </div>
          <Cards/>
          <div class=" hidden lg:block">
            <Bg-image/>
          </div>
          <Telegram/>
        </main>
      </div>
      <Footer />
    </div>
  </template>
  
  <script setup>
  import Navbar from "../components/navbar/Navbar.vue";
  import Video from "../components/presentation/Video.vue";
  import Cards from "../components/presentation/Support.vue";
  import BgImage from "../components/presentation/bg-image.vue";
  import Telegram from "../components/presentation/Telegram.vue";
  import Presentation from "../components/main/Presentation.vue";
  import Possibilities from "../components/business/Possibilities.vue";
  import Results from "../components/main/Results.vue";
  import Support from "../components/tarif/Support.vue";
  import Answers from "../components/business/Answers.vue";
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
  