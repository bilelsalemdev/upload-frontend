
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import AllFiles from "./pages/AllFiles";
import Archived from "./pages/Archived";
import Home from "./pages/Home";
import Starred from "./pages/Starred";

export default function App() {
 const { authenticated } = useSelector((store) => store.userAuthentication);
  if (!authenticated) {
    return <Navigate replace to="/login" />;
  }
  return (
    <main>
      <AllFiles />
      <Archived />
      <Home />
      <Starred />
    </main>
  );
}
