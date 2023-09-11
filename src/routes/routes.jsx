import { Route, Routes as Switch } from "react-router-dom";
import { Home } from "../pages/Home/index";
import { Register } from "../pages/Register/index";
import { ResultRoom } from "../pages/ResultRoom/ResultRoom";

export const Routes = () => {
    return(
        <Switch>
            <Route path="/" Component={Home} />
            <Route path="/register" Component={Register} />
            <Route path="/result" Component={ResultRoom} />
        </Switch>
    )
}