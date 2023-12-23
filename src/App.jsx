import "./scss/global.scss";
import { useState } from "react";
import AboutLayout from "./components/layouts/AboutLayout";
import MainLayout from "./components/layouts/MainLayout";
import ActivityLayout from "./components/layouts/ActivityLayout";
import CareerLayout from "./components/layouts/CareerLayout";
import DevelopmentLayout from "./components/layouts/DevelopmentLayout";
import ContactsLayout from "./components/layouts/ContactsLayout";
function App() {
  const [selectedPage, setSelectedPage] = useState("/");
  return (
    <div className="App">
      {selectedPage == "/" && <MainLayout onSetPage={setSelectedPage} />}
      {selectedPage == "/about" && <AboutLayout onSetPage={setSelectedPage} />}
      {selectedPage == "/activity" && (
        <ActivityLayout onSetPage={setSelectedPage} />
      )}
      {selectedPage == "/career" && (
        <CareerLayout onSetPage={setSelectedPage} />
      )}
      {selectedPage == "/development" && (
        <DevelopmentLayout onSetPage={setSelectedPage} />
      )}
      {selectedPage == "/contacts" && (
        <ContactsLayout onSetPage={setSelectedPage} />
      )}
    </div>
  );
}

export default App;
