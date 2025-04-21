import './App.scss'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Homepage from "./pages/Homepage.tsx";
import CaseStudy from "./pages/CaseStudy.tsx";
import Menu from "./components/Menu/Menu.tsx";
import About from "./pages/About.tsx";
import CaseStudyRSI from "./pages/CaseStudyRSI.tsx";

export const ROUTE = {
  HOME: '/',
  CASE_STUDY_RSI: '/case/rsi',
  CASE_STUDY: '/case/:slug',
  ABOUT: '/about'
}

const App = () =>
  <div className="App"><BrowserRouter basename="/mire">
  <Menu/>
  <Routes >
    <Route path={ROUTE.HOME} element={<Homepage />}></Route>
    <Route path={ROUTE.CASE_STUDY_RSI} element={<CaseStudyRSI />}></Route>
    <Route path={ROUTE.CASE_STUDY} element={<CaseStudy />}></Route>
    <Route path={ROUTE.ABOUT} element={<About />}></Route>
  </Routes>
</BrowserRouter></div>

export default App
