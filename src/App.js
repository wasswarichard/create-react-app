import React, {Suspense} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store/store";
import routes from "./routes/routes";
import "./App.css"
import Home from "./components/Home/Home"
import Layout from "./components/Layout/Layout";

const  App = () => (
    <Provider store={store}>
        <Router>
           <Layout>
               <Suspense fallback={<div> Loading...</div>}>
                   <Switch>
                       {routes.map((route) => (
                           <Route
                               path={route.path}
                               component={route.component}
                               key={route.path}
                           />
                       ))}
                       <Route path="/" exact component={Home}/>
                   </Switch>
               </Suspense>
           </Layout>
        </Router>
    </Provider>
);
export default App;

