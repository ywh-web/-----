<script setup>
import PageIntro from '../components/PageIntro.vue'
import SectionHeading from '../components/SectionHeading.vue'
import { teamRoles } from '../data/site'

const teamMembers = [
  { name: '周婷', role: '总负责人', skill: '战略规划 + 资源整合', contribution: '负责顶层设计与多方协作生态搭建。' },
  { name: '赖茵琪', role: '项目统筹', skill: '运营管理', contribution: '负责执行计划制定与内部流程优化。' },
  { name: '杨伟宏', role: '技术负责人', skill: 'AI / AR / 区块链开发', contribution: '负责技术框架搭建与数字化升级。' },
  { name: '方滢', role: '美工', skill: '视觉设计', contribution: '负责品牌视觉升级与 IP 形象设计。' },
  { name: '陆思语', role: '答辩总负责人', skill: '内容整合与演讲呈现', contribution: '负责答辩 PPT 策划与流程统筹。' },
  { name: '郭晓怡', role: '市场运营总监', skill: '市场运营 + 数据爬取', contribution: '负责资源整合与市场机会捕捉。' },
  { name: '张心怡、肖雅琦', role: '财务经理', skill: '财务规划', contribution: '负责资金配置模型与预算体系设计。' },
  { name: '廖佳欣', role: '产品与服务设计者', skill: '市场调研 + 数据分析', contribution: '负责 700+ 份用户调研与数据可视化。' },
  { name: '李思静', role: '法务及风险评估管理者', skill: '法律合规 + 知识产权', contribution: '负责合规体系构建与知识产权战略布局。' },
  { name: '王炜丹', role: '文书策划者', skill: '信息检索 + 资料整合', contribution: '负责背景研究与资料管理体系搭建。' },
]
</script>
<template>
  <div>
    <PageIntro eyebrow="06 / TEAM & ECOSYSTEM" title="一群人，把一件事做得更远" intro="跨学科团队、非遗传承人、学术与技术顾问，共同搭起文化创新的协作网络。" image="/assets/chaozhou-6.webp" />
    <section class="section-pad"><div class="container"><SectionHeading eyebrow="COLLABORATIVE ECOLOGY" title="不是单线传承，而是共同生长" text="从工艺现场到校园、社区与文旅场景，每一种专业都为传承提供新的支点。"/><div class="team-grid"><article v-for="role in teamRoles" :key="role.symbol" class="team-card"><span class="team-symbol">{{ role.symbol }}</span><h2>{{ role.title }}</h2><p>{{ role.text }}</p><span class="card-arrow">VIEW ROLE ↗</span></article></div></div></section>
    <section class="content-expansion"><div class="container"><div class="expansion-heading"><span class="eyebrow">GUANGDONG UNIVERSITY OF FINANCE & ECONOMICS</span><h2>广东财经大学团队成员构成</h2><p>“潮韵嵌行”由广东财经大学跨年级、跨专业学生组成，团队成立于 2023 年。成员覆盖十余个专业，形成从文化研究、内容生产到技术开发、商业运营的完整协作链。</p></div><div class="metric-strip"><div><strong>10+</strong><span>覆盖智能会计、设计、技术、文旅、法学、传播等专业</span></div><div><strong>700+</strong><span>累计有效调研数据，为用户分层和产品决策提供依据</span></div><div><strong>8+</strong><span>已联动政府、社区、企业与非遗机构等合作单位</span></div><div><strong>2023</strong><span>团队成立并持续开展嵌瓷非遗创新实践</span></div></div><div class="detail-grid" style="margin-top: 14px"><article class="detail-card"><span class="detail-index">01 / 文化与文旅</span><h3>理解地方，再讲好故事</h3><p>文化旅游管理、新闻传播等成员负责田野调研、口述史整理、内容策划、短视频与品牌传播，把嵌瓷的历史语境转译成公众听得懂的内容。</p></article><article class="detail-card"><span class="detail-index">02 / 设计与创意</span><h3>把传统变成当代表达</h3><p>环境设计等成员负责视觉系统、纹样设计、空间陈列与文创开发，连接潮州建筑、色彩和吉祥题材，形成可用于产品与数字场景的创意资产。</p></article><article class="detail-card"><span class="detail-index">03 / 技术与数据</span><h3>搭建数字化工具底座</h3><p>计算机科学与技术等成员负责网站、小程序、AR 博物馆、VR 全息投屏和数据工具，让作品具备展示、交互、记录和持续更新能力。</p></article><article class="detail-card"><span class="detail-index">04 / 商业与保障</span><h3>让项目可以长期运行</h3><p>智能会计、供应链管理、法学等成员负责成本测算、采购履约、知识产权、合同风险和商业模式设计，保障文化创意能够转化为可持续服务。</p></article></div></div></section>
    <section class="content-expansion alt"><div class="container"><div class="expansion-heading"><span class="eyebrow">PEOPLE BEHIND THE PROJECT</span><h2>成员姓名与具体分工</h2><p>团队以项目制协作，每位成员既有明确岗位，也会在调研、共创、答辩和落地阶段互相支援。</p></div><div class="detail-grid"><article v-for="member in teamMembers" :key="member.name" class="detail-card"><span class="detail-index">{{ member.role }}</span><h3>{{ member.name }}</h3><p><strong>核心能力：</strong>{{ member.skill }}</p><p><strong>关键贡献：</strong>{{ member.contribution }}</p></article></div></div></section>
    <section class="content-expansion alt"><div class="container"><div class="expansion-heading"><span class="eyebrow">TEAM METHOD</span><h2>用跨学科协作，把文化变成完整方案</h2><p>从学生创意到匠人把关，再到技术实现和商业落地，每个成员都在共同项目中承担明确职责。</p></div><div class="detail-grid"><article class="detail-card"><span class="detail-index">01 / 青年团队</span><h3>把新工具带进传统</h3><p>负责内容策划、视觉设计、数据分析、数字产品和用户运营，让非遗以年轻人熟悉的方式被理解。</p></article><article class="detail-card"><span class="detail-index">02 / 匠人顾问</span><h3>守住技艺原真性</h3><p>由嵌瓷传承人提供工艺指导、作品监制、传家宝署名和培训，确保数字表达建立在真实经验上。</p></article><article class="detail-card"><span class="detail-index">03 / 外部网络</span><h3>连接学校与行业</h3><p>联动高校、技术团队、行业协会和政企资源，支持区块链存证、AI、AR、学术研究和市场推广。</p></article></div></div></section>
    <section class="content-expansion"><div class="container"><div class="expansion-heading"><span class="eyebrow">HOW WE WORK</span><h2>从三角领导到矩阵协作</h2></div><div class="detail-flow"><article><b>01 / 识别问题</b><h3>共同定义目标</h3><p>通过调研、走访和数据复盘，把文化需求转为可执行的项目命题。</p></article><article><b>02 / 组建项目组</b><h3>专业精准匹配</h3><p>根据成员专业、性格与状态进行人岗匹配，形成跨部门的动态小组。</p></article><article><b>03 / 队内审阅</b><h3>让创意可落地</h3><p>由工艺、内容、技术和商业成员共同审核，兼顾文化准确性与执行效率。</p></article><article><b>04 / 复盘成长</b><h3>把成果沉淀下来</h3><p>通过 OKR、作品归档与人才档案，把一次活动转为持续的能力和内容资产。</p></article></div></div></section>
    <section class="ecosystem-section">
      <div class="container">
        <div class="ecosystem-intro">
          <span class="eyebrow light">ONE PLATFORM / FOUR CONNECTIONS</span>
          <h2>让每一种力量，在同一个文化现场相遇</h2>
          <p>潮韵商城以数字共创平台为中心，把工艺、校园、技术与文旅资源连接起来，形成可持续的非遗活化生态。</p>
        </div>
        <div class="ecosystem">
          <div class="eco-center"><span>潮韵商城</span><small>实体 × 数字<br />共创平台</small></div>
          <div class="eco-node node-1"><b>非遗</b><small>工艺</small><em>传承人 · 工坊 · 档案</em></div>
          <div class="eco-node node-2"><b>校园</b><small>教育</small><em>研学课程 · 青年创作</em></div>
          <div class="eco-node node-3"><b>数字</b><small>技术</small><em>AI · AR · 区块链</em></div>
          <div class="eco-node node-4"><b>社区</b><small>文旅</small><em>古城打卡 · 智慧导览</em></div>
        </div>
        <div class="ecosystem-legend"><span>文化内容沉淀</span><span>青年人才参与</span><span>数字能力支撑</span><span>文旅场景转化</span></div>
      </div>
    </section>
  </div>
</template>
