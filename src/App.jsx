import './styles/App.css'
import {ThemeProvider, CssBaseline} from "@mui/material";
import {lightTheme, darkTheme} from "./theme";
import {Box} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {setDarkState} from "./features/styleSlice.js";
import Layout from "./layout/Layout.jsx";

function App() {
    const dispatch = useDispatch();
    const styleState = useSelector((state) => state.style);

    const toggleTheme = () => {
        dispatch(setDarkState(!styleState.darkMode));
    };
    return (
        <ThemeProvider theme={styleState.darkMode ? darkTheme : lightTheme}>
            <CssBaseline/>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                    bgcolor: "background.default",
                    color: "text.primary",
                }}
            >
                <Layout/>

                {/*<Button variant="contained" onClick={toggleTheme}>*/}
                {/*  {styleState.darkMode ? "라이트 모드로 변경" : "다크 모드로 변경"}*/}
                {/*</Button>*/}
            </Box>
        </ThemeProvider>
    )
}

export default App
