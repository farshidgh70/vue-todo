<script setup lang="ts">
import { useTaskStore } from '@/stores/task'
import Tasks from '@/components/Tasks.vue'
import NewTask from '@/components/NewTask.vue'
import Main from '@/components/Main.vue'
import HR from '@/components/icons/HR.vue'

// stores
const store = useTaskStore()
</script>

<template>
  <Main>
    <!-- completed tasks -->
    <div class="px-3 md:px-0">
      <Tasks type="completed" :tasks="store.completedTasks" />
    </div>
    <HR v-if="store.notCompletedTasks.length" />
    <!-- not completed tasks -->
    <div class="px-3 md:px-0">
      <Tasks type="notCompleted" :tasks="store.notCompletedTasks" />
    </div>
    <!-- new task -->
    <div class="px-3 md:px-0 absolute bottom-0 pb-12 w-full bg-white">
      <NewTask />
    </div>
  </Main>
</template>
