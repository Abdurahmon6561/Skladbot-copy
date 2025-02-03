<template>
  <div class="mt-[110px] flex justify-center items-center px-4 sm:px-0  relative">
    <div class="relative w-full max-w-[1024px] z-10">
      <div class="bg-white flex justify-between rounded-3xl h-[562px] overflow-hidden">
        <div class="p-8">
          <h2 class="font-normal text-[40px] ">Зачем нужен конструктор</h2><br><br>
          <p class="font-normal text-[17px] w-[500px]">
            Конструктор позволяет настроить IT-систему под себя. Если в системе
            автоматизации нельзя изменить бизнес-процессы, вам придётся
            перестраивать работу на складе с учётом логики, которую заложил
            разработчик.
            <br /><br />
            Например, вы не сможете поставить первым этапом согласование перечня
            работ, если в системе идёт приёмка.
            <br /><br />
            Поэтому, если вам нужна гибкость, выбирайте систему с конструктором.
          </p>
        </div>
        <!-- Images Container -->
        <div class="w-full h-full relative">
          <img
            src="../../../public/images/first-constructor.png"
            alt="business-possible"
            class="min-w-[600px] absolute top-0 right-[-120px]"
          />
          <img
            src="../../../public/images/second-constructor.png"
            alt="business-possible"
            class="min-w-[600px] absolute top-[180px] right-[-220px]"
          />
        </div>
      </div>

      <!-- Icons Section -->
      <div class="mt-[51px] flex justify-between gap-4 sm:gap-8 flex-wrap z-10">
        <div
          v-for="(item, index) in icons"
          :key="index"
          class="flex flex-col items-center w-1/4 sm:w-auto mb-4"
        >
          <img
            :src="`/images/${item.img}`"
            :alt="item.alt"
            width="40"
            class="p-[10px] bg-white rounded-md"
          />
          <p class="font-normal text-[14px] sm:text-[16px] mt-2 text-center">
            {{ item.label }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const icons = [
  { img: "constructor.svg", alt: "constructor", label: "Процессы" },
  { img: "calendar.svg", alt: "Calendar", label: "Календарь" },
  { img: "werehouse.svg", alt: "Werehouse", label: "Склад" },
  { img: "fbs.svg", alt: "Fbs", label: "FBS" },
  { img: "requests.svg", alt: "Requests", label: "Заявки" },
  { img: "users.svg", alt: "Users", label: "Клиенты" },
  { img: "documents.svg", alt: "Documents", label: "Документы" },
  { img: "tag-user.svg", alt: "TagUser", label: "Сотрудники" },
  { img: "barcode.svg", alt: "Barcode", label: "ТСД" },
];
</script>

<style scoped></style>
