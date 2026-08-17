<script setup>
import { ref } from 'vue'
import { navItems } from '../data/site'
const open = ref(false)
const closeMenu = () => { open.value = false }
</script>

<template>
  <header class="site-header"><div class="header-inner container">
    <RouterLink class="brand" to="/" @click="closeMenu"><span class="brand-mark">潮</span><span><b>潮韵商城</b><small>嵌瓷数字传家宝</small></span></RouterLink>
    <button class="menu-toggle" type="button" aria-label="打开导航" @click="open = !open"><span></span><span></span><span></span></button>
    <nav class="main-nav" :class="{ 'is-open': open }"><RouterLink v-for="item in navItems" :key="item.to" :to="item.to" @click="closeMenu">{{ item.label }}</RouterLink><RouterLink class="nav-cta" to="/contact" @click="closeMenu">合作咨询 <span>↗</span></RouterLink></nav>
  </div></header>
</template>
