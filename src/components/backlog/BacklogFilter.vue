<script setup lang="ts">
import { useTaskStore } from '@/stores/task'
import { storeToRefs } from 'pinia'
import Input from '@/components/form/Input.vue'
import Button from '@/components/form/Button.vue'

// store
const store = useTaskStore()
const { backlogSearch } = storeToRefs(store)
</script>

<template>
  <div class="grid md:grid-cols-6 gap-x-4 gap-y-2">
    <div class="col-span-6 md:col-span-4">
      <Input v-model="backlogSearch" class="w-full" placeholder="Search" />
    </div>
    <div class="col-span-3 md:col-span-1" @click="store.sortBacklogByText()">
      <Button class="w-full min-w-max">Sort by Name</Button>
    </div>
    <div class="col-span-3 md:col-span-1">
      <Button class="w-full min-w-max" @click="store.sortBacklogByDate()">Sort by Date</Button>
    </div>
  </div>
</template>
