<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { RouterLink } from 'vue-router'

defineProps<{
  icon: string
  label: string
  to: string
}>()
</script>

<template>
  <RouterLink
    :to="to"
    class="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-100 duration-300 transition"
    :class="{ 'bg-blue-50 text-blue-600': $route.path === to }"
  >
    <Icon :icon="icon" class="text-xl" />
    <span class="text-sm font-medium">{{ label }}</span>
  </RouterLink>
</template>
