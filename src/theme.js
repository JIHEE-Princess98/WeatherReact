import { createTheme } from "@mui/material/styles";


export const lightTheme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#1976d2",
        },
        background: {
            default: "#f6f6f8",
            paper: "#ffffff",
        },
    },
});

export const darkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#1976d2",
            contrastText: "#ffffff",
        },
        background: {
            default: "#0e131d",
            paper: "#242b3a",
        },
        text: {
            primary: "#fff",
        }
    },
});