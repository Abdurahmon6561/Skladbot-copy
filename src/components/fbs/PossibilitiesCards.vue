<template>
  <div className="flex justify-center items-center mt-[100px] px-4">
    <div className="w-full max-w-7xl">
      <!-- <h1 className="font-semibold text-[32px] md:text-[40px] text-center">
          Поддержка
        </h1> -->

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
            Связка продуктов по баркоду
          </h2>
          <p
            className="font-normal text-[15px] md:text-[17px] text-[#242424] mt-5"
          >
            SkladBot связывает товары на разных маркетплейсах по баркоду и
            показывает общий остаток на складе.
          </p>
        </div>

        <div
          className="p-6 bg-white rounded-2xl transition duration-500 ease-in-out "
        >
          <img src="../../../public/images/tick.svg" alt="icon" />
          <h2
            className="text-[#3F4685] font-semibold text-[18px] md:text-[20px] mt-7"
          >
            Отгрузка на ПВЗ
          </h2>
          <p
            className="font-normal text-[15px] md:text-[17px] text-[#242424] mt-5"
          >
            В SkladBot можно создать поставку на пункт выдачи заказов. 
          </p>
        </div>

        <div
          className="p-6 bg-white rounded-2xl transition duration-500 ease-in-out "
        >
          <img src="../../../public/images/tick.svg" alt="icon" />
          <h2
            className="text-[#3F4685] font-semibold text-[18px] md:text-[20px] mt-7"
          >
            Комплекты
          </h2>
          <p
            className="font-normal text-[15px] md:text-[17px] text-[#242424] mt-5"
          >
            В карточку продукта можно добавить комплектующие. Например, сделать
            комплект из сковороды и крышки.
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
            Передача КИЗ по API, добавление ГТД
          </h2>
          <p
            className="font-normal text-[15px] md:text-[17px] text-[#242424] mt-2"
          >
            КИЗы можно загрузить в систему из файла или с помощью сканера. При
            создании поставки SkladBot автоматически передаст КИЗ на маркетплейс
            по API. Также можно добавить грузовую таможенную декларацию для
            Ozon.
          </p>
        </div>

        <div
          className="p-6 bg-white rounded-2xl transition duration-500 ease-in-out "
        >
          <img src="../../../public/images/tick.svg" alt="icon" />
          <h2
            className="text-[#3F4685] font-semibold text-[18px] md:text-[20px] mt-4"
          >
            Автоматический учёт КИЗов
          </h2>
          <p
            className="font-normal text-[15px] md:text-[17px] text-[#242424] mt-2"
          >
            За каждый неправильный или дублированный КИЗ — штраф от 1500 ₽.
            SkladBot ведёт учёт отсканированных КИЗов и не даёт распечатать их
            повторно. Повторная распечатка доступна только директору склада и
            сотрудникам с доступом к печати.
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
            Разделение по складам и юрлицам
          </h2>
          <p
            className="font-normal text-[15px] md:text-[17px] text-[#242424] mt-5"
          >
            Возможность отсортировать товар по складам и назначить приоритетный
            склад для отгрузки.
          </p>
        </div>

        <div
          className="p-6 bg-white rounded-2xl transition duration-500 ease-in-out "
        >
          <img src="../../../public/images/tick.svg" alt="icon" />
          <h2
            className="text-[#3F4685] font-semibold text-[18px] md:text-[20px] mt-7"
          >
            Генерация QR-кода поставки
          </h2>
          <p
            className="font-normal text-[15px] md:text-[17px] text-[#242424] mt-5"
          >
            При поставке по QR сервис автоматически сгенерирует код.
          </p>
        </div>

        <div
          className="p-6 bg-white rounded-2xl transition duration-500 ease-in-out "
        >
          <img src="../../../public/images/tick.svg" alt="icon" />
          <h2
            className="text-[#3F4685] font-semibold text-[18px] md:text-[20px] mt-7"
          >
            Проверка корректности сборки
          </h2>
          <p
            className="font-normal text-[15px] md:text-[17px] text-[#242424] mt-5"
          >
            Система автоматически проверяет собранные заказы на корректность.
            Если заказ собрали правильно, система разрешит передать его на
            доставку. 
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
            Авто-формирование листа подбора
          </h2>
          <p
            className="font-normal text-[15px] md:text-[17px] text-[#242424] mt-2"
          >
            SkladBot автоматически создаст лист подбора — останется только
            распечатать.
          </p>
        </div>

        <div
          className="p-6 bg-white rounded-2xl transition duration-500 ease-in-out "
        >
          <img src="../../../public/images/tick.svg" alt="icon" />
          <h2
            className="text-[#3F4685] font-semibold text-[18px] md:text-[20px] mt-4"
          >
            Фильтр по складам
          </h2>
          <p
            className="font-normal text-[15px] md:text-[17px] text-[#242424] mt-2"
          >
            Фильтр по складам селлера для товаров, которым требуются КИЗы. Можно
            выбрать склад для сборки в разных городах.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>
