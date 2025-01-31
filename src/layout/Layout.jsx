import {Routes, Route, useLocation} from "react-router-dom";
import Home from "../view/Home.jsx";
import Dashboard from "../view/Dashboard.jsx";
import Map from "../view/Map.jsx";
import Setting from "../view/Setting.jsx";
import {DashboardLayout} from '@toolpad/core/DashboardLayout';
import {PageContainer} from '@toolpad/core/PageContainer';
import {AppProvider} from "@toolpad/core";
import {useDispatch, useSelector} from "react-redux";
import {setDarkState} from "../features/styleSlice.js";
import {CssBaseline, IconButton, styled, ThemeProvider, Typography} from "@mui/material";
import {darkTheme, lightTheme} from "../theme.js";
import {Brightness4, Brightness7} from "@mui/icons-material";

//icon
import weatherIcon from '../assets/images/weather-icon.png';
import WaterIcon from '@mui/icons-material/Water';
import MapIcon from '@mui/icons-material/Map';
import TuneIcon from '@mui/icons-material/Tune';


const NAVIGATION = [
    {
        segment: 'Weather',
        title: 'Weather',
        icon: <WaterIcon/>,
    },
    {
        segment: 'Map',
        title: 'Map',
        icon: <MapIcon/>,
    },
    {
        segment: 'Setting',
        title: 'Setting',
        icon: <TuneIcon/>,
    }
];

export const Skeleton = styled('div')(({theme, height}) => ({
    borderRadius: theme.shape.borderRadius,
    height,
    content: '" "',
}));

function Layout() {
    const location = useLocation();

    const dispatch = useDispatch();
    const styleState = useSelector((state) => state.style);

    const toggleTheme = () => {
        dispatch(setDarkState(!styleState.darkMode));
    };

    return (
        <ThemeProvider theme={styleState.darkMode ? darkTheme : lightTheme}>
            <CssBaseline/>
            <div style={{display: "flex"}}>

                {location.pathname === "/" ? <Home/> :
                    <AppProvider
                        navigation={NAVIGATION}
                        branding={{
                            logo: <img src={weatherIcon || ""} alt="weather logo"/>,
                            title: (
                                <Typography
                                    variant="h6"
                                    sx={{color: "white", fontWeight: "bold"}} // ✅ 원하는 색상 적용
                                >
                                    WEATHER
                                </Typography>
                            ),
                        }}
                        theme={styleState.darkMode ? darkTheme : lightTheme}
                    >
                        <DashboardLayout>
                            {/* ✅ 테마 변경 버튼 추가 (우측 상단) */}
                            <div style={{position: "absolute", top: 10, right: 10}}>
                                <IconButton onClick={toggleTheme} color="inherit">
                                    {styleState.darkMode ? <Brightness7/> : <Brightness4/>}
                                </IconButton>
                            </div>

                            <PageContainer>
                                <Routes>
                                    <Route path="/" element={<Home/>}/>
                                    <Route path="/weather" element={<Dashboard/>}/>
                                    <Route path="/map" element={<Map/>}/>
                                    <Route path="/setting" element={<Setting/>}/>
                                </Routes>
                            </PageContainer>
                        </DashboardLayout>
                    </AppProvider>
                }

            </div>
        </ThemeProvider>
    )
}

export default Layout