import Container from "../Layout/Container/Container.jsx";
import s from './Footer.module.scss';
import FooterCategory from "./FooterCategory/FooterCategory.jsx";
import FooterSocial from "./FooterSocial/FooterSocial.jsx";
import FooterContacts from "./FooterContacts/FooterContacts.jsx";
import FooterCopyright from "./footerCopyright/footerCopyright.jsx";
import FooterDevelopment from "./footerDevelopment/footerDevelopment.jsx";
const Footer = () => {
  return (

    <footer>
      <Container className={s.container}>
        <FooterCategory />
        <FooterSocial />
        <FooterContacts />
        <FooterCopyright />
        <FooterDevelopment />
      </Container>
    </footer>
  );
};

export default Footer;
