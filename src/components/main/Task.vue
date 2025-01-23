<template>
  <div class="flex justify-center text-center mt-[200px]" ref="container">
    <div>
      <div>
        <h1 class="lg:text-[40px] text-[32px] font-semibold mb-[20px]">
          Какие задачи решает SkladBot
        </h1>
        <p class="font-normal lg:text-[21px] text-[16px]">
          Уникальный функционал для владельцев фулфилментов, <br />
          который сэкономит время и убережёт от штрафов.
        </p>
      </div>
      <div class="mt-[80px] lg:flex p-[10px]">
        <!-- First div -->
        <div
          class="lg:w-[435px] lg:h-[280px] rounded-2xl transform -rotate-[6.06deg] bg-[#E7EEFF] p-6"
          :class="{ 'animate-slide-in-left': isVisible, 'opacity-0': !isVisible }"
        >
          <h2 class="font-semibold lg:text-[25px] text-[19px] text-[#3F4685] text-start">
            Оцифрованный склад вместо 50 листов в Excel
          </h2>
          <p class="font-normal lg:text-[17px] text-[15px] text-start mt-3">
            Ячеечное хранение и оцифровка продуктов помогают не терять товар на
            складе и тратить меньше времени на ведение таблиц.
          </p>
        </div>
        <!-- Second div (No rotation) -->
        <div
          :class="{ 'animate-slide-in-no-rotate': isVisible, 'opacity-0': !isVisible }"
          class="lg:z-10 lg:w-[548px] lg:h-[231px] rounded-2xl bg-[#3C57FF] p-6 lg:mt-[160px] mt-[70px] lg:ml-[-80px]"
        >
          <h2 class="font-semibold lg:text-[25px] text-[19px] text-white text-start">
            Автоматический учёт КИЗов
          </h2>
          <p class="font-normal lg:text-[17px] text-[15px]  text-start mt-3 text-white">
            За каждый неправильный или дублированный КИЗ — штраф от 1500 ₽.
            SkladBot ведёт автоматический учёт отсканированных КИЗов и не даёт
            распечатать их повторно. Повторная распечатка доступна только
            сотрудникам с доступом к печати.
          </p>
        </div>

        <!-- Third div (Slide from right) -->
        <div class="lg:z-10">
          <div
            :class="{ 'animate-slide-in-right': isVisible, 'opacity-0': !isVisible }"
            class="lg:z-10 lg:w-[500px] lg:h-[231px] rounded-2xl bg-white p-6 mt-[70px] lg:mt-0 lg:ml-[-80px] transform -rotate-[3.06deg] lg:rotate-0"
          >
            <h2 class="font-semibold lg:text-[25px] text-[19px] text-[#3F4685] text-start">
              Автоматическое выставление счетов и отчётов
            </h2>
            <p
              class="font-normal lg:text-[17px] text-[15px]  text-start mt-3 text-[#3F4685]"
            >
              SkladBot автоматически формирует КП, счёт на оплату и детальный
              отчёт по работе. Менеджеру не нужно тратить время на выставление
              счетов и отвечать на вопрос: «Что с моим товаром?».
            </p>
          </div>

          <!-- Fourth div -->
          <div
            :class="{ 'animate-slide-in-right-rotate': isVisible, 'opacity-0': !isVisible }"
            class="lg:w-[493px] lg:h-[280px] rounded-2xl transform lg:-rotate-[6.06deg] rotate-[4.06deg] mt-[50px] bg-[#E7EEFF] p-6 lg:mt-[80px] lg:ml-[-80px]"
          >
            <h2 class="font-semibold lg:text-[25px] text-[19px] text-[#3F4685] text-start">
              Оцифрованные заявки вместо сбора ТЗ по чатам
            </h2>
            <p class="font-normal lg:text-[17px] text-[15px] text-start mt-3">
              SkladBot автоматизирует подачу заявок. Менеджеру не нужно собирать
              ТЗ от селлеров по чатам — клиенты самостоятельно подают заявки
              через стандартизированную форму в личном кабинете.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isVisible = ref(false);
const container = ref(null);

const handleScroll = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      isVisible.value = true;
    }
  });
};

onMounted(() => {
  const observer = new IntersectionObserver(handleScroll, {
    threshold: 0.3, // Trigger when 30% of the element is visible
  });
  if (container.value) {
    observer.observe(container.value);
  }

  onUnmounted(() => {
    if (container.value) observer.unobserve(container.value);
  });
});
</script>

<style>
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

@keyframes slide-in-no-rotate {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
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
    transform: translateX(100%) rotate(-6.06deg);
  }
  100% {
    opacity: 1;
    transform: translateX(0) rotate(-6.06deg);
  }
}

.animate-slide-in-left {
  animation: slide-in-left 1s ease-out forwards;
}

.animate-slide-in-no-rotate {
  animation: slide-in-no-rotate 1s ease-out forwards;
}

.animate-slide-in-right {
  animation: slide-in-right 1s ease-out forwards;
}

.animate-slide-in-right-rotate {
  animation: slide-in-right-rotate 1s ease-out forwards;
}
</style>
