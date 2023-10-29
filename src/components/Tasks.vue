<script setup lang="ts">
import { computed, ref } from 'vue'
import TaskComponent from '@/components/Task.vue'
import ArrowIcon from '@/components/icons/Arrow.vue'
import type { Task } from '@/models/Task'

// props
const props = withDefaults(
  defineProps<{
    type: 'completed' | 'notCompleted' | 'backlog',
    tasks: Task[]
  }>(),
  {
    type: 'completed'
  }
)

// refs
const toggle = ref<boolean>(false)

// computed
const showTasks = computed<boolean>(() => {
  return props.type === 'completed' ? toggle.value : true
})
</script>

<template>
  <template v-if="type === 'completed'">
    <div class="flex mb-3">
      <button @click="toggle = !toggle">
        <ArrowIcon :class="{ 'rotate-90': toggle }" />
      </button>
      <div class="ml-3.5 text-bb-light-gray">{{ tasks.length }} Done</div>
    </div>
  </template>
  <template v-if="showTasks">
    <transition-group name="bounce" tag="div">
      <TaskComponent v-for="task in tasks" :task="task" :key="`${type}_${task.id}`" />
    </transition-group>
  </template>
</template>
<style scoped>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.1s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
</style>
