import React from 'react';

import layoutStyles from '../styles/Layout.module.sass';

type LayoutProps = {
  children: React.ReactNode[] | React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className={layoutStyles.root}>
    {children}
  </div>
)

export default Layout