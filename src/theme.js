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
        typography: {
            fontFamily: 'SCDeram4, Arial, sans-serif', // 기본 폰트 설정
            h1: {
                fontFamily: 'SCDeram4, sans-serif', // 특정 폰트
                fontSize: '2.5rem',
                fontWeight: 700,
            },
            body1: {
                fontSize: '1rem',
                lineHeight: 1.5,
            },
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
            trans: "rgba(255,255,255,0.5)"
        },
        typography: {
            fontFamily: 'SCDeram4, Arial, sans-serif', // 기본 폰트 설정
            h1: {
                fontFamily: 'SCDeram4, sans-serif', // 특정 폰트
                fontSize: '2.5rem',
                fontWeight: 700,
            },
            body1: {
                fontSize: '1rem',
                lineHeight: 1.5,
            },
        },
    },
});