import Header from "../../Header";
import Footer from "../../Footer";
import Main from "../../Main";
import Goals from "../../Goals";
import Article from "../../Article";
import MainNews from "../../MainNews";
import Admins from "../../Admins";
import MainProjects from "../../MainProjects";
import Partners from "../../Partners";
import MainManagement from "../../MainManagement";

export default function CareerLayout({ onSetPage }) {
  return (
    <>
      <Header onSetPage={onSetPage} />
      <Main
        onSetPage={onSetPage}
        bgUrl="public/assets/images/background/career.webp"
      />
      <Admins />
      <MainProjects />
      <Partners />
      <MainManagement />

      <Footer />
    </>
  );
}
