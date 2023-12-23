import Header from "../../Header";
import Footer from "../../Footer";
import Main from "../../Main";
import Goals from "../../Goals";
import Article from "../../Article";
import MainNews from "../../MainNews";
import MainServices from "../../MainServices";
import NewApproaches from "../../NewApproaches";
import MainManagement from "../../MainManagement";
import MainPark from "../../MainPark";
import Partners from "../../Partners";

export default function ActivityLayout({ onSetPage }) {
  return (
    <>
      <Header onSetPage={onSetPage} />
      <Main
        onSetPage={onSetPage}
        bgUrl="./assets/images/background/activity.jpg"
      />
      <Goals />
      <Article />
      <MainServices />
      <NewApproaches />
      <MainManagement />
      <MainPark />
      <Partners />
      <MainNews />
      <Footer />
    </>
  );
}
