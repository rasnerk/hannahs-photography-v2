import { Grid } from "@mui/material"
import { socialMedia } from "../../lib/social-media"

const Socials = () => {
    const handleFocus = (id) => {
        const avail = document.querySelectorAll(".social-icon")
        avail.forEach(val => val.id === id ? val.style.opacity = 1 : val.style.opacity = 0.5)
    }

    const handleUnFocus = () => {
        document.querySelectorAll(".social-icon").forEach(val => val.style.opacity = 1 )
    }

    return (
        <Grid item className="socials" onMouseLeave={handleUnFocus} sx={{zIndex: 1, display: "flex", alignItems: "center", padding: 2}}>
            {socialMedia.map(media => (
                <a href={media.link} key={media.alt} className="social-hover">
                    <div key={media.alt} style={{margin: "0 0.5em"}}>
                        <img className="social-icon" src={media.src} id={media.alt} alt={media.alt} onMouseEnter={() => handleFocus(media.alt)} style={{width: media.width, height: media.height }} />
                    </div>
                </a>
            ))}
        </Grid>
    )
}

export default Socials