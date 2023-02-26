const routes = [
  { path: '/', redirect: './login' },
  { path: '/login', component: 'Login', layout: false },
  { path: '/index', component: './index', name: '首页' },
  {
    path: '/',
    component: '@/layouts/index',
    name: '用户',
    icon: 'crown',
    access: 'isAdmin',
    routes: [
      {
        path: '/user',
        component: 'User',
        name: '用户列表',
        access: 'isAdmin',
        wrappers: ['@/wrappers/auth.tsx'],
      },
      {
        path: '/user1',
        component: 'User',
        name: '用户列表1',
        access: 'canAccess',
        wrappers: ['@/wrappers/auth.tsx'],
      },
    ],
  },
  {
    path: '/product',
    name: '产品管理',
    icon:'smile',
    routes: [
      { path: '/product', redirect: 'product/list' },
      {
        path: '/product/list',
        name: '产品列表',
      },
      {
        path: '/product/new',
        name: '新建产品',
      },
      {
        path: '/product/:id',
        hideInMenu: true,
        name: '产品详情',
      },
      {
        path: '/product/update/:id',
        hideInMenu: true,
        name: '修改产品',
      },
    ],
  },
];
export default routes;
