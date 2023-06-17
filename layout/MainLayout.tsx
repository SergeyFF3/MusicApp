import { FC, ReactNode } from 'react';
import Navbar from '../components/Navbar';
import { Container } from '@mui/material';
import Player from '@/components/Player';
import Head from 'next/head';

interface MainLayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
}

const MainLayout: FC<MainLayoutProps> = ({ children, title, description }) => {
  return (
    <>
      <Head>
        <title>{title || 'Музыкальная площадка'}</title>
        <meta
          name="description"
          content={`Музыкальная площадка. Здесь каждый может оставить свой трек и стать знаменитым. ${description}`}
        />
      </Head>
      <Navbar />
      <div
        style={{
          padding: '80px 240px',
        }}
      >
        <Container
          style={{
            margin: '0 auto',
            // padding: '80px 250px',
          }}
        >
          {children}
        </Container>
      </div>

      <Player />
    </>
  );
};

export default MainLayout;
