<script setup lang="ts">
import BaseCard from '../components/BaseCard.vue'

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
</script>

<template>
  <div class="space-y-4">
    <BaseCard title="Calendar">
      <div class="grid grid-cols-7 gap-2 text-center text-sm">
        <div v-for="day in days" :key="day" class="p-2 bg-gray-100 rounded">
          {{ day }}
        </div>
      </div>
    </BaseCard>
  </div>
</template>
