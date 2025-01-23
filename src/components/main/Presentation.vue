<template>
  <div class="flex justify-center">
    <div class="mt-[200px]">
      <h1 class="font-semibold lg:text-[40px] text-[28px] text-center lg:text-left">
        Отправим презентацию системы и промокод <br />
        на скидку до 20%
      </h1>
      <div class="bg-white p-5 rounded-2xl lg:w-[1116px] mt-10">
        <p class="text-[16px] font-semibold text-[#7D7C8F] hidden lg:block">
          Пожалуйста, ответьте на несколько вопросов перед презентацией. <br />
          Они помогут лучше понять ваши потребности.
        </p>
        <!-- Here -->
        <div class=" flex lg:hidden">
            <img
              src="/images/user-face.svg"
              alt="user"
              class="mr-2 lg:w-[42px] w-[36px]"
            />
            <div>
              <p class="font-medium text-gray-600 text-[12px]">Юрий Кирсанов</p>
              <p class="font-medium text-[12px]">Менеджер по внедрению SkladBot</p>
            </div>
          </div>
        <div class="lg:flex justify-between mt-[32px]">
          <h2 class="font-semibold lg:text-[32px] text-xl">
            Подскажите, чем вы занимаетесь?
          </h2>
          <div class=" hidden lg:flex">
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
          <div class="flex items-center space-x-2 mt-[70px]">
            <div class="relative">
              <input
                type="radio"
                id="radio1"
                name="percentage"
                value="6"
                v-model="formDataSend.tax_rate"
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
                value="6"
                v-model="formDataSend.tax_rate"
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
              class="mt-4 rounded-lg bg-[#F0F3F8] p-4 outline-none h-[45px] lg:w-[350px] w-full"
            />
            <div>
              <button
                class="bg-[#3C57FF] text-[16px] lg:w-[109px] w-full font-medium text-white p-2 h-[45px] rounded-xl mt-10"
              >
                Далее
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const formDataSend = ref({
  tax_rate: null,
});
</script>

<style scoped>
/* Add any additional styles here */
</style>
