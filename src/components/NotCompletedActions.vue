<script setup lang="ts">
import Dots from '@/components/icons/Dots.vue'
import { ref, onMounted, onBeforeUnmount } from 'vue'

// refs
const show = ref<boolean>(false)
const element = ref<HTMLElement | null>(null)

// functions
const handleClickOutside = (event: MouseEvent) => {
  if (element.value && !element.value.contains(event.target as Node)) {
    show.value = false
  }
}

// emits
const emits = defineEmits(['remove', 'backlog'])

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <div class="relative" ref="element">
    <button
      @click="show = !show"
      class="bg-transparent rounded-full focus:bg-bb-chrome focus:text-black p-2"
    >
      <Dots />
    </button>
    <transition name="bounce">
      <div
        v-if="show"
        class="absolute border rounded-sm border-bb-light-gray min-w-[150px] right-10 top-0 bg-white text-bb-blue"
      >
        <ul>
          <li
            @click="emits('remove')"
            class="px-2 py-1 font-extrabold border border-b-bb-light-gray cursor-pointer hover:bg-bb-chrome"
          >
            Delete
          </li>
          <li
            @click="emits('backlog')"
            class="px-2 py-1 font-extrabold cursor-pointer hover:bg-bb-chrome"
          >
            Move to Backlog
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>
