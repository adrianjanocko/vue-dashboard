<script setup lang="ts">
defineProps<{ title: string }>()
</script>

<template>
  <div class="bg-white p-6 rounded-lg shadow">
    <h2 class="text-lg font-semibold mb-2">{{ title }}</h2>
    <slot />
  </div>
</template>
