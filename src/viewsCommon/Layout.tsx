import React from 'react';

type LayoutProps = {
  message: string
}

const Layout: React.FC<LayoutProps> = ({ children, message }) => (
  <div>
    {message}
    {children}
  </div>
)

export default Layout