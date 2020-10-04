import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";
import { Example } from "./example/Example";
import { Container } from "@material-ui/core";

const Router: React.FC = () => (
    <BrowserRouter>
        <Container maxWidth="xl">
            <Switch>
                <Route path="/" component={Example} />
            </Switch>
        </Container>
    </BrowserRouter>
);

export { Router };
