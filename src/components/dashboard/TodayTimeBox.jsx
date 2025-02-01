import Grid from "@mui/material/Grid";
import {Skeleton} from "../../layout/Layout.jsx";
import {useRef, useState} from "react";
import {Box} from "@mui/material";
import {darkTheme} from "../../theme.js";

//icon
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

import sunny from '../../assets/images/sunny.png';
import little_cloud from '../../assets/images/little_cloud.png';
import many_cloud from '../../assets/images/many_cloud.png';
import cloud from '../../assets/images/cloud.png';
import rain from '../../assets/images/rain.png';
import rain_snow from '../../assets/images/rain_snow.png';
import snow from '../../assets/images/snow.png';
import thunder from '../../assets/images/thunder.png';
import fog from '../../assets/images/fog.png';




export const TodayTimeBox = () => {
    const [gridData, setGridData] = useState([0, 1, 2, 3, 4, 5]);
    const gridRef = useRef(null);

    const moveLeft = () => {
        if (gridRef.current) {
            gridRef.current.scrollLeft -= 100;
        }
    }

    const moveRight = () => {
        if (gridRef.current) {
            gridRef.current.scrollLeft += 100;
        }
    }

    return (
        <div>
            <Grid container spacing={1}>
                <Grid item xs={1}>
                    <Skeleton height={160} sx={{
                        cursor: "pointer",
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <ArrowCircleLeftIcon
                            sx={{cursor: 'pointer'}}
                            onClick={moveLeft}
                        />
                    </Skeleton>
                </Grid>

                <Grid
                    item
                    xs={10}
                    ref={gridRef}
                    sx={{
                        overflowX: "hidden",
                        whiteSpace: "nowrap",
                        display: 'flex',
                        scrollBehavior: "smooth",
                        "&::-webkit-scrollbar": {display: "none"},
                        "-ms-overflow-style": "none",
                        "scrollbar-width": "none",
                    }}
                >
                    {
                        gridData.map((item, index) => (
                            <Box sx={{width: 700}}>
                                <Skeleton
                                    key={index}
                                    height={160}
                                    sx={{
                                        width: 120,
                                        ml: 0.5,
                                        mr: 0.5,
                                        mt: 1,
                                        borderRadius: 0,
                                        borderRight: `1px solid ${darkTheme.palette.text.trans}`,
                                    }}>
                                    <Grid container spacing={1}>
                                        <Grid item xs={12}>
                                            <Skeleton height={30} sx={{
                                                // backgroundColor: darkTheme.palette.action.hover,
                                                color: darkTheme.palette.text.trans,
                                                padding: 1,
                                                fontSize: 11,
                                                textAlign: 'center'
                                            }}>
                                                AM {index+1}:00
                                            </Skeleton>
                                        </Grid>

                                        <Grid item xs={12}>
                                            <Skeleton height={60} sx={{textAlign: 'center'}}>
                                                <img
                                                    src={snow}
                                                    alt="sunny"
                                                    style={{
                                                        width: '40%',
                                                        marginTop: 5
                                                    }}
                                                />
                                            </Skeleton>
                                        </Grid>

                                        <Grid item xs={12}>
                                            <Skeleton height={45} sx={{
                                                color: darkTheme.palette.text.primary,
                                                padding: 1,
                                                fontSize: 20,
                                                textAlign: 'center'
                                            }}>
                                                -3℃
                                            </Skeleton>

                                        </Grid>
                                    </Grid>

                                </Skeleton>
                            </Box>
                        ))
                    }
                </Grid>

                <Grid item xs={1}>
                    <Skeleton height={160} sx={{
                        cursor: "pointer",
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <ArrowCircleRightIcon
                            sx={{cursor: 'pointer'}}
                            onClick={moveRight}
                        />
                    </Skeleton>
                </Grid>
            </Grid>
        </div>
    )
}