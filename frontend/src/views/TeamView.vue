<script setup>
import PageIntro from '../components/PageIntro.vue'
import SectionHeading from '../components/SectionHeading.vue'
import { teamRoles } from '../data/site'
</script>
<template>
  <div><PageIntro eyebrow="06 / TEAM & ECOSYSTEM" title="一群人，把一件事做得更远" intro="跨学科团队、非遗传承人、学术与技术顾问，共同搭起文化创新的协作网络。" image="/assets/chaozhou-6.png"/><section class="section-pad"><div class="container"><SectionHeading eyebrow="COLLABORATIVE ECOLOGY" title="不是单线传承，而是共同生长" text="从工艺现场到校园、社区与文旅场景，每一种专业都为传承提供新的支点。"/><div class="team-grid"><article v-for="role in teamRoles" :key="role.symbol" class="team-card"><span class="team-symbol">{{ role.symbol }}</span><h2>{{ role.title }}</h2><p>{{ role.text }}</p><span class="card-arrow">VIEW ROLE ↗</span></article></div></div></section><section class="ecosystem-section"><div class="container ecosystem"><div class="eco-center"><span>潮韵商城</span><small>数字共创平台</small></div><div class="eco-node node-1">非遗<br />工艺</div><div class="eco-node node-2">校园<br />教育</div><div class="eco-node node-3">数字<br />技术</div><div class="eco-node node-4">社区<br />文旅</div></div></section></div>
</template>
