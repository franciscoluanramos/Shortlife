import { Route, Routes as Switch } from "react-router-dom";
import { Home } from "../pages/Home";
import { Register } from "../pages/Register";
import { ResultRoom } from "../ResultRoom/ResultRoom";

export const Routes = () => {
    return(
        <Switch>
            <Route path="/" Component={Home} />
            <Route path="/register" Component={Register} />
            <Route path="/result" Component={ResultRoom} />
        </Switch>
    )
}