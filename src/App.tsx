import './App.scss'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Homepage from "./pages/Homepage.tsx";
import CaseStudy from "./pages/CaseStudy.tsx";
import Menu from "./components/Menu/Menu.tsx";
import Footer from "./components/Footer/Footer.tsx";
import {useEffect, useState} from "react";
import {MenuPanel} from "./components/Menu/MenuPanel.tsx";

export const ROUTE = {
  HOME: '/',
  CASE_STUDY: '/case/:slug',
}

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const href = window.location.href;
  if (href.includes('/?/')) {
    window.history.replaceState({}, "", window.location.href.replace("/?/", "/"));
  }

  useEffect(() => {
    if(isMenuOpen && !document.body.classList.contains("hidden")) {
      document.body.classList.add("hidden")
    }
    if(!isMenuOpen && document.body.classList.contains("hidden")) {
      document.body.classList.remove("hidden")
    }
  }, [isMenuOpen]);

  return <div className="App">
    <BrowserRouter>
      <MenuPanel isMenuOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)}/>
      <Menu
        isMenuOpen={isMenuOpen}
        onMenuOpen={() => setIsMenuOpen(true)}
        onMenuClose={() => setIsMenuOpen(false)}
      />
      <Routes>
        <Route path={ROUTE.CASE_STUDY} element={<CaseStudy/>}></Route>
        <Route path={ROUTE.HOME} element={<Homepage/>}></Route>
      </Routes>
      <Footer className="App__contact"/>
    </BrowserRouter>
  </div>
}

export default App
