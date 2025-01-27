<template>
  <div class="flex justify-center items-center mt-[120px] px-4">
    <div class="w-full">
      <h1 class="font-semibold text-[32px] md:text-[40px] text-center">
        Результаты внедрения
      </h1>

      <!-- Scrollable container -->
      <div
        class="lg:flex lg:space-x-8 lg:flex-row justify-center mt-[40px] md:mt-[66px] lg:overflow-x-hidden"
        ref="scrollContainer"
      >
        <!-- First card -->
        <div
          class="w-full lg:w-[696px] bg-white p-4 md:p-6 rounded-2xl flex-shrink-0 lg:ml-[300px] ml-0"
        >
          <h2
            class="font-semibold text-[22px] md:text-[28px] text-[#3F4685] text-center md:text-left"
          >
            Стали работать на 25% быстрее. Сейчас не видим альтернатив SkladBot
          </h2>
          <div
            class="p-4 md:p-6 mt-3 flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-5"
          >
            <div class="w-full md:w-auto">
              <h2
                class="font-normal text-[#4C4C4C] mb-3 text-center md:text-left"
              >
                До внедрения
              </h2>
              <div class="flex space-x-3 md:space-x-5 mt-3 items-center">
                <img src="/images/tick-square.svg" alt="icon" class="w-6 h-6" />
                <p class="text-[14px] md:text-[16px]">
                  Тратили две минуты только на поиск нужного листа в Google
                  Sheets
                </p>
              </div>
              <div class="flex space-x-3 md:space-x-5 mt-3 items-center">
                <img src="/images/tick-square.svg" alt="icon" class="w-6 h-6" />
                <p class="text-[14px] md:text-[16px]">
                  Попробовали RAXS, WMS24 и МПФИТ, но ни одна из систем не
                  решила задачи компании
                </p>
              </div>
            </div>
            <div
              class="bg-[#3C57FF] p-4 rounded-2xl mt-[-10px] w-full md:w-auto"
            >
              <h2 class="font-normal text-white mb-3 text-center md:text-left">
                После внедрения
              </h2>
              <div class="flex space-x-3 md:space-x-5 mt-3 items-center">
                <img src="/images/done.svg" alt="icon" class="w-6 h-6" />
                <p class="text-[14px] md:text-[16px] text-white">
                  Сборку и оклейку стали делать быстрее: раньше обрабатывали 45
                  000 единиц, сейчас 60 000 за то же время
                </p>
              </div>
              <div class="flex space-x-3 md:space-x-5 mt-3 items-center">
                <img src="/images/done.svg" alt="icon" class="w-6 h-6" />
                <p class="text-[14px] md:text-[16px] text-white">
                  Закрываем крупных клиентов быстрее и проще
                </p>
              </div>
            </div>
          </div>
          <div>
            <h4 class="opacity-55">Нурхайдаров Кадим</h4>
            <p class="font-semibold">Fox2Box</p>
          </div>
        </div>

        <!-- Second card -->
        <div
          class="w-full lg:w-[696px] bg-[#3C57FF] p-4 md:p-6 rounded-2xl flex-shrink-0 lg:mt-0 mt-[50px]"
        >
          <h2
            class="font-semibold text-[22px] md:text-[28px] text-white text-center md:text-left"
          >
            Высвободил личное время и стал работать с крупными клиентами
          </h2>
          <div
            class="p-4 md:p-6 mt-3 flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-5"
          >
            <div class="w-full md:w-auto">
              <h2 class="font-normal text-white mb-3 text-center md:text-left">
                До внедрения
              </h2>
              <div class="flex space-x-3 md:space-x-5 mt-3 items-center">
                <img src="/images/tick-square.svg" alt="icon" class="w-6 h-6" />
                <p class="text-[14px] md:text-[16px] text-white">
                  Сводили остатки вручную. С учётом стоимости часа сотрудника
                  получалось очень дорого
                </p>
              </div>
              <div class="flex space-x-3 md:space-x-5 mt-3 items-center">
                <img src="/images/tick-square.svg" alt="icon" class="w-6 h-6" />
                <p class="text-[14px] md:text-[16px] text-white">
                  Тратили много времени на выставление счетов клиентам
                </p>
              </div>

              <div class="mt-[30px]">
                <h4 class="opacity-60 text-white">Роман Скороходов</h4>
                <p class="font-semibold text-white">Фулсар</p>
              </div>
            </div>
            <div class="bg-white p-4 rounded-2xl mt-[-10px] w-full md:w-auto">
              <h2 class="font-normal mb-3 text-center md:text-left">
                После внедрения
              </h2>
              <div class="flex space-x-3 md:space-x-5 mt-3 items-center">
                <img src="/images/tick-black.svg" alt="icon" class="w-6 h-6" />
                <p class="text-[14px] md:text-[16px]">
                  Доверие крупных клиентов и быстрый рост
                </p>
              </div>

              <div class="flex space-x-3 md:space-x-5 mt-3 items-center">
                <img src="/images/tick-black.svg" alt="icon" class="w-6 h-6" />
                <p class="text-[14px] md:text-[16px]">
                  Меньше операционки: SkladBot автоматически считает остатки, мы
                  быстрее находим товар, меньше работаем руками
                </p>
              </div>

              <div class="flex space-x-3 md:space-x-5 mt-3 items-center">
                <img src="/images/tick-black.svg" alt="icon" class="w-6 h-6" />
                <p class="text-[14px] md:text-[16px]">
                  Появилось личное время: я больше отдыхаю и думаю о стратегии
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Scrollable arrows -->
      <div class="flex justify-end space-x-4 mt-6">
        <img
          src="/images/arrow_right.svg"
          alt="icon_left"
          class="rotate-180 cursor-pointer w-8 h-8 hidden lg:block"
          @click="scrollLeft"
        />
        <img
          src="/images/arrow_right.svg"
          alt="icon_right"
          class="cursor-pointer w-8 h-8 hidden lg:block"
          @click="scrollRight"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const scrollContainer = ref(null);

const scrollLeft = () => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollBy({
      left: -200, 
      behavior: "smooth", 
    });
  }
};

const scrollRight = () => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollBy({
      left: 200, 
      behavior: "smooth", 
    });
  }
};
</script>
