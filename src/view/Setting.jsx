import Grid from "@mui/material/Grid2";
import {Skeleton} from "../layout/Layout.jsx";
import {darkTheme} from "../theme.js";
import {Button, ButtonGroup} from "@mui/material";
function Setting(){
    const btnOnColor = {backgroundColor: darkTheme.palette.background.paper,}
    const btnOffColor = {color: darkTheme.palette.text.trans, border: `none`}


    return(
        <div>
            <Grid container spacing={1}>
                <Grid size={{xs: 12}}>
                    <Skeleton height={90} sx={{
                        backgroundColor: darkTheme.palette.action.hover,
                        padding: 1
                    }}>
                        <h5 style={{margin: 2}}>온도</h5>
                        <ButtonGroup  fullWidth sx={{mt: 1}} variant="contained" aria-label="Basic button group">
                            <Button sx={btnOnColor}>섭씨</Button>
                            <Button variant="outlined" sx={btnOffColor}>화씨</Button>
                        </ButtonGroup>
                    </Skeleton>
                </Grid>
                <Grid size={{xs: 12}}>
                    <Skeleton height={90} sx={{
                        backgroundColor: darkTheme.palette.action.hover,
                        padding: 1
                    }}>
                        <h5 style={{margin: 2}}>풍속</h5>
                        <ButtonGroup  fullWidth sx={{mt: 1}} variant="contained" aria-label="Basic button group">
                            <Button sx={btnOnColor}>km/h</Button>
                            <Button variant="outlined" sx={btnOffColor}>풍향</Button>
                        </ButtonGroup>
                    </Skeleton>
                </Grid>

                <Grid size={{xs: 12}}>
                    <Skeleton height={90} sx={{
                        backgroundColor: darkTheme.palette.action.hover,
                        padding: 1
                    }}>
                        <h5 style={{margin: 2}}>강수량</h5>
                        <ButtonGroup  fullWidth sx={{mt: 1}} variant="contained" aria-label="Basic button group">
                            <Button sx={btnOnColor}>밀리미터</Button>
                        </ButtonGroup>
                    </Skeleton>
                </Grid>

                <Grid size={{xs: 12}}>
                    <Skeleton height={90} sx={{
                        backgroundColor: darkTheme.palette.action.hover,
                        padding: 1
                    }}>
                        <h5 style={{margin: 2}}>거리</h5>
                        <ButtonGroup  fullWidth sx={{mt: 1}} variant="contained" aria-label="Basic button group">
                            <Button sx={btnOnColor}>킬로미터</Button>
                        </ButtonGroup>
                    </Skeleton>
                </Grid>

            </Grid>
        </div>
    )
}
export default Setting;