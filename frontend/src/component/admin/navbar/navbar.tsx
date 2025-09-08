import { Avatar, Box, IconButton, Typography } from "@mui/material";
import style from "./navbar.module.css"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
export default function AdminNavbar() {
    return (
        <>
            <Box className={style.navbar}>
                <img src="/Group2.svg" />
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px", }}>
                    <Avatar />
                    <Typography>Admin1122 <IconButton><ExpandMoreIcon/></IconButton></Typography>
                </Box>
            </Box>
        </>
    )
}