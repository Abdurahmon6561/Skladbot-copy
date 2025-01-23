<template>
    <div className="flex justify-center items-center mt-[100px] px-4">
      <div className="w-full max-w-7xl">
        <h1 className="font-semibold text-[32px] md:text-[40px] text-center">
          Поддержка
        </h1> 

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-[40px]">
          <div className="p-6  bg-white rounded-2xl transition duration-500 ease-in-out ">
            <img src="../../../public/images/tick.svg" alt="icon"/>
            <h2 className="text-[#3F4685] font-semibold text-[18px] md:text-[20px] mt-7">
              Автоматическое выставление счёта 
            </h2>
            <p className="font-normal text-[15px] md:text-[17px] text-[#242424] mt-5">
              SkladBot упростит выставление счетов: система подсчитает объём
              хранения и количество услуг по каждому клиенту и выставит счёт за
              работу.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl transition duration-500 ease-in-out ">
            <img src="../../../public/images/tick.svg" alt="icon" />
            <h2 className="text-[#3F4685] font-semibold text-[18px] md:text-[20px] mt-7">
              Перенос остатков
            </h2>
            <p className="font-normal text-[15px] md:text-[17px] text-[#242424] mt-5">
              Если вы продаёте один и тот же товар с разных юрлиц, вы можете
              передавать номинальный остаток между юрлицами и в карточку товара.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl transition duration-500 ease-in-out ">
            <img src="../../../public/images/tick.svg" alt="icon" />
            <h2 className="text-[#3F4685] font-semibold text-[18px] md:text-[20px] mt-7">
              Учёт стоимости хранения
            </h2>
            <p className="font-normal text-[15px] md:text-[17px] text-[#242424] mt-5">
              Система посчитает объём и стоимость груза на складе по каждому
              клиенту.
            </p>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="p-6 bg-white rounded-2xl transition duration-500 ease-in-out ">
            <img src="../../../public/images/tick.svg" alt="icon" />
            <h2 className="text-[#3F4685] font-semibold text-[18px] md:text-[20px] mt-4">
              Календарь отгрузок
            </h2>
            <p className="font-normal text-[15px] md:text-[17px] text-[#242424] mt-2">
              Все задачи на складе отображаться в календаре. Директор склада
              видит срок, этап и ответственного.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl transition duration-500 ease-in-out ">
            <img src="../../../public/images/tick.svg" alt="icon" />
            <h2 className="text-[#3F4685] font-semibold text-[18px] md:text-[20px] mt-4">
              Интеграции
            </h2>
            <p className="font-normal text-[15px] md:text-[17px] text-[#242424] mt-2">
              Готовые интеграции с Ozon, WB, Yandex.Market, Kazan Express, Uzum,
              Tilda, Telegram, Fargo. Остальные интеграции можно сделать по API.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
          <div className="p-6  bg-white rounded-2xl transition duration-500 ease-in-out ">
            <img src="../../../public/images/tick.svg" alt="icon" />
            <h2 className="text-[#3F4685] font-semibold text-[18px] md:text-[20px] mt-7">
              Подключение сканера
            </h2>
            <p className="font-normal text-[15px] md:text-[17px] text-[#242424] mt-5">
              SkladBot поддерживает сканер штрих-кодов, обычные кольцевые
              сканеры и приложение для ТСД.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl transition duration-500 ease-in-out ">
            <img src="../../../public/images/tick.svg" alt="icon" />
            <h2 className="text-[#3F4685] font-semibold text-[18px] md:text-[20px] mt-7">
              Добавление нескольких складов
            </h2>
            <p className="font-normal text-[15px] md:text-[17px] text-[#242424] mt-5">
              В SkladBot можно добавить несколько складов на одно юрлицо и
              указать приоритетный склад для отгрузки.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl transition duration-500 ease-in-out ">
            <img src="../../../public/images/tick.svg" alt="icon" />
            <h2 className="text-[#3F4685] font-semibold text-[18px] md:text-[20px] mt-7">
              Поддержка маркировки
            </h2>
            <p className="font-normal text-[15px] md:text-[17px] text-[#242424] mt-5">
              Поддерживает сканеры и принтеров этикеток, а также маркировку
              «Честный знак». КИЗы автоматически передаются на Wildberries и
              Ozon по API.
            </p>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>

</script>
