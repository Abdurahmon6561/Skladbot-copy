<template>
  <div>
    <div class="flex justify-center mt-[170px] sm:mt-[100px] md:mt-[120px] lg:mt-[170px] px-4 sm:px-8">
      <div>
        <h1 class="font-semibold text-[30px] sm:text-[35px] md:text-[40px] lg:text-[40px] text-center">
          Возможности
        </h1>
        <div class="mt-[30px] sm:mt-[40px] md:mt-[50px] flex flex-wrap gap-4 sm:gap-3 md:gap-4 lg:gap-4">
          <button
            v-for="(buttonText, index) in ['Калькулятор услуг', 'Личный кабинет']"
            :key="index"
            class="p-3 rounded-2xl font-normal shadow bg-white hover:text-white hover:bg-[#3C57FF] duration-150 transition ease-in-out sm:p-2 md:p-3 lg:p-3 lg:rounded-2xl lg:font-normal lg:shadow lg:bg-white lg:hover:text-white lg:hover:bg-[#3C57FF] lg:duration-150 lg:transition lg:ease-in-out"
          >
            {{ buttonText }}
          </button>
        </div>
        <div className="bg-white mt-6 rounded-2xl flex flex-col sm:w-full md:w-full lg:w-[1159px] lg:ml-0 lg:px-4 sm:flex-col md:flex-col lg:flex-row">
            <div className="ml-[20px] sm:ml-[20px] md:ml-[30px] lg:ml-[52px]">
              <h2 className="font-bold text-[18px] sm:text-[20px] md:text-[22px] lg:text-[22px] mt-[60px] sm:mt-[70px] md:mt-[80px] lg:mt-[80px]">
                Калькулятор услуг
              </h2>
              <p className="w-full sm:w-[350px] md:w-[400px] lg:w-[405px] font-normal text-[16px] sm:text-[18px] md:text-[18px] lg:text-[18px] mt-[50px] sm:mt-[80px] md:mt-[90px] lg:mt-[30px]">
                В SkladBot удобно формировать КП и выставлять счета. Достаточно один раз добавить список услуг с ценами. Для разных клиентов можно задать разные цены, а также скидки и надбавки.

              </p>

            </div>
            <img
              src="../../../public/images/clients-possib.svg"
              alt="image"
              className="mr-[-2px] lg:ml-[125px] mb-[-1px] sm:mr-[-2px] sm:mb-[-1px] md:mr-[-2px] md:mb-[-1px] lg:mr-[-2px] lg:mb-[-1px] w-full sm:w-full md:w-full lg:w-[50%] mt-4 sm:mt-6 md:mt-8 lg:mt-0"
            />
          </div>
      </div>
    </div>

    <Cards />
  </div>
</template>

<script setup>
import Cards from "./PossibilitiesCards.vue";
</script>
