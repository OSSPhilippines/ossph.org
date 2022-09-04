
const routes = [
  {
    path: '/',
    redirect: '/home',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'home', name: 'home', component: () => import('pages/IndexPage.vue') },
      { path: 'team', name: 'team', component: () => import('pages/TeamPage.vue') },
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
