<template>
  <div class="flex justify-center mt-[100px] mb-[-80px]">
    <div
      class="lg:flex justify-between text-center lg:text-left gap-[130px] mb-[50px]"
    >
      <div class="font-bold lg:text-[50px] mt-[90px] text-[35px]">
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
              Можно ли выставлять счета клиенту от разных ИП и юрлиц?
            </h2>
            <span class="text-[24px]">{{ openIndex === 0 ? "−" : "+" }}</span>
          </div>
          <div
            :class="`overflow-hidden transition-all duration-300 ${
              openIndex === 0 ? 'max-h-full mt-3' : 'max-h-0'
            }`"
          >
            <p class="text-[14px]">
              В SkladBot можно добавить неограниченное количество компаний и
              выставлять счета от разных юрлиц.
            </p>
          </div>
        </div>

        <div
          class="bg-white p-4 rounded-xl mb-4 cursor-pointer lg:w-[720px]"
          @click="toggleDropdown(1)"
        >
          <div class="flex justify-between items-center space-x-3">
            <h2 class="font-bold lg:text-[15px] text-[13px]">
              Как протестировать WMS перед покупкой?
            </h2>
            <span class="text-[24px]">{{ openIndex === 1 ? "−" : "+" }}</span>
          </div>
          <div
            :class="`overflow-hidden transition-all duration-300 ${
              openIndex === 1 ? 'max-h-full mt-3' : 'max-h-0'
            }`"
          >
            <p class="text-[14px]">
              Подключение оплаты занимает всего несколько минут. Следуйте
              инструкциям в разделе "Оплата" на панели управления.
            </p>
          </div>
        </div>

        <div
          class="bg-white p-4 rounded-xl cursor-pointer mb-4 lg:w-[720px]"
          @click="toggleDropdown(2)"
        >
          <div class="flex justify-between items-center space-x-3">
            <h2 class="font-bold lg:text-[15px] text-[13px]">
              Как происходит настройка?
            </h2>
            <span class="text-[24px]">{{ openIndex === 2 ? "−" : "+" }}</span>
          </div>
          <div
            :class="`overflow-hidden transition-all duration-300 ${
              openIndex === 2 ? 'max-h-full mt-3' : 'max-h-0'
            }`"
          >
            <p class="text-[14px]">
              1. После оплаты мы создадим вам аккаунт и отправим доступы
              <br /><br />
              2. Заполните карточку своей компании, укажите от кого выставлять
              счета
              <br /><br />
              3. Загрузите логотип и добавьте Телеграм-бота для уведомлений
              клиентам
              <br /><br />
              4. На тарифе Pro достаточно отправить клиентам ссылку. Они сами
              зарегистрируются, добавят API-ключи маркетплейсов и заполнят
              информацию о юрлицах. На тарифе Lite клиентов нужно регистрировать
              вручную, добавлять API и отправлять им доступы
              <br /><br />
              5. Первичная настройка займёт 30 минут. Полная настройка с
              обучением — 3−5 часов.
            </p>
          </div>
        </div>

        <div
          class="bg-white p-4 rounded-xl mb-4 cursor-pointer lg:w-[720px]"
          @click="toggleDropdown(3)"
        >
          <div class="flex justify-between items-center space-x-3">
            <h2 class="font-bold lg:text-[15px] text-[13px] text-left">
              Можно ли создать комплект товаров. Например, сковорода плюс
              крышка?
            </h2>
            <span class="text-[24px]">{{ openIndex === 3 ? "−" : "+" }}</span>
          </div>
          <div
            :class="`overflow-hidden transition-all duration-300 ${
              openIndex === 3 ? 'max-h-full mt-3' : 'max-h-0'
            }`"
          >
            <p class="text-[14px]"></p>
          </div>
        </div>

        <div
          class="bg-white p-4 rounded-xl mb-4 cursor-pointer lg:w-[720px]"
          @click="toggleDropdown(4)"
        >
          <div class="flex justify-between items-center space-x-3">
            <h2 class="font-bold lg:text-[15px] text-[13px]">
              Как считается хранение?
            </h2>
            <span class="text-[24px]">{{ openIndex === 4 ? "−" : "+" }}</span>
          </div>
          <div
            :class="`overflow-hidden transition-all duration-300 ${
              openIndex === 4 ? 'max-h-full mt-3' : 'max-h-0'
            }`"
          >
            <p class="text-[14px]"></p>
          </div>
        </div>

        <div
          class="bg-white p-4 rounded-xl mb-4 cursor-pointer lg:w-[720px]"
          @click="toggleDropdown(5)"
        >
          <div class="flex justify-between items-center space-x-3">
            <h2 class="font-bold lg:text-[15px] text-[13px] text-left">
              Есть ли разделение в модуле FBS по складам?
            </h2>
            <span class="text-[24px]">{{ openIndex === 5 ? "−" : "+" }}</span>
          </div>
          <div
            :class="`overflow-hidden transition-all duration-300 ${
              openIndex === 5 ? 'max-h-full mt-3' : 'max-h-0'
            }`"
          >
            <p class="text-[14px]"></p>
          </div>
        </div>

        <div
          class="bg-white p-4 rounded-xl mb-4 cursor-pointer lg:w-[720px]"
          @click="toggleDropdown(6)"
        >
          <div class="flex justify-between items-center space-x-3">
            <h2 class="font-bold lg:text-[15px] text-[13px] text-left">
              Можно ли объединить бизнес-процессы. <br />
              Например, приемку и отгрузку, забор товара и приемку?
            </h2>
            <span class="text-[24px]">{{ openIndex === 6 ? "−" : "+" }}</span>
          </div>
          <div
            :class="`overflow-hidden transition-all duration-300 ${
              openIndex === 6 ? 'max-h-full mt-3' : 'max-h-0'
            }`"
          >
            <p class="text-[14px]"></p>
          </div>
        </div>

        <div
          class="bg-white p-4 rounded-xl mb-4 cursor-pointer lg:w-[720px]"
          @click="toggleDropdown(7)"
        >
          <div class="flex justify-between items-center space-x-3">
            <h2 class="font-bold lg:text-[15px] text-[13px] text-left">
              Можно ли передать номинальный остаток на карточку товара? 
            </h2>
            <span class="text-[24px]">{{ openIndex === 7 ? "−" : "+" }}</span>
          </div>
          <div
            :class="`overflow-hidden transition-all duration-300 ${
              openIndex === 7 ? 'max-h-full mt-3' : 'max-h-0'
            }`"
          >
            <p class="text-[14px]"></p>
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
