<script setup lang="ts">
import BaseCard from '../components/BaseCard.vue'
</script>

<template>
  <BaseCard title="Teams">
    <ul class="space-y-2">
      <li class="flex items-center space-x-2">
        <span class="w-3 h-3 bg-green-500 rounded-full"></span>
        <span>Development Team</span>
      </li>
      <li class="flex items-center space-x-2">
        <span class="w-3 h-3 bg-blue-500 rounded-full"></span>
        <span>Design Team</span>
      </li>
      <li class="flex items-center space-x-2">
        <span class="w-3 h-3 bg-yellow-500 rounded-full"></span>
        <span>Marketing</span>
      </li>
    </ul>
  </BaseCard>
</template>
