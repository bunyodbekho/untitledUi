import Header from "../../Header";
import Footer from "../../Footer";
import Main from "../../Main";
import Goals from "../../Goals";
import Article from "../../Article";
import MainNews from "../../MainNews";
import MainServices from "../../MainServices";
import NewApproaches from "../../NewApproaches";
import Partners from "../../Partners";

export default function DevelopmentLayout({ onSetPage }) {
  return (
    <>
      <Header onSetPage={onSetPage} />
      <Main
        onSetPage={onSetPage}
        bgUrl="public/assets/images/background/development.jpg"
      />
      <MainNews />
      <MainServices />
      <NewApproaches />
      <Partners />
      <Article />
      <Footer />
    </>
  );
}
