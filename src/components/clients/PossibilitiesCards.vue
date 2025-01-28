<template>
  <div className="flex justify-center items-center mt-[100px] px-4 mb-[100px]">
    <div className="w-full max-w-7xl">
      <!-- <h1 className="font-semibold text-[32px] md:text-[40px] text-center">
          Поддержка
        </h1> -->

      <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div
          className="p-6 bg-white rounded-2xl transition duration-500 ease-in-out "
        >
          <img src="../../../public/images/tick.svg" alt="icon" />
          <h2
            className="text-[#3F4685] font-semibold text-[18px] md:text-[20px] mt-4"
          >
            Автоматический учёт бесплатного хранения
          </h2>
          <p
            className="font-normal text-[15px] md:text-[17px] text-[#242424] mt-2"
          >
            SkladBot вычитает срок бесплатного хранения товара при расчёте
            сметы. Счёт автоматически выставляется только за платные дни.
          </p>
        </div>

        <div
          className="p-6 bg-white rounded-2xl transition duration-500 ease-in-out "
        >
          <img src="../../../public/images/tick.svg" alt="icon" />
          <h2
            className="text-[#3F4685] font-semibold text-[18px] md:text-[20px] mt-4"
          >
            Хранение неограниченного количества API-ключей
          </h2>
          <p
            className="font-normal text-[15px] md:text-[17px] text-[#242424] mt-2"
          >
            Вы можете добавлять и хранить неограниченное количество компаний
            клиентов и API-ключей маркетплейсов. У нас работают готовые
            интеграции с Ozon, Wildberries, Yandex.Market, Kazan Express и Uzum.
          </p>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div
          className="p-6 bg-white rounded-2xl transition duration-500 ease-in-out "
        >
          <img src="../../../public/images/tick.svg" alt="icon" />
          <h2
            className="text-[#3F4685] font-semibold text-[18px] md:text-[20px] mt-4"
          >
            Авто-уведомления клиенту в Телеграм
          </h2>
          <p
            className="font-normal text-[15px] md:text-[17px] text-[#242424] mt-2"
          >
            Менеджеру не нужно писать отчёты и высылать документы. SkladBot
            отправляет счета, КП, накладные и уведомления о статусе работы в
            Телеграм-группу с клиентом. 
          </p>
        </div>

        <div
          className="p-6 bg-white rounded-2xl transition duration-500 ease-in-out "
        >
          <img src="../../../public/images/tick.svg" alt="icon" />
          <h2
            className="text-[#3F4685] font-semibold text-[18px] md:text-[20px] mt-4"
          >
            Настройка прав клиента 
          </h2>
          <p
            className="font-normal text-[15px] md:text-[17px] text-[#242424] mt-2"
          >
            Директор склада может задать права клиента в системе. Например, на
            возможность редактирования заявок или право на создание
            комплектации.
          </p>
        </div>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5"
      >
        <div
          className="p-6  bg-white rounded-2xl transition duration-500 ease-in-out "
        >
          <img src="../../../public/images/tick.svg" alt="icon" />
          <h2
            className="text-[#3F4685] font-semibold text-[18px] md:text-[20px] mt-5"
          >
            Объединение юрлиц клиента
          </h2>
          <p
            className="font-normal text-[15px] md:text-[17px] text-[#242424] mt-5"
          >
            SkladBot позволяет связать юрлиц клиента. После этого одно юрлицо
            сможет передавать номинальный остаток и управлять товарами другого. 
          </p>
        </div>

        <div
          className="p-6 bg-white rounded-2xl transition duration-500 ease-in-out "
        >
          <img src="../../../public/images/tick.svg" alt="icon" />
          <h2
            className="text-[#3F4685] font-semibold text-[18px] md:text-[20px] mt-5"
          >
            Учёт расходных материалов
          </h2>
          <p
            className="font-normal text-[15px] md:text-[17px] text-[#242424] mt-5"
          >
            SkladBot посчитает стоимость упаковки и других расходников для
            каждой услуги, а также рассчитает себестоимость услуг. 
          </p>
        </div>

        <div
          className="p-6 bg-white rounded-2xl transition duration-500 ease-in-out "
        >
          <img src="../../../public/images/tick.svg" alt="icon" />
          <h2
            className="text-[#3F4685] font-semibold text-[18px] md:text-[20px] mt-5"
          >
            Массовая рассылка по клиентам
          </h2>
          <p
            className="font-normal text-[15px] md:text-[17px] text-[#242424] mt-5"
          >
            Можно поздравить клиентов с праздником или сообщить об акции.
            Сообщение придёт в Телеграм-группу. 
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>
