import { FC, ReactNode } from 'react';
import Navbar from '../components/Navbar';
import { Container } from '@mui/material';
import Player from '@/components/Player';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container style={{ margin: '80px auto' }}>{children}</Container>
      <Player />
    </>
  );
};

export default MainLayout;
