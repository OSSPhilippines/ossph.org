
const routes = [
  {
    path: '',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'home', component: () => import('pages/IndexPage.vue') },
      { path: 'team', name: 'team', component: () => import('pages/TeamPage.vue') },
      { path: 'projects', name: 'projects', component: () => import('pages/ProjectsPage.vue') },
    ],
  },
  {
    path: '/jobs',
    component: () => import('layouts/JobsLayout.vue'),
    children: [
      { path: '', name: 'jobs', component: () => import('pages/jobs/IndexPage.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
