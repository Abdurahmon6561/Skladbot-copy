<template>
  <div>
    <div className="flex justify-center items-center mt-[150px] px-4">
      <div className="w-full max-w-7xl">
        <h1 className="font-semibold text-[32px] md:text-[40px] text-center mb-[80px]">
        Возможности
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-[40px]">
          <div className="p-6  bg-white rounded-2xl transition duration-500 ease-in-out ">
            <img src="../../../public/images/tick.svg" alt="icon" />
            <h2 className="text-[#3F4685] font-semibold text-[18px] md:text-[20px] mt-7">
              Задачи для сотрудников
            </h2>
            <p className="font-normal text-[15px] md:text-[17px] text-[#242424] mt-5">
              Менеджер может поставить задачу на сотрудника или на склад — без
              указания исполнителя. Задачи можно привязать к заявке. Менеджер
              может поставить задачу на сотрудника или на склад — без указания
              исполнителя. Задачи можно привязать к заявке.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl transition duration-500 ease-in-out ">
            <img src="../../../public/images/tick.svg" alt="icon" />
            <h2 className="text-[#3F4685] font-semibold text-[18px] md:text-[20px] mt-7">
              Автоматическое добавление
            </h2>
            <p className="font-normal text-[15px] md:text-[17px] text-[#242424] mt-5">
              В календарь автоматически попадают все задачи с датой из раздела
              «Центр заявок». Директор склада видит срок, этап и ответственного
              по каждой задаче.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl transition duration-500 ease-in-out ">
            <img src="../../../public/images/tick.svg" alt="icon" />
            <h2 className="text-[#3F4685] font-semibold text-[18px] md:text-[20px] mt-7">
              Уведомления в Телеграм
            </h2>
            <p className="font-normal text-[15px] md:text-[17px] text-[#242424] mt-5">
              Оповещения об этапах и итогах задачи приходят в Телеграм-группу.
              Календарь уведомляет о днях рождения сотрудников.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>
