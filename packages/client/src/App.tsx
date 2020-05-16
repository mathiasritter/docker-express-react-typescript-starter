import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { Router } from "./Router";

const App: React.FC = () => (
    <Provider store={store}>
        <Router />
    </Provider>
);

export { App };
