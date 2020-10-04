import React from "react";
import { store } from "./store";
import { Router } from "./Router";
import { Provider } from "react-redux";
import { ThemeProvider } from "@material-ui/styles";
import { darkTheme } from "./theme";
import { CssBaseline } from "@material-ui/core";

const App: React.FC = () => (
    <Provider store={store}>
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Router />
        </ThemeProvider>
    </Provider>
);

export { App };
