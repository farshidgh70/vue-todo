<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router'
import HR from '@/components/icons/HR.vue'

// route
const route = useRoute()

// function
const routeClasses: (routeName: string) => string[] = (routeName) => {
  return routeName === route.name
    ? ['active', 'border-b-bb-blue', 'border-b-4', 'text-bb-black']
    : ['text-bb-dark-gray']
}
</script>

<template>
  <div class="container py-3 max-w-[812px] mx-auto h-screen relative">
    <header class="px-3 md:px-0 mb-0.5">
      <nav class="font-bold text-2xl">
        <ul class="flex">
          <li :class="routeClasses('home')" class="py-3">
            <RouterLink to="/">To Do List</RouterLink>
          </li>
          <li :class="routeClasses('backlog')" class="ml-8 py-3">
            <RouterLink to="/backlog"> Backlog </RouterLink>
          </li>
        </ul>
      </nav>
    </header>
    <HR class="mt-0" />
    <RouterView />
  </div>
</template>
