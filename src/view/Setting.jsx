import Grid from "@mui/material/Grid2";
import {Skeleton} from "../layout/Layout.jsx";
import {darkTheme} from "../theme.js";

function Setting(){
    return(
        <div>
            <Grid container spacing={1}>
                <Grid size={{xs: 12}}>
                    <Skeleton height={150} sx={{
                        backgroundColor: darkTheme.palette.action.hover,
                    }}/>
                </Grid>
                <Grid size={{xs: 12}}>
                    <Skeleton height={150} sx={{
                        backgroundColor: darkTheme.palette.action.hover,
                    }}/>
                </Grid>
                <Grid size={{xs: 12}}>
                    <Skeleton height={150} sx={{
                        backgroundColor: darkTheme.palette.action.hover,
                    }}/>
                </Grid>
                <Grid size={{xs: 12}}>
                    <Skeleton height={150} sx={{
                        backgroundColor: darkTheme.palette.action.hover,
                    }}/>
                </Grid>
                <Grid size={{xs: 12}}>
                    <Skeleton height={150} sx={{
                        backgroundColor: darkTheme.palette.action.hover,
                    }}/>
                </Grid>
            </Grid>
        </div>
    )
}
export default Setting;