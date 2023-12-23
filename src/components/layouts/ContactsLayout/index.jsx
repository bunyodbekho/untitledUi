import Header from "../../Header";
import Footer from "../../Footer";
import Main from "../../Main";
import Goals from "../../Goals";
import Article from "../../Article";
import MainNews from "../../MainNews";
import MainPark from "../../MainPark";
import MainManagement from "../../MainManagement";
import MainProjects from "../../MainProjects";

export default function ContactsLayout({ onSetPage }) {
  return (
    <>
      <Header onSetPage={onSetPage} />
      <Main
        onSetPage={onSetPage}
        bgUrl="public/assets/images/background/contacts.jpg"
      />
      <Goals />
      <Article />
      <MainNews />
      <MainPark />
      <MainManagement />
      <MainProjects />
      <Footer />
    </>
  );
}
