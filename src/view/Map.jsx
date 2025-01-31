import Grid from "@mui/material/Grid2";
import {Skeleton} from "../layout/Layout.jsx";
import {darkTheme} from "../theme.js";

function Map(){
    return(
        <div>
            <Grid container spacing={1}>
                <Grid size={{xs: 1, md: 0}}/>
                <Grid size={{xs: 10, md: 12}}>
                    <Skeleton height={800} sx={{
                        backgroundColor: darkTheme.palette.action.hover,
                    }}/>
                </Grid>
                <Grid size={{xs: 1, md: 0}}/>
            </Grid>
        </div>
    )
}
export default Map;