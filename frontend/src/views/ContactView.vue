<script setup>
import { ref } from 'vue'
import PageIntro from '../components/PageIntro.vue'
import SectionHeading from '../components/SectionHeading.vue'
const form = ref({ name: '', contact: '', type: '', message: '' })
const submitted = ref(false)
const submit = () => { submitted.value = true }
</script>
<template>
  <div><PageIntro eyebrow="07 / CONTACT" title="一起，把传承做成一件当代的事" intro="如果你希望与潮韵商城一起探索非遗、科技、教育与文旅的连接，欢迎留下合作意向。" image="/assets/chaozhou-7.png"/><section class="section-pad"><div class="container contact-grid"><div><SectionHeading eyebrow="CO-CREATE WITH US" title="四种合作方向"/><div class="contact-directions"><div><b>B 端</b><span>校园研学合作</span></div><div><b>C 端</b><span>家庭传家宝体验</span></div><div><b>G 端</b><span>文旅数字化合作</span></div><div><b>B2B</b><span>纹样授权合作</span></div></div><div class="contact-note"><span class="eyebrow">CONTACT</span><p>联系方式为前端 Demo 占位，提交后不会发送真实邮件。</p></div></div><form class="contact-form" @submit.prevent="submit"><span class="eyebrow">SEND A MESSAGE</span><h2>告诉我们你的想法</h2><label>你的称呼<input v-model="form.name" required placeholder="如何称呼你？" /></label><label>联系方式<input v-model="form.contact" required placeholder="邮箱 / 手机 / 微信" /></label><label>合作方向<select v-model="form.type" required><option value="" disabled>请选择合作方向</option><option>B 端校园研学</option><option>C 端家庭体验</option><option>G 端文旅合作</option><option>B2B 纹样授权</option></select></label><label>合作留言<textarea v-model="form.message" rows="4" placeholder="简单说说你的计划"></textarea></label><button class="button button-dark" type="submit">{{ submitted ? '提交成功 · Demo' : '提交合作意向 ↗' }}</button><p v-if="submitted" class="form-success">提交成功，当前为前端 Demo。感谢你的关注。</p></form></div></section></div>
</template>
