<template>
    <div class="flex justify-center text-center mt-[200px]">
      <div>
        <div>
          <h1 class="text-[40px] font-semibold mb-[20px]">
            Какие задачи решает SkladBot
          </h1>
          <p class="font-normal text-[21px]">
            Уникальный функционал для владельцев фулфилментов, <br /> который
            сэкономит время и убережёт от штрафов.
          </p>
        </div>
        <div class="mt-[80px] flex">
          <!-- First Card -->
          <div
            ref="card1"
            :class="{'opacity-100 translate-x-0': inView[0], 'opacity-0 translate-x-10': !inView[0]}"
            class="w-[435px] h-[280px] rounded-2xl transform -rotate-[6.06deg] bg-[#E7EEFF] p-6 transition-all duration-1000 ease-in-out"
          >
            <h2 class="font-semibold text-[25px] text-[#3F4685] text-start">
              Оцифрованный склад вместо 50 листов в Excel
            </h2>
            <p class="font-normal text-[17px] text-start mt-3">
              Ячеечное хранение и оцифровка продуктов помогают не терять товар
              на складе и тратить меньше времени на ведение таблиц.
            </p>
          </div>
  
          <!-- Second Card -->
          <div
            ref="card2"
            :class="{'opacity-100 translate-x-0': inView[1], 'opacity-0 translate-x-10': !inView[1]}"
            class="z-10 w-[548px] h-[231px] rounded-2xl bg-[#3C57FF] p-6 mt-[160px] ml-[-80px] transition-all duration-1000 ease-in-out"
          >
            <h2 class="font-semibold text-[25px] text-white text-start">
              Автоматический учёт КИЗов
            </h2>
            <p class="font-normal text-[17px] text-start mt-3 text-white">
              За каждый неправильный или дублированный КИЗ — штраф от 1500 ₽.
              SkladBot ведёт автоматический учёт отсканированных КИЗов и не даёт
              распечатать их повторно. Повторная распечатка доступна только
              сотрудникам с доступом к печати.
            </p>
          </div>
  
          <!-- Third Card -->
          <div
            ref="card3"
            :class="{'opacity-100 translate-x-0': inView[2], 'opacity-0 translate-x-10': !inView[2]}"
            class="z-10 w-[500px] h-[231px] rounded-2xl bg-white p-6 ml-[-80px] transition-all duration-1000 ease-in-out"
          >
            <h2 class="font-semibold text-[25px] text-[#3F4685] text-start">
              Автоматическое выставление счетов и отчётов
            </h2>
            <p class="font-normal text-[17px] text-start mt-3 text-[#3F4685]">
              SkladBot автоматически формирует КП, счёт на оплату и детальный
              отчёт по работе. Менеджеру не нужно тратить время на выставление
              счетов и отвечать на вопрос: «Что с моим товаром?».
            </p>
          </div>
  
          <!-- Fourth Card -->
          <div
            ref="card4"
            :class="{'opacity-100 translate-x-0': inView[3], 'opacity-0 translate-x-10': !inView[3]}"
            class="w-[493px] h-[280px] rounded-2xl transform -rotate-[6.06deg] bg-[#E7EEFF] p-6 mt-[80px] ml-[-80px] transition-all duration-1000 ease-in-out"
          >
            <h2 class="font-semibold text-[25px] text-[#3F4685] text-start">
              Оцифрованные заявки вместо сбора ТЗ по чатам
            </h2>
            <p class="font-normal text-[17px] text-start mt-3">
              SkladBot автоматизирует подачу заявок. Менеджеру не нужно
              собирать ТЗ от селлеров по чатам — клиенты самостоятельно подают
              заявки через стандартизированную форму в личном кабинете.
            </p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const inView = ref([false, false, false, false]);
  
  const card1 = ref(null);
  const card2 = ref(null);
  const card3 = ref(null);
  const card4 = ref(null);
  
  onMounted(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            inView.value[index] = true;
          } else {
            inView.value[index] = false;
          }
        });
      },
      { threshold: 0.5 }
    );
  
    // Observe each card
    observer.observe(card1.value);
    observer.observe(card2.value);
    observer.observe(card3.value);
    observer.observe(card4.value);
  });
  </script>
  
  <style scoped>
  /* Add custom animations */
  .opacity-0 {
    opacity: 0;
  }
  .opacity-100 {
    opacity: 1;
  }
  .translate-x-0 {
    transform: translateX(0);
  }
  .translate-x-10 {
    transform: translateX(10px);
  }
  </style>
  