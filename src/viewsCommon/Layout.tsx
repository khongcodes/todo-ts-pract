import React from 'react';

import layoutStyles from '../styles/Layout.module.sass';

type LayoutProps = {
  children: React.ReactNode[] | React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className={layoutStyles.root}>
    {children}
    <p className={layoutStyles.copyright}>
      Kevin Hong, 2020
    </p>
  </div>
)

export default Layout