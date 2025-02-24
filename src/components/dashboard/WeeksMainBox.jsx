import Grid from "@mui/material/Grid";
import {Skeleton} from "../../layout/Layout.jsx";
import {darkTheme} from "../../theme.js";
import sunny from '../../assets/images/sunny.png';
import little_cloud from '../../assets/images/little_cloud.png';
import many_cloud from '../../assets/images/many_cloud.png';
import cloud from '../../assets/images/cloud.png';
import rain from '../../assets/images/rain.png';
import rain_snow from '../../assets/images/rain_snow.png';
import snow from '../../assets/images/snow.png';
import thunder from '../../assets/images/thunder.png';
import fog from '../../assets/images/fog.png';
import {Box} from "@mui/material";

const item = [
    {
        index: 1,
        day: 'Today',
        weather: 'sunny',
        weatherState: 1,
        temp: '34/22'
    },
    {
        index: 2,
        day: 'Tue',
        weather: 'sunny',
        weatherState: 1,
        temp: '34/22'
    },
    {
        index: 3,
        day: 'Wed',
        weather: 'sunny',
        weatherState: 1,
        temp: '34/22'
    },
    {
        index: 4,
        day: 'Thu',
        weather: 'sunny',
        weatherState: 1,
        temp: '34/22'
    },
    {
        index: 5,
        day: 'Fri',
        weather: 'sunny',
        weatherState: 1,
        temp: '34/22'
    },
    {
        index: 6,
        day: 'Sat',
        weather: 'sunny',
        weatherState: 1,
        temp: '34/22'
    },
    {
        index: 7,
        day: 'Sun',
        weather: 'sunny',
        weatherState: 1,
        temp: '34/22'
    },
]

export const WeeksMainBox = () => {

    return (
        <div>
            <Grid container spacing={1}>
                <Grid item xs={12} sx={{ml: 1.5, mr: 1.5}}>
                    {
                        item.map((item) => (
                            <Skeleton height={100} sx={{
                                display: 'flex', alignItems: 'center',
                                borderBottom: `1px solid ${darkTheme.palette.text.trans}`
                            }}>
                                <Grid container spacing={1} sx={{}}>
                                    <Grid item xs={4} sx={{color: darkTheme.palette.text.trans}}>
                                        {item.day}
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Box sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            textAlign: 'center',
                                        }}>
                                            {
                                                item.weatherState === 1 ?
                                                    <>
                                                        <img src={snow} alt="sunny" style={{width: 30}}/>
                                                        <span style={{marginLeft: 8, fontSize: 20}}>{item.weather}</span>
                                                    </>
                                                    :
                                                    null
                                            }

                                        </Box>

                                    </Grid>
                                    <Grid item xs={4} sx={{textAlign: 'right'}}>
                                        <span style={{fontWeight: 'bold'}}>
                                            {item.temp.substring(0,2)}
                                        </span>
                                        <span>
                                             {item.temp.substring(2,5)}
                                        </span>
                                    </Grid>
                                </Grid>
                            </Skeleton>
                        ))
                    }

                </Grid>
            </Grid>
        </div>
    )
}