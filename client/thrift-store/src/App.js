import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CustomRoute from "./Navigation/CustomRoute";

import LoginPage from "./Pages/User/LoginPage";
import RestorePwordPage from "./Pages/User/RestorePwordPage";
import SignUpPage from "./Pages/User/SignUpPage";
import AllClothesPage from "./Pages/AllClothesPage";
import AllWomanClothesPage from "./Pages/Woman/AllWomanClothPage";
import WomanDressPage from "./Pages/Woman/WomanDressPage";
import WomanBlousePage from "./Pages/Woman/WomanBlousePage";
import WomanSkirtPage from "./Pages/Woman/WomanSkirtPage";
import WomanShortPage from "./Pages/Woman/WomanShortPage";
import WomanJeansPage from "./Pages/Woman/WomanJeansPage";
import AllManClothesPage from "./Pages/Man/AllManClothPage";
import ManJeansPage from "./Pages/Man/ManJeansPage";
import ManShortPage from "./Pages/Man/ManShortPage";
import ManTshirtPage from "./Pages/Man/ManTshirtPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route exact path="/restorepword" component={RestorePwordPage} />
        <CustomRoute exact path="/all" children={AllClothesPage} />
    
        <CustomRoute exact path="/woman/all" children={AllWomanClothesPage} />
        <CustomRoute exact path="/woman/dress" children={WomanDressPage} />
        <CustomRoute exact path="/woman/blouse" children={WomanBlousePage} />
        <CustomRoute exact path="/woman/skirt" children={WomanSkirtPage} />
        <CustomRoute exact path="/woman/short" children={WomanShortPage} />
        <CustomRoute exact path="/woman/jeans" children={WomanJeansPage} />

        <CustomRoute exact path="/man/all" children={AllManClothesPage} />
        <CustomRoute exact path="/man/t-shirt" children={ManTshirtPage} />
        <CustomRoute exact path="/man/short" children={ManShortPage} />
        <CustomRoute exact path="/man/jeans" children={ManJeansPage} />
      </Switch>
    </Router>
  );
}

export default App;
