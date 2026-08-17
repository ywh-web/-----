<script setup>
defineProps({ stats: { type: Array, required: true } })
</script>
<template><div class="stats-strip"><div v-for="stat in stats" :key="stat.label" class="stat-item"><strong>{{ stat.value }}<small>{{ stat.unit }}</small></strong><span>{{ stat.label }}</span></div></div></template>
