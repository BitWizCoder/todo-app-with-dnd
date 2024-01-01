import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import axios from "axios";

function Layout() {
  // axios
  //   .get("http://localhost:3000/profile")
  //   .then((res) => console.log(res.data))
  //   .catch((err) => console.log(err));

  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
}

export default Layout;
