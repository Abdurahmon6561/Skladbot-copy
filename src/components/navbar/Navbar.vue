<template>
  <div class="relative flex justify-between items-center p-4">
    <!-- Logo -->
    <router-link to="/">
      <img src="/images/logo.svg" alt="logo" class="lg:w-[83px]" />
    </router-link>

    <!-- Hamburger Menu Button (visible on phones only) -->
    <button
      class="block md:hidden p-2"
      @click="isMobileMenuOpen = !isMobileMenuOpen"
    >
      <img src="/images/hamburger.svg" alt="Menu" />
    </button>

    <!-- Desktop and Tablet Navigation -->
    <nav class="hidden md:flex justify-between ml-[90px]">
      <ul class="flex space-x-3">
        <li
          class="relative flex gap-2 p-2 font-normal hover:bg-[#E7EEFF] hover:text-[#0539D3] text-black text-[16px] rounded-md transition-transform duration-700 cursor-pointer"
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
          <router-link to="/tarif">Тарифы</router-link>
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

    <!-- Desktop and Tablet Buttons -->
    <div class="hidden md:flex space-x-4">
      <a href="https://online.skladbot.ru/login" target="_blank" class="mt-2">
        <button class="text-[#3C57FF] font-semibold">Войти</button>
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

    <!-- Mobile Menu (Visible on Phones) -->
    <div
      v-if="isMobileMenuOpen"
      class="absolute top-[100%] left-0 w-full bg-white z-50 md:hidden p-4 shadow-md"
    >
      <ul class="space-y-3">
        <li
          class="relative flex gap-2 p-2 font-normal hover:bg-[#E7EEFF] hover:text-[#0539D3] text-black text-[16px] rounded-md transition-transform duration-700 cursor-pointer"
          @click="handleMouseEnter('Функционал')"
        >
          Функционал
        </li>
        <li
          class="p-2 hover:bg-[#E7EEFF] font-normal hover:text-[#0539D3] text-[16px] rounded-md transition-transform duration-700 cursor-pointer"
        >
          <router-link to="/tarif">Тарифы</router-link>
        </li>
        <li
          class="relative flex gap-2 p-2 font-normal hover:bg-[#E7EEFF] hover:text-[#0539D3] text-[16px] rounded-md transition-transform duration-700 cursor-pointer"
          @click="handleMouseEnter('Материалы')"
        >
          Материалы
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
      <div class="mt-4 space-y-2">
        <a href="https://online.skladbot.ru/login" target="_blank">
          <button class="w-full text-[#3C57FF] font-semibold">Войти</button>
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
