import style from '@/styles/Home.module.scss';
import MainLayout from '../layout/MainLayout';

export default function Home() {
  return (
    <MainLayout>
      <div className={style.center}>
        <h2>Добро пожаловать!</h2>
        <h4>Здесь собраны лучшие треки.</h4>
      </div>
    </MainLayout>
  );
}
