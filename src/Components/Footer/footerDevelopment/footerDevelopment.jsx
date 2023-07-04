import s from '../Footer.module.scss';

const FooterDevelopment = () => {
  return (
    <div className={s.development}>
      <ul className={s.developmentList}>
        <li>
          Designer: <a className={s.link} href="#">Anastasia Ilina</a>
        </li>
        <li>
          Developer:<a className={s.link} href="https://t.me/usman_kamayl">Usman Kamaylaev</a>
        </li>
      </ul>
    </div>
  );
};

export default FooterDevelopment;
