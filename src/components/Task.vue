<script setup lang="ts">
import { computed, getCurrentInstance } from 'vue'
import { useRoute } from 'vue-router'
import type { Task } from '@/models/Task'
import { useTaskStore } from '@/stores/task'
import { formatDate } from '@/utils/formatDate'
import NotCompletedActions from '@/components/NotCompletedActions.vue'
import BacklogActions from '@/components/backlog/BacklogActions.vue'
import TickIcon from '@/components/icons/Tick.vue'

// router
const route = useRoute()

// store
const store = useTaskStore()

// props
defineProps<{
  task: Task
}>()

// computed
const uniqueId = computed<string>(() => {
  return (getCurrentInstance()?.vnode?.key ?? Math.floor(Math.random() * 1000000)).toString()
})
</script>

<template>
  <div class="flex items-center mb-4">
    <input
      type="checkbox"
      :checked="task.completed"
      :id="uniqueId"
      @change="store.completeTask(task)"
      class="checked:rounded-full round-checkbox w-8 h-8 rounded-full border border-gray-300 appearance-none cursor-pointer"
    />
    <label :for="uniqueId" class="flex cursor-pointer">
      <span
        class="custom-checkbox min-w-[30px]"
        :class="{
          'border border-bb-light-gray shadow-mg after:opacity-0': !task.completed,
          'bg-bb-blue': task.completed
        }"
      >
        <TickIcon class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      </span>
      <div class="ml-2">
        <div
          class="font-bold leading-4.2 font-normal"
          :class="{
            'text-bb-black': !task.completed,
            'text-bb-dark-gray line-through': task.completed
          }"
        >
          {{ task.text }}
        </div>
        <div class="text-bb-xxs text-bb-dark-gray">{{ formatDate(task.createdAt) }}</div>
      </div>
    </label>
    <div class="ml-auto">
      <NotCompletedActions
        v-if="!task.completed && route.name === 'home'"
        @remove="store.removeTask(task.id)"
        @backlog="store.changeBacklogStatus(task)"
      />
      <BacklogActions
        v-if="task.backlog && route.name === 'backlog'"
        @click="store.changeBacklogStatus(task)"
      />
    </div>
  </div>
</template>

<style scoped>
.round-checkbox[type='checkbox'] {
  display: none;
}

.custom-checkbox {
  display: inline-block;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  position: relative;
}
</style>
