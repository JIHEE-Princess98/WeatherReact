import Grid from "@mui/material/Grid";
import {Skeleton} from "../../layout/Layout.jsx";
import ThermostatIcon from '@mui/icons-material/Thermostat';
import AirIcon from "@mui/icons-material/Air";
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import {darkTheme} from "../../theme.js";
import {Box} from "@mui/material";

const iconStyle = {fontSize: 30, color: darkTheme.palette.text.trans}
export const TodayAirBox = () => {
    const airItem = [
        {
            index : 1,
            name: 'Real Feel',
            value: 30,
            valueItem: '℃',
            icon: <ThermostatIcon sx={iconStyle}/>
        },
        {
            index: 2,
            name: 'wind',
            value: 0.2,
            valueItem: 'km/h',
            icon: <AirIcon sx={iconStyle}/>
        },
        {
            index: 3,
            name: "Chance of rain",
            value: 0,
            valueItem: '%',
            icon: <WaterDropIcon sx={iconStyle}/>
        },
        {
            index: 4,
            name: "UV Index",
            value: 3,
            valueItem: '',
            icon: <Brightness7Icon sx={iconStyle}/>
        }
    ]


    return(
        <div>
            <Grid container spacing={1} sx={{padding: 1}}>
                {
                    airItem.map((item) => (
                        <Grid item xs={6}>
                            <Skeleton height={100}>
                                <Box sx={{display: 'flex', alignItems: 'center'}}>
                                    {item.icon}
                                    <span style={{marginLeft: 8, color: iconStyle.color}}>{item.name}</span>
                                </Box>
                                    <p style={{marginLeft: 39,
                                        marginTop: 10,
                                        fontSize: 25,
                                        fontWeight: 'bold'
                                    }}>
                                        {item.value} {item.valueItem}
                                    </p>
                            </Skeleton>

                        </Grid>
                    ))
                }

            </Grid>
        </div>
    )
}