<script setup lang="ts">
defineProps<{
  modelValue: string
}>()

const emits = defineEmits(['update:modelValue'])

// functions
const update = (e: any): void => {
  emits('update:modelValue', e.target?.value)
}
</script>

<template>
  <input
    :value="modelValue"
    @input="update"
    class="px-3.7 py-2 border border-bb-light-gray rounded text-bb-black text-bb-md"
  />
</template>
