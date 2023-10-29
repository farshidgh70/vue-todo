<script setup lang="ts">
import { computed } from 'vue'

// props
const props = withDefaults(
  defineProps<{
    disabled?: boolean
    outline?: boolean
  }>(),
  { disabled: false, outline: false }
)

// emits
const emit = defineEmits(['click'])

// computed
const classNames = computed<string[]>(() => {
  let result: string[] = ['py-2 border rounded text-bb-md font-medium']

  if (props.disabled) {
    result.push('px-3.7 bg-bb-light-gray text-white border-bb-gray')
  } else if (props.outline) {
    result.push('px-3 bg-white text-bb-blue border-bb-light-gray')
  } else {
    result.push('px-3.7 bg-bb-blue border-bb-dark-blue text-white')
  }

  return result
})
</script>

<template>
  <button @click="emit('click')" :class="classNames" :disabled="disabled">
    <slot>Add Item</slot>
  </button>
</template>
