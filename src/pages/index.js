import React from 'react';
import { useSiteMetadata } from '../hooks/use-queries';

const Header = () => {
  const { title, description } = useSiteMetadata();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontFamily: 'avenir'
      }}
    >
      <h1 style={{ marginBottom: 0 }}>{title}</h1>
      <p style={{ marginTop: 0, opacity: 0.5 }}>{description}</p>
    </div>
  );
};

const Layout = () => {
  return <Header />;
};

export default Layout;
