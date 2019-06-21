import PCPageRoutes from './router.config';
const path = require('path');

export default {
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      dll: true,
      routes: {
        exclude: [
          /model\.(j|t)sx?$/,
          /service\.(j|t)sx?$/,
          /models\//,
          /components\//,
          /services\//,
        ]
      },
      title: {
        defaultTitle: '亚冠电竞',
      },
      hardSource: false,
    }],
  ],
  // 路由配置
  routes: PCPageRoutes,
  history: 'hash',
}
