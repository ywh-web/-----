import HomeView from '../views/HomeView.vue'
import ConceptView from '../views/ConceptView.vue'
import HeirloomView from '../views/HeirloomView.vue'
import ExperienceView from '../views/ExperienceView.vue'
import StoryView from '../views/StoryView.vue'
import ValueView from '../views/ValueView.vue'
import TeamView from '../views/TeamView.vue'
import ContactView from '../views/ContactView.vue'

export default [
  { path: '/', name: 'home', component: HomeView, meta: { title: '首页' } },
  { path: '/concept', name: 'concept', component: ConceptView, meta: { title: '项目理念' } },
  { path: '/heirloom', name: 'heirloom', component: HeirloomView, meta: { title: '嵌瓷数字传家宝' } },
  { path: '/experience', name: 'experience', component: ExperienceView, meta: { title: '数字化体验' } },
  { path: '/story', name: 'story', component: StoryView, meta: { title: '非遗故事' } },
  { path: '/value', name: 'value', component: ValueView, meta: { title: '项目价值' } },
  { path: '/team', name: 'team', component: TeamView, meta: { title: '团队与生态' } },
  { path: '/contact', name: 'contact', component: ContactView, meta: { title: '合作咨询' } },
]
