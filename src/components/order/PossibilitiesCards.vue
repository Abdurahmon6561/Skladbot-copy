<template>
  <div className="flex justify-center items-center mt-[200px] mb-[150px] px-4">
    <div className="w-full max-w-7xl">
      <h1 className="font-semibold text-[32px] md:text-[40px] text-center">
        Возможности
        </h1>

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-[40px]"
      >
        <div
          className="p-6  bg-white rounded-2xl transition duration-500 ease-in-out "
        >
          <img src="../../../public/images/tick.svg" alt="icon" />
          <h2
            className="text-[#3F4685] font-semibold text-[18px] md:text-[20px] mt-7"
          >
            Автоматический учёт КИЗов
          </h2>
          <p
            className="font-normal text-[15px] md:text-[17px] text-[#242424] mt-5"
          >
            За каждый неправильный или дублированный КИЗ — штраф от 1500 ₽.
            SkladBot ведёт учёт отсканированных КИЗов и не даёт распечатать их
            повторно. Повторная распечатка доступна только директору склада и
            сотрудникам с доступом к печати.
          </p>
        </div>

        <div
          className="p-6 bg-white rounded-2xl transition duration-500 ease-in-out "
        >
          <img src="../../../public/images/tick.svg" alt="icon" />
          <h2
            className="text-[#3F4685] font-semibold text-[18px] md:text-[20px] mt-7"
          >
            Фильтр по складам
          </h2>
          <p
            className="font-normal text-[15px] md:text-[17px] text-[#242424] mt-5"
          >
            Сотрудник склада может отфильтровать заявки на логистику и
            посмотреть с какого склада отгружают товар по заявке. 
          </p>
        </div>

        <div
          className="p-6 bg-white rounded-2xl transition duration-500 ease-in-out "
        >
          <img src="../../../public/images/tick.svg" alt="icon" />
          <h2
            className="text-[#3F4685] font-semibold text-[18px] md:text-[20px] mt-7"
          >
            Учёт расходов
          </h2>
          <p
            className="font-normal text-[15px] md:text-[17px] text-[#242424] mt-5"
          >
            SkladBot учитывает расходы на топливо и въезд при заборе товара
            водителем. 
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
            Создание поставки из системы 
          </h2>
          <p
            className="font-normal text-[15px] md:text-[17px] text-[#242424] mt-2"
          >
            SkladBot передаёт маркетплейсу дату, штрихкоды, адрес склада и тип
            поставки по API. Чтобы создать поставку, сотруднику не нужно
            заходить в личный кабинет маркеплейса.
          </p>
        </div>

        <div
          className="p-6 bg-white rounded-2xl transition duration-500 ease-in-out "
        >
          <img src="../../../public/images/tick.svg" alt="icon" />
          <h2
            className="text-[#3F4685] font-semibold text-[18px] md:text-[20px] mt-4"
          >
            Создание заявок клиентами и сотрудниками
          </h2>
          <p
            className="font-normal text-[15px] md:text-[17px] text-[#242424] mt-2"
          >
            Заявки могут создавать сотрудники склада или клиенты фулфилмента.
            Клиенту можно запретить редактирование заявок после создания. Заявки
            можно создавать вручную или загружать с помощью Excel-файла.
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
            className="text-[#3F4685] font-semibold text-[18px] md:text-[20px] mt-7"
          >
            Быстрая приёмка 
          </h2>
          <p
            className="font-normal text-[15px] md:text-[17px] text-[#242424] mt-5"
          >
            Быстрая приёмка с созданием файла ШК-коробов и шаблоном для быстрой
            отгрузки и создания поставки.
          </p>
        </div>

        <div
          className="p-6 bg-white rounded-2xl transition duration-500 ease-in-out "
        >
          <img src="../../../public/images/tick.svg" alt="icon" />
          <h2
            className="text-[#3F4685] font-semibold text-[18px] md:text-[20px] mt-7"
          >
            Печать КИЗ
          </h2>
          <p
            className="font-normal text-[15px] md:text-[17px] text-[#242424] mt-5"
          >
            Если товар пришел с КИЗами, их можно отсканировать и распечатать.
          </p>
        </div>

        <div
          className="p-6 bg-white rounded-2xl transition duration-500 ease-in-out "
        >
          <img src="../../../public/images/tick.svg" alt="icon" />
          <h2
            className="text-[#3F4685] font-semibold text-[18px] md:text-[20px] mt-7"
          >
            Учёт расходов
          </h2>
          <p
            className="font-normal text-[15px] md:text-[17px] text-[#242424] mt-5"
          >
            SkladBot считает стоимость расходов на упаковку для каждого заказа.
            Селлеру это поможет контролировать расходы, а фулфилменту выставлять
            счета клиентам. 
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>
