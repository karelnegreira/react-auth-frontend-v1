import { Redirect, Route } from "react-router-dom/cjs/react-router-dom.min";
import { useUser } from "./useUser";

export const PrivateRoute = props => {
    const user = useUser();
    if (!user) return <Redirect to="/login"/>

    return <Route {...props} />
}