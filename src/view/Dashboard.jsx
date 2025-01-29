import Grid from '@mui/material/Grid2';
import {styled} from "@mui/material";
import {darkTheme} from "../theme.js";

const Skeleton = styled('div')(({theme, height}) => ({

    borderRadius: theme.shape.borderRadius,
    height,
    content: '" "',
}));

function Dashboard() {
    return (
        <div>
            <Grid container spacing={1}>
                <Grid size={{xs: 12}}>
                    <Skeleton height={40} sx={{
                        backgroundColor: darkTheme.palette.action.hover,
                    }}/>
                </Grid>

                <Grid size={{xs: 12, md: 9}}>
                    <Grid size={12}>
                        <Skeleton height={280}></Skeleton>
                    </Grid>
                    <Grid size={12}>
                        <Skeleton height={220} sx={{
                            marginTop: 1.5,
                            backgroundColor: darkTheme.palette.action.hover,
                        }}></Skeleton>
                    </Grid>
                    <Grid size={12}>
                        <Skeleton height={280} sx={{
                            marginTop: 1.5,
                            backgroundColor: darkTheme.palette.action.hover,
                        }}></Skeleton>
                    </Grid>
                </Grid>
                <Grid size={{xs: 12, md: 3}}>
                    <Skeleton height={805} sx={{
                        backgroundColor: darkTheme.palette.action.hover,
                        marginTop: {xs: 0.5, md: 0}
                    }}/>
                </Grid>

            </Grid>
        </div>
    )
}

export default Dashboard;