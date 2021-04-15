import React from 'react';
import {Route} from "react-router-dom";

import BodyTemplate from "./components/BodyTemplate/BodyTemplate"
import About from "./components/About/About"

cont BaseRouter = () => (
    <Route path="/about" component={About} />
    <Route path="/" component={BodyTemplate} />
);

export default BaseRouter;