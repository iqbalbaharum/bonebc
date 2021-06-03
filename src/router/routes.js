import MainLayout from './../layouts/MainLayout'

const routes = [
  {
    path: '/',
    component: MainLayout,
    meta: {
      access: 'public'
    },
    children: [
      {
        path: '/public',
        meta: {
          title: '',
          position: '',
          icon: '',
          roles: []
        },
        component: () => import('src/pages/Index.vue')
      },
      {
        path: '/services',
        meta: {
          title: 'RD Services',
          position: 'header',
          icon: '',
          roles: []
        },
        component: () => import('src/pages/Services.vue')
      },
      {
        path: '/launchpad',
        meta: {
          title: 'RD Launchpad',
          position: 'header',
          icon: '',
          roles: []
        },
        component: () => import('src/pages/Launchpad.vue')
      },
      {
        path: '/gems',
        meta: {
          title: 'RD Gems',
          position: 'header',
          icon: '',
          roles: []
        },
        component: () => import('src/pages/Gems.vue')
      },
      {
        path: '/family',
        meta: {
          title: 'RD Family',
          position: 'header',
          icon: '',
          roles: []
        },
        component: () => import('src/pages/Family.vue')
      },
      {
        path: '/pools',
        meta: {
          title: 'Pools',
          position: 'header',
          icon: '',
          roles: []
        },
        component: () => import('src/pages/Pools.vue')
      },
      {
        path: '/project/:id',
        meta: {
          title: '',
          position: '',
          icon: '',
          roles: []
        },
        component: () => import('src/pages/project/Index.vue')
      },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    meta: {
      access: 'public'
    },
    component: () => import('pages/Error404.vue')
  }
]

export default routes
