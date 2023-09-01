import { useContext } from "react";
import { UserContext } from "../Context/Context";
import { Navigate, Outlet } from "react-router-dom";


function PrivateOutlet() {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return loggedInUser.email ? <Outlet /> : <Navigate to={{
        pathname: "/login",
        state: { from: location }
      }}/>
}

export default PrivateOutlet;