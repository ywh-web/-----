<script setup>
import PageIntro from '../components/PageIntro.vue'
import SectionHeading from '../components/SectionHeading.vue'
import { modules } from '../data/site'
</script>

<template>
  <div>
    <PageIntro eyebrow="02 / DIGITAL HEIRLOOM" title="一件作品，四重记忆" intro="实体共创嵌瓷作品 + 口述史故事包 + AIGC 纹样包 + 区块链资产包" image="/assets/chaozhou-4.webp" />
    <section class="section-pad"><div class="container formula-large"><span>实体共创嵌瓷作品</span><b>+</b><span>口述史故事包</span><b>+</b><span>AIGC 纹样包</span><b>+</b><span>区块链资产包</span><b>=</b><strong>嵌瓷数字传家宝</strong></div><div class="container feature-list"><article v-for="(item, index) in modules" :key="item.index" class="feature-row"><div class="feature-number">{{ item.index }}</div><div class="feature-copy"><span class="eyebrow">{{ item.english }}</span><h2>{{ item.title }}</h2><p>{{ item.text }}</p><p v-if="index === 0">结合 AI 配音、时间戳等方式，将文化资源转化为一份可以反复打开的私人记忆。</p><p v-else-if="index === 1">一次共创，多元使用；让嵌瓷的颜色与构图延展到现代生活。</p><p v-else>作品的时间、地理信息与资料被组织起来，形成一份清晰的数字凭证。</p></div><div class="feature-visual" :class="`feature-${index + 1}`"><span>{{ item.icon }}</span><small>数字化展示</small></div></article></div></section>
    <section class="content-expansion alt"><div class="container"><div class="expansion-heading"><span class="eyebrow">PRODUCT ARCHITECTURE</span><h2>把“传家”做成一套可使用的服务</h2><p>它不是单一商品，而是一套围绕家庭记忆、匠人贡献和数字权益设计的完整服务。用户可以从一次 DIY 体验开始，逐步升级到家庭定制、纹样授权和 AR 展示。</p></div><div class="detail-grid"><article class="detail-card"><span class="detail-index">01 / 入门引流款</span><h3>先参与，再理解</h3><p>小型嵌瓷摆件、基础数字凭证与通用智能纹样，适合散客和学生完成第一次非遗体验。</p></article><article class="detail-card"><span class="detail-index">02 / 主力盈利款</span><h3>一份家庭记忆</h3><p>中型原创成品、完整家风档案、个人纹样权益与匠人青年双署名，面向家庭和宗族传承。</p></article><article class="detail-card"><span class="detail-index">03 / 高端定制款</span><h3>一套长期资产</h3><p>大型定制装置、全域数字档案、全场景纹样授权与古城 AR 展示权限，服务院校、政府和品牌。</p></article></div></div></section>
    <section class="content-expansion"><div class="container"><div class="expansion-heading"><span class="eyebrow">HOW IT WORKS</span><h2>从第一次触摸，到长期留存</h2></div><div class="detail-flow"><article><b>STEP 01</b><h3>选择主题</h3><p>从家风、家族职业、潮州建筑或吉祥纹样中确定共创方向。</p></article><article><b>STEP 02</b><h3>匠青共创</h3><p>传承人提供技艺把关，青年完成故事整理、视觉设计和数字表达。</p></article><article><b>STEP 03</b><h3>生成权益</h3><p>作品完成后生成故事包、纹样包和唯一数字凭证，支持分享与展示。</p></article><article><b>STEP 04</b><h3>持续更新</h3><p>家族成员可以继续补充故事、迭代纹样，让传家宝随时间生长。</p></article></div></div></section>
    <section class="dark-section section-pad"><div class="container"><SectionHeading eyebrow="THE JOURNEY" title="一片瓷的数字旅程" text="从共同创作开始，到成为一份可被传承的文化资产。"/><div class="journey"><div><b>01</b><span>共同创作</span></div><i>→</i><div><b>02</b><span>故事记录</span></div><i>→</i><div><b>03</b><span>纹样生成</span></div><i>→</i><div><b>04</b><span>数字确权</span></div></div></div></section>
  </div>
</template>
