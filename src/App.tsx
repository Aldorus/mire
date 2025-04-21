import './App.scss'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Homepage from "./pages/Homepage.tsx";
import CaseStudy from "./pages/CaseStudy.tsx";
import Menu from "./components/Menu/Menu.tsx";
import About from "./pages/About.tsx";
import Contact from "./components/Contact/Contact.tsx";

export const ROUTE = {
  HOME: '/',
  CASE_STUDY: '/case/:slug',
  ABOUT: '/about'
}

const App = () => {
  const href = window.location.href;
  if (href.includes('/?/')) {
    window.history.replaceState({}, "", window.location.href.replace("/?/", "/"));
  }
  return <div className="App">
    <BrowserRouter>
      <Menu/>
      <div className="App__container">
        <Routes>
          <Route path={ROUTE.CASE_STUDY} element={<CaseStudy/>}></Route>
          <Route path={ROUTE.ABOUT} element={<About/>}></Route>
          <Route path={ROUTE.HOME} element={<Homepage/>}></Route>
        </Routes>
      </div>
      <Contact className="App__contact"/>
    </BrowserRouter>
  </div>
}

export default App
