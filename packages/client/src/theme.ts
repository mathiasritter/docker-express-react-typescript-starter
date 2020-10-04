import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";

const darkTheme = responsiveFontSizes(
    createMuiTheme({
        palette: {
            type: "dark",
        },
    })
);

export { darkTheme };
