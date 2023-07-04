import s from '../Footer.module.scss';

const FooterCategory = () => {
  return (
    <div className={s.category}>
      <h2 className={s.categoryTitle}>Каталог</h2>
      <ul className={s.categoryList}>
        <li>
          <h3 className={s.categorySubtitle}>
            <a href="#" className={s.link}>Женщины</a>
          </h3>
          <ul className={s.categorySublist}>
            <li className="footer-category__item">
              <a href="#" className={s.link}>Бюстгальтеры</a>
            </li>
            <li className="footer-category__item">
              <a href="#" className={s.link}>Трусы</a>
            </li>
            <li className="footer-category__item">
              <a href="#" className={s.link}>Носки</a>
            </li>
            <li className="footer-category__item">
              <a href="#" className={s.link}>Халаты</a>
            </li>
            <li className="footer-category__item">
              <a href="#" className={s.link}>Термобелье</a>
            </li>
            <li className="footer-category__item">
              <a href="#" className={s.link}>Пижамы</a>
            </li>
          </ul>
        </li>
        <li className="footer-category__item">
          <h3 className={s.categorySubtitle}>
            <a href="#" className={s.link}>Мужчины</a>
          </h3>
          <ul className={s.categorySublist}>
            <li className="footer-category__item">
              <a href="#" className={s.link}>Трусы</a>
            </li>
            <li className="footer-category__item">
              <a href="#" className={s.link}>Носки</a>
            </li>
            <li className="footer-category__item">
              <a href="#" className={s.link}>Халаты</a>
            </li>
            <li className="footer-category__item">
              <a href="#" className={s.link}>Термобелье</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default FooterCategory;
