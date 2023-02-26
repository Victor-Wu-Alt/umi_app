import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  dynamicImport: {
    loading: '@ant-design/pro-layout/es/PageLoading',
  },
  routes,
  fastRefresh: {},
  mfsu: {},
  layout: {
    title: 'Adidas Of China',
  },
  request: {},
});
