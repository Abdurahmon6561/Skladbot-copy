<template>
    <div class="flex justify-center items-center mt-[120px] px-4">
      <div class="w-full max-w-[1200px]">
        <h1 class="font-semibold text-[32px] md:text-[40px] text-center">
          Результаты внедрения
        </h1>
        <div class="flex justify-center">
          <div class="w-full max-w-[696px] mt-[40px] md:mt-[66px] bg-white p-4 md:p-6 rounded-2xl">
            <h2 class="font-semibold text-[22px] md:text-[28px] text-[#3F4685] text-center md:text-left">
              {{ content[currentIndex].title }}
            </h2>
            <div class="p-4 md:p-6 mt-3 flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-5">
              <div class="w-full md:w-auto">
                <h2 class="font-normal text-[#4C4C4C] mb-3 text-center md:text-left">
                  До внедрения
                </h2>
                <div v-for="(text, index) in content[currentIndex].before" :key="index" class="flex space-x-3 md:space-x-5 mt-3 items-center">
                  <img src="/images/tick-square.svg" alt="icon" class="w-6 h-6" />
                  <p class="text-[14px] md:text-[16px]">{{ text }}</p>
                </div>
              </div>
              <div class="bg-[#3C57FF] p-4 rounded-2xl mt-[-10px] w-full md:w-auto">
                <h2 class="font-normal text-white mb-3 text-center md:text-left">
                  После внедрения
                </h2>
                <div v-for="(text, index) in content[currentIndex].after" :key="index" class="flex space-x-3 md:space-x-5 mt-3 items-center">
                  <img src="/images/done.svg" alt="icon" class="w-6 h-6" />
                  <p class="text-[14px] md:text-[16px] text-white">{{ text }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <div class="mt-6 flex justify-between md:justify-end px-4 md:px-0 space-x-3">
          <img
            src="/images/arrow_right.svg"
            alt="icon_left"
            class="rotate-180 cursor-pointer w-8 h-8"
            @click="handlePrev"
          />
          <img
            src="/images/arrow_right.svg"
            alt="icon_right"
            class="cursor-pointer w-8 h-8"
            @click="handleNext"
          />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentIndex: 0,
        content: [
          {
            title: "Стали работать на 25% быстрее. Сейчас не видим альтернатив SkladBot",
            before: [
              "Тратили две минуты только на поиск нужного листа в Google Sheets",
              "Попробовали RAXS, WMS24 и МПФИТ, но ни одна из систем не решила задачи компании",
            ],
            after: [
              "Сборку и оклейку стали делать быстрее: раньше обрабатывали 45 000 единиц, сейчас 60 000 за то же время",
              "Закрываем крупных клиентов быстрее и проще",
            ],
          },
          {
            title: "Другие результаты. Примерный текст для второго блока",
            before: [
              "Описание проблемы до внедрения системы.",
              "Еще одно описание проблемы до внедрения.",
            ],
            after: [
              "Описание успехов после внедрения.",
              "Еще одно описание успехов после внедрения.",
            ],
          },
        ],
      };
    },
    methods: {
      handlePrev() {
        this.currentIndex = this.currentIndex === 0 ? this.content.length - 1 : this.currentIndex - 1;
      },
      handleNext() {
        this.currentIndex = this.currentIndex === this.content.length - 1 ? 0 : this.currentIndex + 1;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Your styles here */
  </style>
  