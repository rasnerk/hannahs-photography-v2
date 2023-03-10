import { Grid } from "@mui/material"
import Socials from "./Socials"

const Banner = ({ toggleNav }) => {
    return (
        <Grid item sx={{ display: "flex", justifyContent: "space-between", zIndex: 2, width: "100%"}}>
            <Grid item sx={{ display: "flex", alignItems: "center", padding: 2}} className="cursor-ev" onClick={toggleNav} >
                <img src="logo.PNG" alt="Logo" style={{height: "75px", padding: 2}} />
                <h1 className="font-a">Hannah Rasner</h1>
            </Grid>
            <Socials />
        </Grid>
    )
}

export default Banner