import { Route } from 'umi';
const access = (initialState: API.Iuser) => {
  return {
    isAdmin: initialState.role?.isAdmin,
    isEditor: initialState.role?.isEditor,
    canAccess: (route: any) => route.path !== '/user1',
  };
};

export default access;
