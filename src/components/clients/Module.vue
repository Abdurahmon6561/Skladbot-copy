<template>
    <div class="flex justify-center items-center p-6 mt-[150px]">
      <div>
        <h1
          class="font-semibold text-[30px] sm:text-[35px] md:text-[40px] lg:text-[40px] text-center"
        >
          Клиентский модуль SkladBot <br />
          сокращает операционку при работе с клиентами
        </h1>
        <div class="lg:flex lg:justify-between mt-[60px] gap-11">
          <!-- First card -->
          <div
            :class="isVisibleFirst ? 'animate-slide-in-left' : ''"
            ref="firstCard"
            class="lg:w-[390px] bg-[#E7EEFF] p-6 rounded-2xl transform -rotate-[6.06deg] opacity-0"
          >
            <h3 class="text-[#3F4685] text-[32px] font-semibold">
              Оцифрованный склад вместо 50 листов в Excel
            </h3>
            <p class="mt-2">
              Продукты клиента загружаются из маркетплейсов по API. Сотрудникам
              склада не нужно вести огромные таблицы и тратить время на поиск
              нужно листа. 
            </p>
          </div>
  
          <!-- Second card -->
          <div
            :class="isVisibleSecond ? 'animate-slide-in-right' : ''"
            ref="secondCard"
            class="lg:w-[390px] bg-[#3C57FF] p-6 rounded-2xl mt-[40px] lg:mt-5 opacity-0"
          >
            <h3 class="text-[32px] font-semibold text-white">
              Все заявки в одном окне вместо ТЗ по чатам
            </h3>
            <p class="mt-2 text-white">
              Менеджеру не придётся собирать ТЗ клиентов по чатам. Клиент сам
              подаст заявку через стандартизированную форму в личном кабинете.
            </p>
          </div>
  
          <!-- Third card -->
          <div
            :class="isVisibleThird ? 'animate-slide-in-right-rotate' : ''"
            ref="thirdCard"
            class="lg:w-[390px] bg-white p-6 rounded-2xl transform rotate-[6.06deg] mt-[40px] lg:mt-0 opacity-0"
          >
            <h3 class="text-[32px] font-semibold text-[#3F4685]">
              Меньше общения и отчётов
            </h3>
            <p class="mt-2">
              SkladBot автоматически уведомит клиента об этапах работы. Менеджеру
              не придётся писать отчёты и отвечать на вопрос «Что с моим
              товаром?».
            </p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from "vue";
  
  const isVisibleFirst = ref(false);
  const isVisibleSecond = ref(false);
  const isVisibleThird = ref(false);
  
  const firstCard = ref(null);
  const secondCard = ref(null);
  const thirdCard = ref(null);
  
  const createObserver = (elementRef, isVisibleRef, threshold = 0.3) => {
    const handleScroll = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisibleRef.value = true;
        }
      });
    };
  
    const observer = new IntersectionObserver(handleScroll, { threshold });
  
    onMounted(() => {
      if (elementRef.value) {
        observer.observe(elementRef.value);
      }
    });
  
    onUnmounted(() => {
      if (elementRef.value) {
        observer.unobserve(elementRef.value);
      }
    });
  };
  
  // Create observers for each card
  createObserver(firstCard, isVisibleFirst);
  createObserver(secondCard, isVisibleSecond);
  createObserver(thirdCard, isVisibleThird);
  </script>
  
  <style scoped>
  @keyframes slide-in-left {
    0% {
      opacity: 0;
      transform: translateX(-100%) rotate(-6.06deg);
    }
    100% {
      opacity: 1;
      transform: translateX(0) rotate(-6.06deg);
    }
  }
  
  @keyframes slide-in-right {
    0% {
      opacity: 0;
      transform: translateX(100%);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes slide-in-right-rotate {
    0% {
      opacity: 0;
      transform: translateX(100%) rotate(6.06deg);
    }
    100% {
      opacity: 1;
      transform: translateX(0) rotate(6.06deg);
    }
  }
  
  .animate-slide-in-left {
    animation: slide-in-left 1s ease-out forwards;
  }
  
  .animate-slide-in-right {
    animation: slide-in-right 1s ease-out forwards;
  }
  
  .animate-slide-in-right-rotate {
    animation: slide-in-right-rotate 1s ease-out forwards;
  }
  </style>
  