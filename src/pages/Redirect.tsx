import {Navigate, useLocation} from "react-router-dom";

const Redirect404 = () => {
  const location = useLocation();
  return <Navigate to={location.pathname.replace("/r/", "/")}/>
}
export default Redirect404;