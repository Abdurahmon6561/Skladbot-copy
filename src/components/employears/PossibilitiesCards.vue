<template>
  <div className="flex justify-center items-center mt-[100px] px-4 mb-[100px]">
    <div className="w-full max-w-7xl">
      <h1 className="font-semibold text-[32px] md:text-[40px] text-center">
          Возможности
        </h1>

      <div className="mt-5 grid grid-cols-1 lg:grid-cols-5 gap-5">
        <div
          className="p-6 bg-white rounded-2xl lg:col-span-3 transition duration-500 ease-in-out "
        >
          <img src="../../../public/images/tick.svg" alt="icon" />
          <h2
            className="text-[#3F4685] font-semibold text-[18px] md:text-[20px] mt-4"
          >
          Отделы и ограничения
          </h2>
          <p
            className="font-normal text-[15px] md:text-[17px] text-[#242424] mt-2"
          >
          Директор склада может разбить сотрудников по отделам и ограничить доступ к функционалу системы. Например, запретить создавать ячейки на складе или удалять заявки.
          </p>
        </div>

        <div
          className="p-6 bg-white rounded-2xl transition duration-500 ease-in-out lg:col-span-2 "
        >
          <img src="../../../public/images/tick.svg" alt="icon" />
          <h2
            className="text-[#3F4685] font-semibold text-[18px] md:text-[20px] mt-4"
          >
          Дни рождения
          </h2>
          <p
            className="font-normal text-[15px] md:text-[17px] text-[#242424] mt-2"
          >
          В календаре отображаются дни рождения коллег, которые указали дату. 
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
          История действий в системе
          </h2>
          <p
            className="font-normal text-[15px] md:text-[17px] text-[#242424] mt-2"
          >
          Директор может посмотреть, что и когда сотрудник делал в системе. 
          </p>
        </div>

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
          Уведомления о новой задаче придёт сотруднику в Телеграм. 
          </p>
        </div>
      </div>


    </div>
  </div>
</template>

<script setup></script>
