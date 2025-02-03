<template>
  <div class="flex justify-center mt-[100px] mb-[-80px]">
    <div
      class="lg:flex justify-between text-center lg:text-left gap-[130px] mb-[50px]"
    >
      <div class="font-bold lg:text-[50px] text-[35px]">
        Ответы <br />
        на вопросы
      </div>

      <div class="mt-5 lg:mt-0">
        <div
          class="bg-white p-4 rounded-xl items-center mb-4 cursor-pointer lg:w-[720px]"
          @click="toggleDropdown(0)"
        >
          <div class="flex justify-between items-center space-x-3">
            <h2 class="font-bold lg:text-[15px] text-[13px] text-left">
              Какие интеграции есть в SkladBot?
            </h2>
            <span class="text-[24px]">{{ openIndex === 0 ? "−" : "+" }}</span>
          </div>
          <div
            :class="`overflow-hidden transition-all duration-300 ${
              openIndex === 0 ? 'max-h-full mt-3' : 'max-h-0'
            }`"
          >
            <p class="text-[14px]">
              Готовые интеграции с Ozon, Wildberries, Yandex.Market, Kazan Express, Uzum, Tilda, Telegram и Fargo. Остальные интеграции можно сделать по API.
            </p>
          </div>
        </div>

        <div
          class="bg-white p-4 rounded-xl mb-4 cursor-pointer lg:w-[720px]"
          @click="toggleDropdown(1)"
        >
          <div class="flex justify-between items-center space-x-3">
            <h2 class="font-bold lg:text-[15px] text-[13px]">
              Сколько времени займёт настройка?


            </h2>
            <span class="text-[24px]">{{ openIndex === 1 ? "−" : "+" }}</span>
          </div>
          <div
            :class="`overflow-hidden transition-all duration-300 ${
              openIndex === 1 ? 'max-h-full mt-3' : 'max-h-0'
            }`"
          >
            <p class="text-[14px]">
            </p>
          </div>
        </div>

        <div
          class="bg-white p-4 rounded-xl mb-4 cursor-pointer lg:w-[720px]"
          @click="toggleDropdown(2)"
        >
          <div class="flex justify-between items-center space-x-3">
            <h2 class="font-bold lg:text-[15px] text-[13px]">
              Как протестировать WMS перед покупкой?
            </h2>
            <span class="text-[24px]">{{ openIndex === 2 ? "−" : "+" }}</span>
          </div>
          <div
            :class="`overflow-hidden transition-all duration-300 ${
              openIndex === 2 ? 'max-h-full mt-3' : 'max-h-0'
            }`"
          >
            <p class="text-[14px]">
            </p>
          </div>
        </div>

        <div
          class="bg-white p-4 rounded-xl mb-4 cursor-pointer lg:w-[720px]"
          @click="toggleDropdown(3)"
        >
          <div class="flex justify-between items-center space-x-3">
            <h2 class="font-bold lg:text-[15px] text-[13px]">
              Есть ли сопровождение на первых этапах интеграции?
            </h2>
            <span class="text-[24px]">{{ openIndex === 3 ? "−" : "+" }}</span>
          </div>
          <div
            :class="`overflow-hidden transition-all duration-300 ${
              openIndex === 3 ? 'max-h-full mt-3' : 'max-h-0'
            }`"
          >
            <p class="text-[14px]">
            </p>
          </div>
        </div>

        <div
          class="bg-white p-4 rounded-xl mb-4 cursor-pointer lg:w-[720px]"
          @click="toggleDropdown(4)"
        >
          <div class="flex justify-between items-center space-x-3">
            <h2 class="font-bold lg:text-[15px] text-[13px]">
              Добавляете ли вы новый функционал по запросу?
            </h2>
            <span class="text-[24px]">{{ openIndex === 4 ? "−" : "+" }}</span>
          </div>
          <div
            :class="`overflow-hidden transition-all duration-300 ${
              openIndex === 4 ? 'max-h-full mt-3' : 'max-h-0'
            }`"
          >
            <p class="text-[14px]">
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const openIndex = ref(null);

const toggleDropdown = (index) => {
  openIndex.value = openIndex.value === index ? null : index;
};
</script>
