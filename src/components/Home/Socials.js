import { Grid } from "@mui/material"
import { socialMedia } from "../../lib/social-media"

const Socials = () => {
    return (
        <Grid item className="socials" sx={{zIndex: 1, display: "flex", alignItems: "center", padding: 2}}>
            {socialMedia.map(media => (
                <a href={media.link} key={media.alt}>
                    <div key={media.alt} style={{margin: "0 0.5em"}}>
                        <img className="social-icon" src={media.src} alt={media.alt} style={{width: media.width, height: media.height }} />
                    </div>
                </a>
            ))}
        </Grid>
    )
}

export default Socials