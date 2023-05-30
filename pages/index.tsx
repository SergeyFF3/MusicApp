import Actions from '@/components/Actions';
import style from '@/styles/Home.module.scss';
import MainLayout from '../layout/MainLayout';

export default function Home() {
  return (
    <MainLayout>
      <h2 className="test">Добро пожаловать!</h2>
      <h4>Здесь собраны лучшие треки.</h4>
      <Actions />
    </MainLayout>
  );
}
