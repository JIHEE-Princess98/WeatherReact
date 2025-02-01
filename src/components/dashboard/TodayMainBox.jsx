import {Box, Typography} from "@mui/material";
import Grid from '@mui/material/Grid';
import {Skeleton} from "../../layout/Layout.jsx";
import {darkTheme} from "../../theme.js";

//icon
import sunny from '../../assets/images/sunny.png';
import little_cloud from '../../assets/images/little_cloud.png';
import many_cloud from '../../assets/images/many_cloud.png';
import cloud from '../../assets/images/cloud.png';
import rain from '../../assets/images/rain.png';
import rain_snow from '../../assets/images/rain_snow.png';
import snow from '../../assets/images/snow.png';
import thunder from '../../assets/images/thunder.png';
import fog from '../../assets/images/fog.png';

export const TodayMainBox = () => {

    return (
        <div>
            <Grid container spacing={1}>
                {/* 자식 Grid는 item 속성을 가져야 한다 */}
                <Grid item xs={6}>
                    <Skeleton height={140}>
                        <Box sx={{padding: 1}}>
                            <Typography variant="h4" component="h2">
                                수원
                            </Typography>

                            <Typography sx={{color: darkTheme.palette.text.trans, fontSize: 11}}>
                                Chance of rain : 0%
                            </Typography>
                        </Box>
                    </Skeleton>

                    <Skeleton height={125} sx={{mt: 1}}>
                        <Typography variant="h3" component="h2" sx={{padding: 1}}>
                            -3℃
                        </Typography>
                    </Skeleton>
                </Grid>
                <Grid item xs={6}>
                    <Skeleton height={271}>
                        <img src={sunny} alt="sunny"
                             style={{
                                 width: '50%',
                                 float: 'right',
                                 marginTop: 40,
                                 marginRight: 50
                             }}/>
                    </Skeleton>
                </Grid>
            </Grid>
        </div>
    )
}