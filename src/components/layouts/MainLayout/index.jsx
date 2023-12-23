import Header from "../../Header";
import Footer from "../../Footer";
import MainHeader from "../../MainHeader";
import NewApproaches from "../../NewApproaches";
import MainServices from "../../MainServices";
import MainFacts from "../../MainFacts";
import MainPark from "../../MainPark";
import MainManagement from "../../MainManagement";
import MainProjects from "../../MainProjects";
import MainNews from "../../MainNews";

export default function MainLayout({ onSetPage }) {
  return (
    <>
      <Header onSetPage={onSetPage} />
      <MainHeader onSetPage={onSetPage} />
      <NewApproaches />
      <MainServices />
      <MainFacts />
      <MainPark />
      <MainManagement />
      <MainProjects />
      <MainNews />
      <Footer />
    </>
  );
}
