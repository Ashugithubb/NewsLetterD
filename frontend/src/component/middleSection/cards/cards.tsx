import { Box, Stack, Typography } from "@mui/material";
import style from './cards.module.css'
export default function Cards() {
    return (
        <>
            <Box sx={{ display: "flex", gap: "10px", justifyContent: "center" }}>
                <Box className={style.minbox}>
                    <img
                        src="./image6.png"
                        alt="Starter Plan"
                        className={style.image}
                    />
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "12px", justifyContent: "center", alignItems: "center" }}>
                        <Typography className={style.header} >Starter Plan – Learn the Basics</Typography>
                        <Typography className={style.money}>$19 / month</Typography>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                            <Typography className={style.list}>Access to beginner-friendly</Typography>
                            <Typography className={style.list}>Weekly live Q&A sessions</Typography>
                            <Typography className={style.list}> Intro courses in coding, AI</Typography></Box>
                    </Box>
                </Box>


                <Box className={style.maxbox}>
                    <img
                        src="./image7.png"
                        alt="Starter Plan"
                        className={style.image}
                    />
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "12px", justifyContent: "center", alignItems: "center" }}>
                        <Typography className={style.maxHeader} >Pro Plan – Build Real Skills</Typography>
                        <Typography className={style.maxMoney}>$29 / 6 months</Typography></Box>

                    <Box sx={{ display: "flex", flexDirection: "column", gap: "3px", justifyContent: "center", alignItems: "center" }}>
                        <Typography className={style.list}>Access to beginner-friendly</Typography>
                        <Typography className={style.list}>Weekly live Q&A sessions</Typography>
                        <Typography className={style.list}> Intro courses in coding, AI</Typography></Box>
                </Box>

                <Box className={style.minbox}>

                    <img
                        src="./image8.png"
                        alt="Starter Plan"
                        className={style.image}
                    />
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "12px", justifyContent: "center", alignItems: "center" }}>
                        <Typography className={style.header} >Mastery Plan – Become an Expert</Typography>
                        <Typography className={style.money}>$59 / 1 year</Typography>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                            <Typography className={style.list}>Access to beginner-friendly</Typography>
                            <Typography className={style.list}>Weekly live Q&A sessions</Typography>
                            <Typography className={style.list}> Intro courses in coding, AI</Typography></Box></Box>

                </Box>




            </Box>

        </>
    )
}