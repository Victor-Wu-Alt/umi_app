import { Request, Response } from 'express';
import mockjs from 'mockjs';

export default {
  // 返回值可以是数组形式
  'GET /api/users': [
    { id: 1, name: 'foo' },
    { id: 2, name: 'bar' },
  ],

  // 返回值也可以是对象形式
  'GET /api/users/1': { id: 1, name: 'foo' },

  'POST /api/users/create': (req: Request, res: Response) => {
    // 添加跨域请求头
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.end('ok');
  },

  // 使用 mockjs 等三方库
  'GET /api/tags': mockjs.mock({
    'list|100': [{ name: '@city', 'value|1-100': 50, 'type|0-2': 1 }],
  }),

  'POST /api/users/login': (req: Request, res: Response) => {
    // 添加跨域请求头
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (Math.random() > 0.5) {
      res.json({
        code: 200,
      });
    } else {
      res.json({
        code: 400,
      });
    }
  },
};
