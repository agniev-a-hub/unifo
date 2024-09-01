import { FC, ReactNode } from 'react';

import { Footer } from '../modules/navigation/Footer';
import { Header } from '../modules/navigation/Header';
import { Box } from '@mui/material';

type LandingLayoutProps = {
  children: ReactNode;
};

export const LandingLayout: FC<LandingLayoutProps> = (props) => {
  const { children } = props;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Header />
      {children}
      <Footer />
    </Box>
  );
};
