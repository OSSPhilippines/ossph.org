const routes = [
  {
    path: '',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'home', component: () => import('pages/IndexPage.vue') },
      { path: 'team', name: 'team', component: () => import('pages/TeamPage.vue') },
      { path: 'projects', name: 'projects', component: () => import('pages/ProjectsPage.vue') },
      { path: 'awesome', name: 'awesome', component: () => import('pages/AwesomePage.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
