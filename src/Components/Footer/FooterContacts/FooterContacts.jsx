import s from '../Footer.module.scss';

const FooterContacts = () => {
  return (
    <div className={s.contacts}>
      <a href="mailto:Inspired@gmail.com" className={s.link}>Inspired@gmail.com</a>
      <a href="tel:89304902620" className={s.link}>8 930 490 26 20</a>
    </div>
  );
};

export default FooterContacts;
