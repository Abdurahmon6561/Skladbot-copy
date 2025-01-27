<template>
  <div class="relative flex justify-between items-center p-2">
    <div class="lg:hidden flex justify-between items-center w-full">
      <button
        class="block md:hidden p-2"
        @click="isMobileMenuOpen = !isMobileMenuOpen"
      >
        <img src="/images/hamburger-response.svg" alt="Menu" class="h-6 w-6" />
      </button>

      <div class="flex-grow flex justify-center">
        <router-link to="/">
          <img src="/images/logo.svg" alt="logo" class="md:hidden h-8" />
        </router-link>
      </div>

      <div class="w-6 h-6"></div>
    </div>

    <router-link to="/">
      <img
        src="/images/logo.svg"
        alt="logo"
        class="lg:w-[83px] hidden md:block"
      />
    </router-link>

    <!-- Desktop  -->
    <nav class="hidden md:flex justify-between ml-[90px]">
      <ul class="flex space-x-3">
        <li
          class="relative flex gap-2 p-2 font-normal hover:bg-[#E7EEFF] hover:text-[#0539D3] text-black text-[16px] rounded-md transition-transform duration-700 cursor-pointer "
          @mouseenter="handleMouseEnter('Функционал')"
          @mouseleave="handleMouseLeave"
        >
          Функционал
          <img
            src="/images/dropdown.svg"
            alt="dropdown-image"
            class="mt-1 transition-transform duration-300"
            :class="{ 'rotate-180 filter-blue': selectedItem === 'Функционал' }"
          />
          <Funcsionals v-if="selectedItem === 'Функционал'" />
        </li>
        <li
          class="p-2 hover:bg-[#E7EEFF] font-normal hover:text-[#0539D3] text-[16px] rounded-md transition-transform duration-700 cursor-pointer"
        >
          <router-link to="/">Тарифы</router-link>
        </li>
        <li
          class="relative flex gap-2 p-2 font-normal hover:bg-[#E7EEFF] hover:text-[#0539D3] text-[16px] rounded-md transition-transform duration-700 cursor-pointer"
          @mouseenter="handleMouseEnter('Материалы')"
          @mouseleave="handleMouseLeave"
        >
          Материалы
          <img
            src="/images/dropdown.svg"
            alt="dropdown-image"
            class="mt-1 transition-transform duration-300"
            :class="{ 'rotate-180 filter-blue': selectedItem === 'Материалы' }"
          />
          <Funcsionals v-if="selectedItem === 'Материалы'" />
        </li>
        <li
          class="p-2 hover:bg-[#E7EEFF] font-normal hover:text-[#0539D3] text-[16px] rounded-md transition-transform duration-700 cursor-pointer"
        >
          Инструкции
        </li>
        <li
          class="p-2 hover:bg-[#E7EEFF] font-normal hover:text-[#0539D3] text-[16px] rounded-md transition-transform duration-700 cursor-pointer"
        >
          Поддержка
        </li>
      </ul>
    </nav>

    <!-- Desktop -->
    <div class="hidden md:flex space-x-4">
      <a href="https://online.skladbot.ru/login" target="_blank" class="mt-2">
        <button class="relative text-[#3C57FF] font-semibold group">
          Войти
          <span
            class="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 ease-in-out group-hover:w-full"
          ></span>
        </button>
      </a>

      <a href="https://t.me/APPSkladbot" target="_blank">
        <button
          class="flex gap-1 p-2 w-[145px] items-center justify-center bg-[#3C57FF] rounded-md text-white font-semibold"
        >
          Подписаться
          <img src="/images/telegram.svg" alt="telegram" class="mt-[3px]" />
        </button>
      </a>
    </div>

    <!-- Mobile  -->
    <div
      v-if="isMobileMenuOpen"
      class="absolute top-[100%] left-0 w-full bg-white z-50 md:hidden p-4 shadow-md"
    >
      <ul class="space-y-3">
        <li
          class="p-2 hover:bg-[#E7EEFF] font-normal hover:text-[#0539D3] text-[16px] rounded-md transition-transform duration-700 cursor-pointer"
        >
          <router-link to="/calendar">Календарь</router-link>
        </li>
        <li
          class="relative flex gap-2 p-2 font-normal hover:bg-[#E7EEFF] hover:text-[#0539D3] text-[16px] rounded-md transition-transform duration-700 cursor-pointer"
        >
        <router-link to="/werehouse">Склад</router-link>
        </li>
        <li
          class="p-2 hover:bg-[#E7EEFF] font-normal hover:text-[#0539D3] text-[16px] rounded-md transition-transform duration-700 cursor-pointer"
        >
        <router-link to="/fbs">Fbs</router-link>
        </li>

      </ul>
      <div class="mt-4 space-y-4 items-center grid grid-cols-2">
        <a href="https://online.skladbot.ru/login" target="_blank">
          <button class="relative text-[#3C57FF] font-semibold group w-full mt-3">Войти
          </button>
        </a>
        <a href="https://t.me/APPSkladbot" target="_blank">
          <button
            class="w-full flex gap-1 p-2 items-center justify-center bg-[#3C57FF] rounded-md text-white font-semibold"
          >
            Подписаться
            <img src="/images/telegram.svg" alt="telegram" class="mt-[3px]" />
          </button>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Funcsionals from "./Funcsionals.vue";

const selectedItem = ref(null);
const isMobileMenuOpen = ref(false);

const handleMouseEnter = (item) => {
  selectedItem.value = item;
};

const handleMouseLeave = () => {
  selectedItem.value = null;
};
</script>
