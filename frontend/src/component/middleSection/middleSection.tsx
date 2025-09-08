import { Box, Typography } from "@mui/material";
import style from "./middle.module.css"
import Cards from "./cards/cards";
export default function MiddleSection() {
    return (
        <>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "60px" }}>
                <Typography className={style.edudu}>Why should you choose Edudu?</Typography>
                
                <Box>
                     <Box sx={{background:"#FFF", width:"100%",height:"300px"}}> 

                        <Cards/>
                 </Box>


                    <Box  sx={{background:"#FAB900", width:"100%",height:"200px"}}>


                    </Box>

                </Box>
                
                




                </Box>




        </>
    )
}