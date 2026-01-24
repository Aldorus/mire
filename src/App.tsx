import './App.scss'
import {Route} from "react-router-dom";
import Homepage from "./pages/Homepage.tsx";
import CaseStudy from "./pages/CaseStudy.tsx";
import {createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router";
import ApplicationShell from "./ApplicationShell.tsx";

export const ROUTE = {
  HOME: '/',
  CASE_STUDY: '/case/:slug',
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<ApplicationShell />}>
        <Route path={ROUTE.CASE_STUDY} element={<CaseStudy/>}/>
        <Route path={ROUTE.HOME} element={<Homepage/>}/>
      </Route>
    </>
  )
);


const App = () => {
  const href = window.location.href;
  if (href.includes('/?/')) {
    window.history.replaceState({}, "", window.location.href.replace("/?/", "/"));
  }

  return <div className="App">
    <RouterProvider router={router}/>
  </div>
}

export default App
