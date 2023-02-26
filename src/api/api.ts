import { request } from 'umi';


const doLogin = async (user: API.Iuser) => {
  return await request('/api/users/login', {
    method: 'POST',
    data: user,
  });
};

export default doLogin;
