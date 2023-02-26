import React, { ReactNode } from 'react';
interface Iprops {
  children?: ReactNode;
}
const Auth = (props: Iprops) => {
  return <>{props?.children}</>;
};

export default Auth;
