import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/main',
    children: [
      {
        path: 'main',
        name: 'main',
        component: () => import('@/views/main/index'),
        meta: { title: '主页' }
      },
      {
        path: 'advancedFilter',
        component: () => import('@/views/advancedFilter'),
        meta: { title: '高级筛选' }
      },
      {
        path: 'communityClassify',
        component: () => import('@/views/communityClassify'),
        meta: { title: '社区分类' }
      },
      {
        path: 'homeService',
        component: () => import('@/views/homeService'),
        meta: { title: '居家上门服务' }
      },
      {
        path: 'oldClassify',
        component: () => import('@/views/oldClassify'),
        meta: { title: '老人分类' }
      },
      {
        path: 'organization',
        component: () => import('@/views/organization'),
        meta: { title: '机构' }
      },
      {
        path: 'organizeVolunteer',
        component: () => import('@/views/organizeVolunteer'),
        meta: { title: '公益组织及志愿者' }
      },
      {
        path: 'stage',
        component: () => import('@/views/stage'),
        meta: { title: '驿站' }
      },
      {
        path: 'video',
        component: () => import('@/views/video'),
        meta: { title: '监控视频分布' }
      },
      {
        path: 'search',
        component: () => import('@/views/search'),
        meta: { title: '搜索' }
      },
      {
        path: 'revealOldman',
        component: () => import('@/views/revealOldman'),
        meta: { title: '兜底老人' }
      },
      {
        path: 'aiDetail',
        redirect: '/aiDetail/behaviorIdentify',
        component: () => import('@/views/aiDetail'),
        meta: { title: '人工智能详情' },
        children: [
          {
            name: 'behaviorIdentify',
            path: 'behaviorIdentify',
            component: () => import('@/views/aiDetail/behaviorIdentify'),
            meta: { title: '行为识别' }
          },
          {
            name: 'healthMonitor',
            path: 'healthMonitor',
            component: () => import('@/views/aiDetail/healthMonitor'),
            meta: { title: '健康监测' }
          },
          {
            name: 'rehabilitation',
            path: 'rehabilitation',
            component: () => import('@/views/aiDetail/rehabilitation'),
            meta: { title: '康复管理' }
          },
          {
            name: 'remoteDoctor',
            path: 'remoteDoctor',
            component: () => import('@/views/aiDetail/remoteDoctor'),
            meta: { title: '远程医生' }
          },
          {
            name: 'mattress',
            path: 'mattress',
            component: () => import('@/views/aiDetail/mattress'),
            meta: { title: '智能床垫' }
          },
          {
            name: 'healthManage',
            path: 'healthManage',
            component: () => import('@/views/aiDetail/healthManage'),
            meta: { title: '健康管理' }
          }
        ]
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true },
  {
    name: 'oldmanDetailPage',
    path: '/oldmanDetailPage',
    component: () => import('@/views/singleModalPages/oldmanDetailPage'),
    meta: { title: '长者详情' }
  }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
