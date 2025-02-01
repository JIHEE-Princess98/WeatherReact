import Grid from '@mui/material/Grid2';
import {darkTheme} from "../theme.js";
import {Skeleton} from "../layout/Layout.jsx";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import {TodayMainBox} from "../components/dashboard/TodayMainBox.jsx";
import {TodayTimeBox} from "../components/dashboard/TodayTimeBox.jsx";
import {TodayAirBox} from "../components/dashboard/TodayAirBox.jsx";
import {WeeksMainBox} from "../components/dashboard/WeeksMainBox.jsx";
import {makeStyles, Typography} from "@mui/material";


function Dashboard() {

    return (
        <div>
            <Grid container spacing={1}>
                <Grid size={{xs: 12}}>
                    <Skeleton height={40} sx={{
                        backgroundColor: darkTheme.palette.action.hover,
                    }}>

                        <Paper
                            component="form"
                            sx={{ p: '2px 4px',
                                display: 'flex',
                                alignItems: 'center',
                                width: '100%',
                                height: 40
                        }}
                        >
                            <InputBase
                                sx={{ ml: 1, flex: 1 }}
                                placeholder="지역명 검색"
                                inputProps={{ 'aria-label': 'search google maps' }}
                            />
                            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                                <SearchIcon />
                            </IconButton>
                        </Paper>

                    </Skeleton>
                </Grid>

                <Grid size={{xs: 12, md: 9}}>
                    <Grid size={12}>
                        <Skeleton height={280}>
                            <TodayMainBox/>
                        </Skeleton>
                    </Grid>
                    <Grid size={12}>
                        <Skeleton height={220} sx={{
                            marginTop: 1.5,
                            backgroundColor: darkTheme.palette.action.hover,
                        }}>
                            <Typography sx={{color: darkTheme.palette.text.trans, padding: 1.5, fontSize: 11}}>
                               TODAY'S FORECAST
                            </Typography>

                            <TodayTimeBox/>
                        </Skeleton>
                    </Grid>
                    <Grid size={12}>
                        <Skeleton height={280} sx={{
                            marginTop: 1.5,
                            backgroundColor: darkTheme.palette.action.hover,
                        }}>
                            <Typography sx={{color: darkTheme.palette.text.trans, padding: 1.5, fontSize: 11}}>
                                AIR CONDITIONS
                            </Typography>
                            <TodayAirBox/>
                        </Skeleton>
                    </Grid>
                </Grid>
                <Grid size={{xs: 12, md: 3}}>
                    <Skeleton height={805} sx={{
                        backgroundColor: darkTheme.palette.action.hover,
                        marginTop: {xs: 0.5, md: 0}
                    }}>
                        <Typography sx={{color: darkTheme.palette.text.trans, padding: 1.5, fontSize: 11}}>
                            7-DAY FORECAST
                        </Typography>
                        <WeeksMainBox/>
                    </Skeleton>
                </Grid>

            </Grid>
        </div>
    )
}

export default Dashboard;