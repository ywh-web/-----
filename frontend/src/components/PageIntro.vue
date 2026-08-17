<script setup>
defineProps({ eyebrow: { type: String, default: 'CHAOYUN MALL' }, title: { type: String, required: true }, intro: String, image: { type: String, default: '/assets/chaozhou-1.png' } })
</script>
<template><section class="page-intro" :style="{ '--intro-image': `url(${image})` }"><div class="container page-intro-content"><span class="eyebrow">{{ eyebrow }}</span><h1>{{ title }}</h1><p v-if="intro">{{ intro }}</p></div></section></template>
