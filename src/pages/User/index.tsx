import { useModel } from 'umi';

const User = () => {
  const { initialState } = useModel('@@initialState');
  return (
    <>
      User Index
      <br />
      {initialState?.id}
      <br />
      {initialState?.name}
    </>
  );
};

export default User;
