import React, { ReactNode } from 'react';
interface Iprops {
  children?: ReactNode;
}
const Layout = (props: Iprops) => {
  return <>{props?.children}</>;
};

export default Layout;
