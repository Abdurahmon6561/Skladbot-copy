<template>
    <div class="absolute top-full p-2">
      <div class="w-[820px] ml-[-18px] bg-white shadow-md shadow-blue-100 rounded-md z-50 p-4">
        <div class="grid gap-2 grid-cols-2 w-full">
          <div
            class="flex space-x-4 rounded-md p-2 cursor-pointer hover:bg-[#E7EEFF]"
            @click="navigateToPage('/')"
          >
            <div>
              <div class="p-2 bg-[#E7EEFF] rounded-md">
                <img src="/images/constructor.svg" width="30" alt="Constructor" />
              </div>
            </div>
            <div>
              <h1 class="text-black text-[16px] font-medium">Конструктор процессов</h1>
              <p class="text-[#5C5C5C] text-[14px] font-normal">
                Создание процессов и настройка последовательности этапов
              </p>
            </div>
          </div>
  
          <div
            class="flex space-x-4 rounded-md p-2 cursor-pointer hover:bg-[#E7EEFF]"
            @click="navigateToPage('/')"
          >
            <div>
              <div class="p-2 bg-[#E7EEFF] rounded-md">
                <img src="/images/users.svg" alt="users" />
              </div>
            </div>
            <div>
              <h1 class="text-black text-[16px] font-medium">Клиенты</h1>
              <p class="text-[#5C5C5C] text-[14px] font-normal">
                Управление базой клиентов фулфилмента
              </p>
            </div>
          </div>
  
          <div
            class="flex space-x-4 rounded-md p-2 cursor-pointer hover:bg-[#E7EEFF]"
            @click="navigateToPage('/calendar')"
          >
            <div>
              <div class="p-2 bg-[#E7EEFF] rounded-md">
                <img src="/images/calendar.svg" width="30" alt="calendar" />
              </div>
            </div>
            <div>
              <h1 class="text-black text-[16px] font-medium">Календарь</h1>
              <p class="text-[#5C5C5C] text-[14px] font-normal">
                Оцифровка задач с дедлайном и уведомления об этапах в Телеграм
              </p>
            </div>
          </div>
  
          <div
            class="flex space-x-4 rounded-md p-2 cursor-pointer hover:bg-[#E7EEFF]"
            @click="navigateToPage('/orders')"
          >
            <div>
              <div class="p-2 bg-[#E7EEFF] rounded-md">
                <img src="/images/documents.svg" width="37" alt="documents" />
              </div>
            </div>
            <div>
              <h1 class="text-black text-[16px] font-medium">Документы</h1>
              <p class="text-[#5C5C5C] text-[14px] font-normal">
                Оцифровка документооборота: авто-выставление счетов, КП и актов
              </p>
            </div>
          </div>
  
          <div
            class="flex space-x-4 rounded-md p-2 cursor-pointer hover:bg-[#E7EEFF]"
            @click="navigateToPage('/werehouse')"
          >
            <div>
              <div class="p-2 bg-[#E7EEFF] rounded-md">
                <img src="/images/werehouse.svg" width="35" alt="werehouse" />
              </div>
            </div>
            <div>
              <h1 class="text-black text-[16px] font-medium">Складской модуль</h1>
              <p class="text-[#5C5C5C] text-[14px] font-normal">
                Оцифровка склада: ячеечное хранение, учёт остатков, инвентаризация…
              </p>
            </div>
          </div>
  
          <div
            class="flex space-x-4 rounded-md p-2 cursor-pointer hover:bg-[#E7EEFF]"
            @click="navigateToPage('/')"
          >
            <div>
              <div class="p-2 bg-[#E7EEFF] rounded-md">
                <img src="/images/tag-user.svg" alt="tag-user" />
              </div>
            </div>
            <div>
              <h1 class="text-black text-[16px] font-medium">Сотрудники</h1>
              <p class="text-[#5C5C5C] text-[14px] font-normal">
                Создание отделов и просмотр действий в системе
              </p>
            </div>
          </div>
  
          <div
            class="flex space-x-4 rounded-md p-2 cursor-pointer hover:bg-[#E7EEFF]"
            @click="navigateToPage('/fbs')"
          >
            <div>
              <div class="p-2 bg-[#E7EEFF] rounded-md">
                <img src="/images/fbs.svg" width="30" alt="fbs" />
              </div>
            </div>
            <div>
              <h1 class="text-black text-[16px] font-medium">FBS</h1>
              <p class="text-[#5C5C5C] text-[14px] font-normal">
                Интеграция по API, онлайн-статусы по заявкам, отгрузка на ПВЗ
              </p>
            </div>
          </div>
  
          <div
            class="flex space-x-4 rounded-md p-2 cursor-pointer hover:bg-[#E7EEFF]"
            @click="navigateToPage('/')"
          >
            <div>
              <div class="p-2 bg-[#E7EEFF] rounded-md">
                <img src="/images/barcode.svg" width="30" alt="barcode" />
              </div>
            </div>
            <div>
              <h1 class="text-black text-[16px] font-medium">Приложение для ТСД</h1>
              <p class="text-[#5C5C5C] text-[14px] font-normal">
                Приложение для автоматизации приемки, сборки и хранения
              </p>
            </div>
          </div>
  
          <div
            class="flex space-x-4 rounded-md p-2 cursor-pointer hover:bg-[#E7EEFF]"
            @click="navigateToPage('/')"
          >
            <div>
              <div class="p-2 bg-[#E7EEFF] rounded-md">
                <img src="/images/requests.svg" alt="requests" />
              </div>
            </div>
            <div>
              <h1 class="text-black text-[16px] font-medium">Центр заявок</h1>
              <p class="text-[#5C5C5C] text-[14px] font-normal">
                Постановка задач сотрудникам склада
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router'

  const router = useRouter()
  
  const navigateToPage = (path) => {
    router.push(path)
  }
  </script>
  
  <style scoped>
  </style>
  