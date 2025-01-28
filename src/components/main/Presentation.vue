<template>
  <div class="flex justify-center">
    <div class="mt-[100px]">
      <h1
        class="font-semibold lg:text-[40px] text-[28px] text-center lg:text-left"
      >
        Отправим презентацию системы и промокод <br />
        на скидку до 20%
      </h1>
      <div class="bg-white p-5 rounded-2xl lg:w-[1116px] mt-10">
        <p class="text-[16px] font-semibold text-[#7D7C8F] hidden lg:block">
          Пожалуйста, ответьте на несколько вопросов перед презентацией. <br />
          Они помогут лучше понять ваши потребности.
        </p>

        <!-- Progress Indicator -->
        <div class="hidden lg:block">
          <div class="flex justify-between space-x-3 items-center mt-2">
            <div
              class="w-1/3 h-1 transition-all duration-300 rounded-2xl"
              :class="currentPage >= 1 ? 'bg-[#3C57FF]' : 'bg-[#E0E0E0]'"
            ></div>
            <div
              class="w-1/3 h-1 transition-all duration-300 rounded-2xl"
              :class="currentPage >= 2 ? 'bg-[#3C57FF]' : 'bg-[#E0E0E0]'"
            ></div>
            <div
              class="w-1/3 h-1 transition-all duration-300 rounded-2xl"
              :class="currentPage >= 3 ? 'bg-[#3C57FF]' : 'bg-[#E0E0E0]'"
            ></div>
          </div>
        </div>

        <!-- User Info Section -->
        <div class="flex lg:hidden">
          <img
            src="/images/user-face.svg"
            alt="user"
            class="mr-2 lg:w-[42px] w-[36px]"
          />
          <div>
            <p class="font-medium text-gray-600 text-[12px]">Юрий Кирсанов</p>
            <p class="font-medium text-[12px]">
              Менеджер по внедрению SkladBot
            </p>
          </div>
        </div>
        <div class="lg:hidden mt-[15px] mb-[15px]">
          <div class="flex justify-between space-x-3 items-center mt-2">
            <div
              class="w-1/3 h-1 transition-all duration-300 rounded-2xl"
              :class="currentPage >= 1 ? 'bg-[#3C57FF]' : 'bg-[#E0E0E0]'"
            ></div>
            <div
              class="w-1/3 h-1 transition-all duration-300 rounded-2xl"
              :class="currentPage >= 2 ? 'bg-[#3C57FF]' : 'bg-[#E0E0E0]'"
            ></div>
            <div
              class="w-1/3 h-1 transition-all duration-300 rounded-2xl"
              :class="currentPage >= 3 ? 'bg-[#3C57FF]' : 'bg-[#E0E0E0]'"
            ></div>
          </div>
        </div>

        <!-- Dynamic Question Pages -->
        <div v-if="currentPage === 1">
          <div class="lg:flex justify-between lg:mt-[32px]">
            <h2 class="font-semibold lg:text-[32px] text-xl">
              Подскажите, чем вы занимаетесь?
            </h2>
            <div class="hidden lg:flex">
              <img
                src="/images/user-face.svg"
                alt="user"
                width="42"
                class="mr-2"
              />
              <div>
                <p class="font-medium text-gray-600">Юрий Кирсанов</p>
                <p class="font-medium">Менеджер по внедрению SkladBot</p>
              </div>
            </div>
          </div>
          <div>
            <!-- Question Choices -->
            <div class="flex items-center space-x-2 mt-[50px]">
              <div class="relative">
                <input
                  type="radio"
                  id="radio1"
                  name="percentage"
                  v-model="selectedOption"
                  value="Фулфилмент"
                  class="appearance-none h-5 w-5 checked:border-[7px] checked:border-[#1c33ff] rounded-full border-gray-200 border-[2px] focus:outline-none cursor-pointer"
                />
              </div>
              <label
                for="radio1"
                class="text-[#1e3255] font-medium mt-[-8px] cursor-pointer"
              >
                Фулфилмент
              </label>
            </div>
            <div class="flex items-center space-x-2 mt-2">
              <div class="relative">
                <input
                  type="radio"
                  id="radio2"
                  name="percentage"
                  v-model="selectedOption"
                  value="Селлер со своим складом"
                  class="appearance-none h-5 w-5 checked:border-[7px] checked:border-[#1c33ff] rounded-full border-gray-200 border-[2px] focus:outline-none cursor-pointer"
                />
              </div>
              <label
                for="radio2"
                class="text-[#1e3255] font-medium mt-[-8px] cursor-pointer"
              >
                Селлер со своим складом
              </label>
            </div>
            <div class="lg:flex justify-between">
              <input
                type="text"
                placeholder="Другое"
                v-model="otherInput"
                @focus="resetRadio"
                class="mt-4 rounded-lg bg-[#F0F3F8] p-4 outline-none h-[45px] lg:w-[350px] w-full"
              />
            </div>
          </div>
        </div>

        <div v-if="currentPage === 2">
          <!-- Another Question Page -->
          <div class="lg:flex justify-between mt-[32px]">
            <h2 class="font-semibold lg:text-[32px] text-xl">
              Какой у вас бизнес?
            </h2>
            <div class="hidden lg:flex">
              <img
                src="/images/user-face.svg"
                alt="user"
                width="42"
                class="mr-2"
              />
              <div>
                <p class="font-medium text-gray-600">Юрий Кирсанов</p>
                <p class="font-medium">Менеджер по внедрению SkladBot</p>
              </div>
            </div>
          </div>
          <div class="flex items-center space-x-2 mt-[50px]">
            <div class="relative">
              <input
                type="radio"
                id="radio3"
                name="business_type"
                v-model="selectedBusinessType"
                value="Онлайн магазин"
                class="appearance-none h-5 w-5 checked:border-[7px] checked:border-[#1c33ff] rounded-full border-gray-200 border-[2px] focus:outline-none cursor-pointer"
              />
            </div>
            <label
              for="radio3"
              class="text-[#1e3255] font-medium mt-[-8px] cursor-pointer"
            >
              Онлайн магазин
            </label>
          </div>
          <div class="flex items-center space-x-2 mt-2">
            <div class="relative">
              <input
                type="radio"
                id="radio4"
                name="business_type"
                v-model="selectedBusinessType"
                value="Офлайн магазин"
                class="appearance-none h-5 w-5 checked:border-[7px] checked:border-[#1c33ff] rounded-full border-gray-200 border-[2px] focus:outline-none cursor-pointer"
              />
            </div>
            <label
              for="radio4"
              class="text-[#1e3255] font-medium mt-[-8px] cursor-pointer"
            >
              Офлайн магазин
            </label>
          </div>
        </div>

        <div v-if="currentPage === 3">
          <!-- Third Question Page -->
          <div class="lg:flex justify-between mt-[32px]">
            <h2 class="font-semibold lg:text-[32px] text-xl">
              Какой у вас план на будущее?
            </h2>
            <div class="hidden lg:flex">
              <img
                src="/images/user-face.svg"
                alt="user"
                width="42"
                class="mr-2"
              />
              <div>
                <p class="font-medium text-gray-600">Юрий Кирсанов</p>
                <p class="font-medium">Менеджер по внедрению SkladBot</p>
              </div>
            </div>
          </div>
          <div class="flex items-center space-x-2 mt-[50px]">
            <div class="relative">
              <input
                type="radio"
                id="radio5"
                name="future_plan"
                v-model="selectedFuturePlan"
                value="Расширение"
                class="appearance-none h-5 w-5 checked:border-[7px] checked:border-[#1c33ff] rounded-full border-gray-200 border-[2px] focus:outline-none cursor-pointer"
              />
            </div>
            <label
              for="radio5"
              class="text-[#1e3255] font-medium mt-[-8px] cursor-pointer"
            >
              Расширение
            </label>
          </div>
          <div class="flex items-center space-x-2 mt-2">
            <div class="relative">
              <input
                type="radio"
                id="radio6"
                name="future_plan"
                v-model="selectedFuturePlan"
                value="Оптимизация"
                class="appearance-none h-5 w-5 checked:border-[7px] checked:border-[#1c33ff] rounded-full border-gray-200 border-[2px] focus:outline-none cursor-pointer"
              />
            </div>
            <label
              for="radio6"
              class="text-[#1e3255] font-medium mt-[-8px] cursor-pointer"
            >
              Оптимизация
            </label>
          </div>
        </div>

        <!-- Navigation Buttons -->
        <div class="flex lg:justify-end justify-between space-x-4 lg:mt-0 mt-[40px]">
          <button
            v-if="currentPage > 1"
            @click="goPrev"
            class="bg-[#3C57FF] text-white font-medium text-[16px] p-2 h-[45px] rounded-xl w-[109px]"
          >
            Назад
          </button>

          <button
            v-if="currentPage < 3"
            @click="goNext"
            class="bg-[#3C57FF] text-white font-medium text-[16px] p-2 h-[45px] rounded-xl w-[109px]"
          >
            Далее
          </button>

          <button
            v-if="currentPage === 3"
            @click="goNext"
            class="bg-[#3C57FF] text-white font-medium text-[16px] p-2 h-[45px] rounded-xl w-[109px]"
          >
            Готово
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// State to manage the current page
const currentPage = ref(1);

// State for selected options
const selectedOption = ref(null);
const selectedBusinessType = ref(null);
const selectedFuturePlan = ref(null);
const otherInput = ref("");

const goNext = () => {
  if (currentPage.value < 3) {
    currentPage.value++;
  }
};

const goPrev = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

const resetRadio = () => {
  selectedOption.value = null;
  selectedBusinessType.value = null;
  selectedFuturePlan.value = null;
};
</script>
