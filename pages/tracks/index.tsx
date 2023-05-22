import Navbar from '../../components/Navbar';
import style from './traks.module.scss';

export default function Tracks() {
  return (
    <>
      <Navbar />
      <div className={style.wrapper}>
        <div>Tracks</div>
      </div>
    </>
  );
}
