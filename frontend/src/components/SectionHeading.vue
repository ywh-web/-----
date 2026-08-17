<script setup>
defineProps({ eyebrow: String, title: { type: String, required: true }, text: String, align: { type: String, default: '' } })
</script>
<template><div class="section-heading" :class="align"><span v-if="eyebrow" class="eyebrow">{{ eyebrow }}</span><h2>{{ title }}</h2><p v-if="text">{{ text }}</p></div></template>
