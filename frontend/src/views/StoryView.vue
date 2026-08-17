<script setup>
import PageIntro from '../components/PageIntro.vue'
import SectionHeading from '../components/SectionHeading.vue'
import { storyTimeline } from '../data/site'
</script>
<template>
  <div><PageIntro eyebrow="04 / INTANGIBLE HERITAGE" title="屋脊上的故事，正在继续" intro="潮州嵌瓷把地方文化塑成立体的色彩，也把一代代人的愿望安放在建筑之上。" image="/assets/chaozhou-1.png"/><section class="section-pad"><div class="container"><SectionHeading eyebrow="A LIVING CRAFT" title="看见一门工艺的时间感" text="龙、凤、花鸟、人物，不只是装饰；它们是潮州人对秩序、吉祥与生活的想象。"/><div class="timeline"> <article v-for="item in storyTimeline" :key="item.year" class="timeline-item"><div class="timeline-image"><img :src="item.image" :alt="item.title"/></div><div class="timeline-copy"><span class="timeline-year">{{ item.year }}</span><h2>{{ item.title }}</h2><p>{{ item.text }}</p></div></article></div></div></section><section class="quote-section"><div class="container"><span class="eyebrow">THE NEXT CHAPTER</span><blockquote>让年轻人不只是观看非遗，<br /><em>而是进入它、理解它，再创造它。</em></blockquote><RouterLink class="text-link" to="/experience">体验数字化共创 <span>→</span></RouterLink></div></section></div>
</template>
