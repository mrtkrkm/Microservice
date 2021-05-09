import React from "react";
import Layout from "./Components/Layout";
import Main from "./Views/Main";
import Login from "./Views/Auth/Login";
import Register from "./Views/Auth/Register";
import AdvancedSearch from "./Views/AdvancedSearch/AdvancedSearch";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RecipeDetail from "./Components/Recipes/RecipeDetail";
import RecipeCompare from "./Views/Recipes/RecipeCompare";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        {/* <Switch> */}
        {/* <Route path="/!search"> */}
        <Layout>
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/search" exact component={AdvancedSearch} />
            <Route path="/recipe_detail" exact component={RecipeDetail} />
            <Route path="/recipe_compare" exact component={RecipeCompare} />
          </Switch>
        </Layout>
        {/* <Route path="/search" exact component={AdvancedSearch} />
        <Route path="/recipe_detail" exact component={RecipeDetail} />
        <Route path="/recipe_compare" exact component={RecipeCompare} /> */}
        {/* </Switch> */}
      </Router>
    </Provider>
  );
}

export default App;
