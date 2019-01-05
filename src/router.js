import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './page/home';
import A from './page/A';
import B from './page/B';

const RouteComponent = () => <Router>
            <div>
                <Route path="/" exact component={Home} />
                <Route path="/a" component={A} />
                <Route path="/b" component={B} />
            </div>
        </Router>;

export default RouteComponent;
