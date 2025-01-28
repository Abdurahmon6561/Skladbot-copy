<template>
  <div className="flex justify-center items-center mt-[100px] px-4 mb-[100px]">
    <div className="w-full lg:w-[1200px]">
      <!-- <h1 className="font-semibold text-[32px] md:text-[40px] text-center">
          Поддержка
        </h1> -->

      <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div
          className="p-6 bg-white rounded-2xl transition duration-500 ease-in-out  "
        >
          <img src="../../../public/images/tick.svg" alt="icon" />
          <h2
            className="text-[#3F4685] font-semibold text-[18px] md:text-[20px] mt-4"
          >
            Авто-формирование счёта
          </h2>
          <p
            className="font-normal text-[15px] md:text-[17px] text-[#242424] mt-2"
          >
            SkladBot считает объём остатков на складе и автоматически выставляет
            счета за хранение. Счёт за услуги выставляется за количество
            маркировок, вложений, отгрузок и других задач, которые выполнил
            склад. Для разных клиентов вы можете указать разную стоимость услуг.
          </p>
        </div>

        <div
          className="p-6 bg-white rounded-2xl transition duration-500 ease-in-out "
        >
          <img src="../../../public/images/tick.svg" alt="icon" />
          <h2
            className="text-[#3F4685] font-semibold text-[18px] md:text-[20px] mt-4"
          >
            Автоформирование КП
          </h2>
          <p
            className="font-normal text-[15px] md:text-[17px] text-[#242424] mt-2"
          >
            Детальное коммерческое предложение с печатью делается за пять минут
            — достаточно накликать услуги, которые запросил клиент. 
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
            Надбавки или скидки
          </h2>
          <p
            className="font-normal text-[15px] md:text-[17px] text-[#242424] mt-2"
          >
            Вы можете сделать скидку или надбавку для отдельного клиента. Они
            будут учитываться автоматически при выставлении счёта.
          </p>
        </div>

        <div
          className="p-6 bg-white rounded-2xl transition duration-500 ease-in-out "
        >
          <img src="../../../public/images/tick.svg" alt="icon" />
          <h2
            className="text-[#3F4685] font-semibold text-[18px] md:text-[20px] mt-4"
          >
            Перерасчёт услуг
          </h2>
          <p
            className="font-normal text-[15px] md:text-[17px] text-[#242424] mt-2"
          >
            Если вы передоговорились с клиентом, можно автоматически пересчитать
            количество услуг и изменить сумму счёта. 
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
            Уведомления в Телеграм
          </h2>
          <p
            className="font-normal text-[15px] md:text-[17px] text-[#242424] mt-2"
          >
            SkladBot отправит все документы в ваш чат с клиентом в <br> Телеграме —
            достаточно нажать кнопку.
          </p>
        </div>

        <div
          className="p-6 bg-white rounded-2xl transition duration-500 ease-in-out "
        >
          <img src="../../../public/images/tick.svg" alt="icon" />
          <h2
            className="text-[#3F4685] font-semibold text-[18px] md:text-[20px] mt-4"
          >
            Статус счёта
          </h2>
          <p
            className="font-normal text-[15px] md:text-[17px] text-[#242424] mt-2"
          >
            SkladBot покажет оплатил клиент счёт или нет. 
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>
