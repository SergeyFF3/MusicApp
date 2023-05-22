import { FC } from 'react';
import Navbar from '../components/Navbar';

const MainLayout: FC = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default MainLayout;
