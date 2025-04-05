<script setup lang="ts">
import DashboardHeader from './components/header/DashboardHeader.vue'
import DashboardSidebar from './components/sidebar/DashboardSidebar.vue'
</script>

<template>
  <div class="flex min-h-screen bg-gray-50">
    <DashboardSidebar />
    <main class="flex-1">
      <DashboardHeader />
      <div class="p-6">
        <RouterView />
      </div>
    </main>
  </div>
</template>
