import "./scss/global.scss";
import { useState } from "react";
import AboutLayout from "./components/layouts/AboutLayout";
import MainLayout from "./components/layouts/MainLayout";

function App() {
  const [isAboutPage, setIsAboutPage] = useState(false);
  return (
    <div className="App">
      {!isAboutPage && <MainLayout onAboutPage={setIsAboutPage} />}
      {isAboutPage && <AboutLayout onAboutPage={setIsAboutPage} />}
    </div>
  );
}

export default App;
