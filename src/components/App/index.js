import React from "react";
import Header from "../Header";
import SearchResults from "../Pages/SearchResults";
import ItemDetail from "../Pages/ItemDetail";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import "./reset.scss";
import "./normalize.scss";
import "./App.scss";

function App() {
    return (
        <Router>
            <Header/>
            <Switch>
                <Route path="/" exact/>
                <Route path="/items/" exact component={SearchResults}/>
                <Route path="/items/:id" component={ItemDetail}/>
            </Switch>
        </Router>
    );
}

export default App;
