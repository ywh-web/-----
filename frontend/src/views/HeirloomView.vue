<script setup>
import PageIntro from '../components/PageIntro.vue'
import SectionHeading from '../components/SectionHeading.vue'
import { modules } from '../data/site'
</script>
<template>
  <div><PageIntro eyebrow="02 / DIGITAL HEIRLOOM" title="一件作品，四重记忆" intro="实体共创嵌瓷作品 + 口述史故事包 + AIGC 纹样包 + 区块链资产包" image="/assets/chaozhou-4.png"/><section class="section-pad"><div class="container formula-large"><span>实体共创嵌瓷作品</span><b>+</b><span>口述史故事包</span><b>+</b><span>AIGC 纹样包</span><b>+</b><span>区块链资产包</span><b>=</b><strong>嵌瓷数字传家宝</strong></div><div class="container feature-list"><article v-for="(item, index) in modules" :key="item.index" class="feature-row"><div class="feature-number">{{ item.index }}</div><div class="feature-copy"><span class="eyebrow">{{ item.english }}</span><h2>{{ item.title }}</h2><p>{{ item.text }}</p><p v-if="index === 0">结合 AI 配音、时间戳等方式，将文化资源转化为一份可以反复打开的私人记忆。</p><p v-else-if="index === 1">一次共创，多元使用；让嵌瓷的颜色与构图延展到现代生活。</p><p v-else>作品的时间、地理信息与资料被组织起来，形成一份清晰的数字凭证。</p></div><div class="feature-visual" :class="`feature-${index + 1}`"><span>{{ item.icon }}</span><small>CONCEPT PREVIEW</small></div></article></div></section><section class="dark-section section-pad"><div class="container"><SectionHeading eyebrow="THE JOURNEY" title="一片瓷的数字旅程" text="从共同创作开始，到成为一份可被传承的文化资产。"/><div class="journey"><div><b>01</b><span>共同创作</span></div><i>→</i><div><b>02</b><span>故事记录</span></div><i>→</i><div><b>03</b><span>纹样生成</span></div><i>→</i><div><b>04</b><span>数字确权</span></div></div></div></section></div>
</template>
