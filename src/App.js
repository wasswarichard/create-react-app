import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Provider} from "react-redux";
import store from "./store/store";
import DataTable from "./utilities/DataTable/DataTable";
import Sidebar from "./components/Sidebar/Sidebar";

const  App = () => (
    <Provider store={store}>
        <Router>
            <Route path="/" exact component={Sidebar}/>
        </Router>
    </Provider>
);
export default App;

