import { useCallback, useState } from 'react';
const UserFunction = () => {
  const [user, setUser] = useState<API.Iuser>();
  const singin = useCallback((name, password) => {
    setUser({ name, password, id: 1 });
  }, []);
  const singout = useCallback(() => {
    setUser({} as API.Iuser);
  }, []);
  return {
    user,
    singin,
    singout,
  };
};

export default UserFunction;
