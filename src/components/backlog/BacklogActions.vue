<script setup lang="ts">
import Button from '@/components/form/Button.vue'

const emits = defineEmits(['click'])
</script>

<template>
  <Button outline @click="emits('click')" class="px-2 py-1 text-blue-500 min-w-max">
    Move to List
  </Button>
</template>
