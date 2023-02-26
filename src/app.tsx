import { RequestConfig, RunTimeLayoutConfig } from 'umi';
import { ResponseError } from 'umi-request';
import { notification } from 'antd';
import { PageLoading } from '@ant-design/pro-layout';

// src/app.ts
export async function getInitialState(): Promise<API.Iuser> {
  return Promise.resolve({
    id: 0,
    name: '',
    password: '',
    role: {
      isAdmin: true,
      isEditor: true,
    },
  });
}

const errorHandler = (error: ResponseError) => {
  notification.error({
    description: '您的网络发生异常，无法连接服务器',
    message: '网络异常',
  });
};

const authHeaderInterceptor = (url: string, options: RequestConfig) => {
  const token = localStorage.getItem('token');
  if (token !== null) {
    const authHeader = { Authorization: `Bearer ${token}`, qq: '3458029646' };
    return {
      url: `${url}`,
      options: { ...options, interceptors: true, headers: authHeader },
    };
  }
  return {
    url: `${url}`,
    options: { ...options, interceptors: true },
  };
};

const demoResponseInterceptors = (
  response: Response,
  options: RequestConfig,
) => {
  // response.headers.append('interceptors', 'yes yo');
  return response;
};

export const request: RequestConfig = {
  errorHandler,
  requestInterceptors: [authHeaderInterceptor],
  responseInterceptors: [demoResponseInterceptors],
};

//菜单
export const layout: RunTimeLayoutConfig = ({}) => {
  return {
    menu: {
      // 每当 initialState?.currentUser?.userid 发生修改时重新执行 request
      params: {
        userId: 1,
      },
      request: async (params, defaultMenuData) => {
        // initialState.currentUser 中包含了所有用户信息
        const menuData = await Promise.resolve([
          {
            path: '/product',
            name: '产品管理',
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
        ]);
        return menuData;
      },
    },
  };
};


// 加载
export const initialStateConfig = {
  loading: <PageLoading />,
};
