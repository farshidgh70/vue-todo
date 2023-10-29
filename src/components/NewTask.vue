<script setup lang="ts">
import { ref } from 'vue'
import { useTaskStore } from '@/stores/task'
import Input from '@/components/form/Input.vue'
import Button from '@/components/form/Button.vue'

// store
const store = useTaskStore()

// refs
const text = ref<string>('')

// functions
const create = (): void => {
  store.addTask(text.value)
  text.value = ''
}
</script>

<template>
  <div class="grid grid-cols-6 gap-4">
    <Input
      type="text"
      v-model="text"
      @keypress.enter="create"
      class="col-span-4 md:col-span-5"
      placeholder="Enter your text here"
    />
    <Button @click="create" class="col-span-2 md:col-span-1" :disabled="!text.length">
      Add Item
    </Button>
  </div>
</template>
