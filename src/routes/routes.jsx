import { Route, Routes as Switch } from "react-router-dom";
import { Home } from "../pages/Home/index";
import { Register } from "../pages/Register/index";
import { ResultRoom } from "../pages/ResultRoom/ResultRoom";
import { LearnMore } from "../pages/LearnMore/LearnMore";
import { Quotes } from "../pages/Quotes/Quotes";

export const Routes = () => {
    return(
        <Switch>
            <Route path="/" Component={Home} />
            <Route path="/register" Component={Register} />
            <Route path="/result" Component={ResultRoom} />
            <Route path="/result/learnmore" Component={LearnMore} />
            <Route path="/quotes" Component={Quotes}/>
        </Switch>
    )
}