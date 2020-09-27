import React from "react";
import Header from "../Header";
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
                <Route path="/" />
            </Switch>
        </Router>
    );
}

export default App;
