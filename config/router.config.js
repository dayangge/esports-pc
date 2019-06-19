
export default [
  {
    path: '/',
    component: '../layouts/PCLayout.js',
    routes: [
      { path: '/', component: './pc', title: '首页' },
      { component: '404', title: '页面没找到' },
    ],
  },
];
