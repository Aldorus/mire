import {useEffect, useState} from "react";
import {MenuPanel} from "./components/Menu/MenuPanel.tsx";
import Menu from "./components/Menu/Menu.tsx";
import Footer from "./components/Footer/Footer.tsx";
import {Outlet, ScrollRestoration} from "react-router";

const ApplicationShell = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if(isMenuOpen && !document.body.classList.contains("hidden")) {
      document.body.classList.add("hidden")
    }
    if(!isMenuOpen && document.body.classList.contains("hidden")) {
      document.body.classList.remove("hidden")
    }
  }, [isMenuOpen]);

  return <>
    <ScrollRestoration/>

    <MenuPanel isMenuOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)}/>
    <Menu
      isMenuOpen={isMenuOpen}
      onMenuOpen={() => setIsMenuOpen(true)}
      onMenuClose={() => setIsMenuOpen(false)}
    />
    <Outlet />
    <Footer className="App__contact"/>
  </>
}
export default ApplicationShell;