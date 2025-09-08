import { Box, Typography } from "@mui/material";
import SearchTextField from "./search/searchbar";
import style from "./newsletterHeader.module.css"
export default function NewsLetterHeader(){
    return(
        <>
        <Box sx={{display:"flex", gap:"15px"}}>
        <Typography className={style.newsletter}>NewsLetter</Typography>
        <SearchTextField/>
        </Box>
        </>
    )
}