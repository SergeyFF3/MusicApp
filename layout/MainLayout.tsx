import { FC } from 'react';
import Navbar from '../components/Navbar';
import { Container } from '@mui/material';

const MainLayout: FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container style={{ margin: '80px auto' }}>{children}</Container>
    </>
  );
};

export default MainLayout;
