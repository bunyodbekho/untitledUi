import Header from "../../Header";
import Main from "../../Main";
import Article from "../../Article";
import Partners from "../../Partners";
import Admins from "../../Admins";
import Goals from "../../Goals";
import Footer from "../../Footer";

export default function AboutLayout({ onSetPage }) {
  return (
    <>
      <Header onSetPage={onSetPage} />
      <Main bgUrl="public/assets/images/background/about.png" />
      <Article />
      <Partners />
      <Admins />
      <Goals />
      <Footer />
    </>
  );
}
