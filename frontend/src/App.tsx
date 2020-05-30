import React from 'react';

import GlobalStyle from './styles/global';
import SignIn from './pages/SignIn';
// import { Container } from './styles';

const src: React.FC = () => {
  return (
    <>
      <SignIn />
      <GlobalStyle />
    </>
  );
};

export default src;
