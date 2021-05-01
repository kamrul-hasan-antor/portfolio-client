import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage/MainPage";
import Navigation from "./components/Navigation/Navigation";
function App() {
  return (
    <Router>
      <Navigation></Navigation>
      <Switch>
        <Route exact path="/">
          <MainPage></MainPage>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
