<template>
  <div class="mt-[110px] flex justify-center items-center px-4 sm:px-0">
    <div class="relative w-full max-w-[1024px]">
      <!-- Conditionally render Fbs_video image or video -->
      <img v-if="!isPlaying" src="/images/fbs-video.svg" alt="fbs-video" class="w-full rounded-xl" />

      <!-- Conditionally render Play button -->
      <div v-if="!isPlaying" class="absolute inset-0 flex justify-center items-center">
        <img
          src="/images/Play.svg"
          alt="play"
          class="cursor-pointer transition-transform duration-700 hover:scale-110 lg:mt-0 mt-[-200px] lg:w-[180px] w-[80px]"
          @click="handlePlayClick"
        />
      </div>

      <!-- Conditionally render the video -->
      <video v-if="isPlaying" src="/videos/presentation.mp4" controls autoPlay class="rounded-xl w-full max-h-[580px] sm:h-[580px]" />

      <!-- Bottom section with icons and labels -->
      <div class="mt-[51px] flex justify-between gap-4 sm:gap-8 flex-wrap">
        <div v-for="(item, index) in icons" :key="index" class="flex flex-col items-center justify-center w-1/4 sm:w-auto mb-4">
          <img
            :src="`/images/${item.img}`"
            :alt="item.alt"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isPlaying = ref(false);

const handlePlayClick = () => {
  isPlaying.value = true;
};

// Array for the icons and their labels
const icons = [
  { img: 'full-expres.svg', alt: 'constructor'},
  { img: 'fulfilment.svg', alt: 'Calendar'},
  { img: 'genaral-pack.svg', alt: 'Werehouse' },
  { img: 'fullsar.svg', alt: 'Fbs'},
  { img: 'doogpack.svg', alt: 'Requests' },
  { img: 'fox-box.svg', alt: 'Users'},
  { img: 'boxs.svg', alt: 'Documents' },
];
</script>

<style scoped>
/* Add any additional styles here if needed */
</style>
