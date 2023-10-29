<script setup lang="ts">
import { useTaskStore } from '@/stores/task'
import Tasks from '@/components/Tasks.vue'
import Main from '@/components/Main.vue'
import BacklogFilter from '@/components/backlog/BacklogFilter.vue'

// store
const store = useTaskStore()
</script>

<template>
  <Main>
    <div class="px-3 md:px-0 sticky top-0">
      <BacklogFilter />
    </div>
    <!-- backlog tasks -->
    <div class="px-3 md:px-0 mt-3">
      <Tasks type="backlog" :tasks="store.backlogTasks" />
    </div>
  </Main>
</template>
