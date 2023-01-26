import { Drawer, Box, List, ListItem, ListItemButton, ListItemIcon, Divider, ListItemText } from "@mui/material"

const Navbar = ({nav, toggleNav}) => {
    return (
        <Drawer
            anchor="left"
            open={nav}
            onClose={toggleNav}
        >
            <Box
                role="presentation"
                onClick={toggleNav}
                onKeyDown={toggleNav}
            >
                <List>
                    {['Home', 'Video', 'About', 'Contact'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                        <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['Portfolio', 'Faces', 'Festivals & Events', 'Product', 'Creative Direction'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                        <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>
    )
}

export default Navbar