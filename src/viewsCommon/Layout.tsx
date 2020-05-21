import React from 'react';

import layoutStyles from '../styles/Layout.module.sass';

type LayoutProps = {
  message: string;
  children: React.ReactNode[] | React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children, message }) => (
  <div className={layoutStyles.root}>
    {message}
    {children}
  </div>
)

export default Layout