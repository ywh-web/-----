<script setup>
import { ref, computed } from 'vue'
import PageIntro from '../components/PageIntro.vue'
import { works } from '../data/site'

const selected = ref(works[0])
const tab = ref('story')
const tabs = [{ key: 'story', label: '故事' }, { key: 'pattern', label: '纹样' }, { key: 'asset', label: '数字凭证' }]
const tabCopy = computed(() => ({ story: '双龙守护、祥瑞相逢。作品记录了共同创作的想象，也把家族对于团聚与守望的愿望放入屋脊之上。', pattern: '以作品中的龙鳞、祥云与朱红为灵感生成的衍生色彩，适用于壁纸、海报与文创包装。', asset: '数字资产信息包括作品 ID、创作时间、记录地点与内容摘要，为作品建立清晰的文化档案。' }[tab.value]))
</script>
<template>
  <div>
    <PageIntro eyebrow="03 / DIGITAL EXPERIENCE" title="打开一份数字传家宝" intro="选择一件作品，查看它的故事、纹样与数字凭证。" image="/assets/chaozhou-2.png" />
    <section class="section-pad experience-section"><div class="container"><div class="demo-note"><span>DIGITAL EXPERIENCE</span> 展示嵌瓷数字传家宝的故事、纹样与数字资产体验流程。</div><div class="experience-layout"><aside class="work-picker"><span class="eyebrow">WORKS / 作品选择</span><button v-for="work in works" :key="work.id" type="button" :class="{ active: selected.id === work.id }" @click="selected = work"><span>{{ work.id }}</span><strong>{{ work.title }}</strong><small>{{ work.creator }}</small></button></aside><div class="work-detail"><div class="work-image"><img :src="selected.image" :alt="selected.title"/><div class="image-stamp">潮<br /><small>韵</small></div></div><div class="work-meta"><div><span class="eyebrow">{{ selected.id }} / {{ selected.year }}</span><h2>{{ selected.title }}</h2><p>{{ selected.meaning }}</p></div><div class="pattern-dots"><i v-for="color in selected.pattern" :key="color" :style="{ background: color }"></i></div></div><div class="experience-tabs"><button v-for="item in tabs" :key="item.key" type="button" :class="{ active: tab === item.key }" @click="tab = item.key">{{ item.label }}</button></div><div class="tab-panel"><p>{{ tabCopy }}</p><div v-if="tab === 'pattern'" class="pattern-preview"><i v-for="color in selected.pattern" :key="color" :style="{ background: color }"></i><span>AIGC PATTERN / 纹样设计展示</span></div><div v-if="tab === 'asset'" class="asset-preview"><div class="fake-qr">▦</div><div><b>{{ selected.id }}-2024-CY</b><small>数字 ID · 作品信息记录</small></div></div><button v-if="tab === 'story'" class="text-link" type="button" @click="tab = 'asset'">查看数字凭证 <span>→</span></button></div></div></div></div></section>
    <section class="content-expansion alt"><div class="container"><div class="expansion-heading"><span class="eyebrow">A DIGITAL STORY ROOM</span><h2>一次体验，打开四个入口</h2><p>资料调研显示，87.95% 的受访者愿意亲手制作嵌瓷，54.91% 的受访者认可 AR 等数字展示方式。因此体验页不只是展示成品，而是把观看、参与、生成和分享连成一条路径。</p></div><div class="metric-strip"><div><strong>87.95%</strong><span>愿意亲手制作嵌瓷</span></div><div><strong>83.71%</strong><span>喜欢文创产品展示</span></div><div><strong>54.91%</strong><span>接受 AR / 建模展示</span></div><div><strong>743</strong><span>有效调研样本</span></div></div></div></section>
    <section class="content-expansion"><div class="container"><div class="expansion-heading"><span class="eyebrow">OFFLINE TO ONLINE</span><h2>从古城工坊进入数字世界</h2></div><div class="detail-grid"><article class="detail-card"><span class="detail-index">01 / 工坊</span><h3>亲手完成一片瓷</h3><p>在传承人指导下完成选片、拼贴和装饰，感受嵌瓷从材料到作品的真实过程。</p></article><article class="detail-card"><span class="detail-index">02 / AR 展示</span><h3>扫描后看见工艺</h3><p>通过 AR 底座和实景导览查看作品拆解、工艺讲解与潮州建筑中的文化语境。</p></article><article class="detail-card"><span class="detail-index">03 / 社群分享</span><h3>把作品带回家</h3><p>上传家风故事、生成专属纹样，邀请家人和朋友共同完成一份可持续更新的档案。</p></article></div></div></section>
  </div>
</template>
