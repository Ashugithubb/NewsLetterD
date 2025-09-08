import { Box, Button, Typography } from "@mui/material";
import style from "./editorHeader.module.css"
import styles from "../../../component/admin/newsletter/createDailog/dailog.module.css"
export default function  EditorHeader(){
    return(
        <>
        <Box className={style.box}>
        <Typography className={style.newsTitle}>News Title</Typography>
        <Box sx={{display:"flex",gap:"15px"}}>
             <Button className={styles.button}>Publish</Button>
            <Button className={styles.button}>Save</Button>
           
        </Box>
        </Box>
        </>
    )
}