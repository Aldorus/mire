import './App.scss'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Homepage from "./pages/Homepage.tsx";
import Project from "./pages/Project.tsx";
import Menu from "./components/Menu/Menu.tsx";

const App = () => <BrowserRouter basename="/mire">
  <Menu/>
  <Routes >
    <Route path="/" element={<Homepage />}></Route>
    <Route path="/projects/:slug" element={<Project />}></Route>
  </Routes>
</BrowserRouter>

export default App
