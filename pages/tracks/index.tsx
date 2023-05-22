import style from './traks.module.scss';
import MainLayout from '../../layout/MainLayout';

export default function Tracks() {
  return (
    <MainLayout>
      <div className={style.wrapper}>
        <div>Tracks</div>
      </div>
    </MainLayout>
  );
}
