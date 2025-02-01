import Grid from "@mui/material/Grid";
import {Skeleton} from "../../layout/Layout.jsx";
import {useReducer, useRef, useState} from "react";
import {Box} from "@mui/material";

//icon
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';


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
                        "&::-webkit-scrollbar": { display: "none" },
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
                                        backgroundColor: 'pink',
                                        width: 120,
                                        ml: 0.5,
                                        mr: 0.5
                                    }}/>
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