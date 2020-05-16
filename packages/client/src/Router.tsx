import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";
import { Example } from "./example/Example";
import Container from "react-bootstrap/Container";

const Router: React.FC = () => (
    <BrowserRouter>
        <Container>
            <Switch>
                <Route path="/" component={Example} />
            </Switch>
        </Container>
    </BrowserRouter>
);

export { Router };
