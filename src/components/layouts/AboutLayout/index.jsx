import Header from "../../Header";
import Main from "../../Main";
import Article from "../../Article";
import Partners from "../../Partners";
import Admins from "../../Admins";
import Goals from "../../Goals";
import Footer from "../../Footer";

export default function AboutLayout({ onAboutPage }) {
  return (
    <>
      <Header onAboutPage={onAboutPage} />
      <Main />
      <Article />
      <Partners />
      <Admins />
      <Goals />
      <Footer />
    </>
  );
}
