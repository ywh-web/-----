<script setup>
import { ref } from 'vue'
import PageIntro from '../components/PageIntro.vue'
import SectionHeading from '../components/SectionHeading.vue'
import { createContactInquiry } from '../api/contact'

const form = ref({ name: '', contact: '', type: '', message: '' })
const submitted = ref(false)
const submitting = ref(false)
const errorMessage = ref('')

const submit = async () => {
  submitted.value = false
  errorMessage.value = ''
  submitting.value = true
  try {
    await createContactInquiry(form.value)
    submitted.value = true
    form.value = { name: '', contact: '', type: '', message: '' }
  } catch (error) {
    errorMessage.value = error.message
  } finally {
    submitting.value = false
  }
}
</script>

<template>
  <div>
    <PageIntro eyebrow="07 / CONTACT" title="一起，把传承做成一件当代的事" intro="如果你希望与潮韵商城一起探索非遗、科技、教育与文旅的连接，欢迎留下合作意向。" image="/assets/chaozhou-7.webp" />
    <section class="section-pad"><div class="container contact-grid"><div><SectionHeading eyebrow="CO-CREATE WITH US" title="四种合作方向"/><div class="contact-directions"><div><b>B 端</b><span>校园研学合作</span></div><div><b>C 端</b><span>家庭传家宝体验</span></div><div><b>G 端</b><span>文旅数字化合作</span></div><div><b>B2B</b><span>纹样授权合作</span></div></div><div class="contact-note"><span class="eyebrow">CONTACT</span><p>欢迎留下合作方向与项目需求，团队将根据合作类型进行后续沟通。</p></div></div><form class="contact-form" @submit.prevent="submit"><span class="eyebrow">SEND A MESSAGE</span><h2>告诉我们你的想法</h2><label>你的称呼<input v-model="form.name" required maxlength="80" placeholder="如何称呼你？" /></label><label>联系方式<input v-model="form.contact" required maxlength="160" placeholder="邮箱 / 手机 / 微信" /></label><label>合作方向<select v-model="form.type" required><option value="" disabled>请选择合作方向</option><option value="school">B 端校园研学</option><option value="family">C 端家庭体验</option><option value="tourism">G 端文旅合作</option><option value="licensing">B2B 纹样授权</option></select></label><label>合作留言<textarea v-model="form.message" maxlength="2000" rows="4" placeholder="简单说说你的计划"></textarea></label><button class="button button-dark" type="submit" :disabled="submitting">{{ submitting ? '正在提交…' : '提交合作意向 ↗' }}</button><p v-if="submitted" class="form-success">合作意向已记录，感谢你关注潮州嵌瓷数字化传承。</p><p v-if="errorMessage" class="form-error">{{ errorMessage }}</p></form></div></section>
    <section class="content-expansion alt"><div class="container"><div class="expansion-heading"><span class="eyebrow">PARTNERSHIP PATHS</span><h2>不同伙伴，可以从不同入口开始</h2><p>资料中的四位一体商业闭环分别服务规模化研学、家庭品牌、文旅背书和长尾授权。留下意向后，我们会根据你的资源和目标匹配合作方式。</p></div><div class="detail-grid"><article class="detail-card"><span class="detail-index">B / 校园</span><h3>把非遗带进课堂</h3><p>提供分级研学课程、教具、师资、赛事和校企联名数字凭证，适配中小学与高校专业共建。</p></article><article class="detail-card"><span class="detail-index">C / 家庭</span><h3>共做一份传家宝</h3><p>从 DIY 体验、家风故事到定制摆件，支持实体作品、数字凭证和纹样权益组合。</p></article><article class="detail-card"><span class="detail-index">G / 文旅</span><h3>升级古城体验</h3><p>支持 AR 打卡、数字展厅、智慧导览和宗族档案共建，让游客在行走中理解潮州嵌瓷。</p></article></div></div></section>
    <section class="content-expansion"><div class="container"><div class="closing-panel"><div><span class="eyebrow light">LET'S BUILD THE NEXT CHAPTER</span><h3>让一次合作，留下可以继续生长的文化资产。</h3><p>无论你来自学校、家庭、品牌还是文旅机构，都可以从一个具体场景开始。</p></div><RouterLink class="button button-light" to="/experience">先看数字体验 ↗</RouterLink></div></div></section>
  </div>
</template>
