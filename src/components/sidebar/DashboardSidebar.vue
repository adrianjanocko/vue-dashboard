<script setup lang="ts">
import NavItem from './NavItem.vue'

const navItems = [
  { icon: 'mdi:view-dashboard', label: 'Dashboard', to: '/' },
  { icon: 'mdi:folder-outline', label: 'Projects', to: '/projects' },
  { icon: 'mdi:check-outline', label: 'My Tasks', to: '/tasks' },
  { icon: 'mdi:account-group-outline', label: 'Teams', to: '/teams' },
  { icon: 'mdi:calendar', label: 'Calendar', to: '/calendar' },
]
</script>

<template>
  <aside class="w-64 bg-white border-r border-gray-200 p-6 space-y-8">
    <div class="text-2xl font-bold">Dashboard</div>
    <nav class="space-y-2">
      <NavItem
        v-for="item in navItems"
        :key="item.to"
        :icon="item.icon"
        :label="item.label"
        :to="item.to"
      />
    </nav>
  </aside>
</template>
