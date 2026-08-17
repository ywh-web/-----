<script setup>
import { ref, computed } from 'vue'
import PageIntro from '../components/PageIntro.vue'
import { works } from '../data/site'
const selected = ref(works[0])
const tab = ref('story')
const tabs = [{ key: 'story', label: '故事' }, { key: 'pattern', label: '纹样' }, { key: 'asset', label: '数字凭证' }]
const tabCopy = computed(() => ({ story: '双龙守护、祥瑞相逢。作品记录了共同创作的想象，也把家族对于团聚与守望的愿望放入屋脊之上。', pattern: '以作品中的龙鳞、祥云与朱红为灵感生成的衍生色彩，适用于壁纸、海报与文创包装。', asset: '该凭证为前端概念预览，模拟展示作品 ID、时间、地理信息与内容摘要。' }[tab.value]))
</script>
<template>
  <div><PageIntro eyebrow="03 / EXPERIENCE DEMO" title="打开一份数字传家宝" intro="选择一件作品，查看它的故事、纹样与数字凭证。" image="/assets/chaozhou-2.png"/><section class="section-pad experience-section"><div class="container"><div class="demo-note"><span>DEMO</span> 当前页面为前端概念预览，暂不连接真实区块链、AR 或后端服务。</div><div class="experience-layout"><aside class="work-picker"><span class="eyebrow">WORKS / 作品选择</span><button v-for="work in works" :key="work.id" type="button" :class="{ active: selected.id === work.id }" @click="selected = work"><span>{{ work.id }}</span><strong>{{ work.title }}</strong><small>{{ work.creator }}</small></button></aside><div class="work-detail"><div class="work-image"><img :src="selected.image" :alt="selected.title"/><div class="image-stamp">潮<br /><small>韵</small></div></div><div class="work-meta"><div><span class="eyebrow">{{ selected.id }} / {{ selected.year }}</span><h2>{{ selected.title }}</h2><p>{{ selected.meaning }}</p></div><div class="pattern-dots"><i v-for="color in selected.pattern" :key="color" :style="{ background: color }"></i></div></div><div class="experience-tabs"><button v-for="item in tabs" :key="item.key" type="button" :class="{ active: tab === item.key }" @click="tab = item.key">{{ item.label }}</button></div><div class="tab-panel"><p>{{ tabCopy }}</p><div v-if="tab === 'pattern'" class="pattern-preview"><i v-for="color in selected.pattern" :key="color" :style="{ background: color }"></i><span>AI GENERATED PATTERN / 概念预览</span></div><div v-if="tab === 'asset'" class="asset-preview"><div class="fake-qr">▦</div><div><b>{{ selected.id }}-2024-CY</b><small>数字 ID · 记录于潮州 · Demo</small></div></div><button v-if="tab === 'story'" class="text-link" type="button" @click="tab = 'asset'">查看数字凭证 <span>→</span></button></div></div></div></div></section></div>
</template>
