import { Grid } from "@mui/material"
import { useState } from "react"
import Banner from "./Banner"
import Navbar from "../Navbar/Navbar"

const Home = () => {
    const [nav,setNav] = useState(false)
    const toggleNav = (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setNav(prev => !prev)
    }
    return (
        <Grid container>
            <Navbar nav={nav} toggleNav={toggleNav} />
            <Banner toggleNav={toggleNav} />
            <div id="bgslider">
                <figure>
                    <img src="imgs/image00244.jpeg" alt="Slider" />
                    <img src="imgs/image00001.jpeg" alt="Slider" />
                    <img src="imgs/image00245.jpeg" alt="Slider" />
                    <img src="imgs/image00006.jpeg" alt="Slider" />
                    <img src="imgs/image00007.jpeg" alt="Slider" />
                </figure>
            </div>
            {/* <Grid item id="photos-wrapper">
                <img className="home-background" src="imgs/image00244.jpeg" alt="City" />
            </Grid> */}
        </Grid>
    )
}

export default Home