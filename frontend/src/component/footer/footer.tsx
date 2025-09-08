import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import style from "../email/email.module.css"
import styles from '../footer/footer.module.css'
export default function FooterComponent() {
    return (
        <>
            <Box sx={{ display: "flex", padding: "80px", height: "411px" }}>

                <Box sx={{ display: "flex", gap: "150px", height: "251px", justifyContent: "space-between" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "40px" }}>
                        <Box sx={{}}>  <img src="./Group2.svg" alt="logo" /></Box>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: "9px" }}>
                            <Box className={style.typographyText} sx={{ display: "flex", gap: "4px", flexDirection: "column" }}>
                                <Typography className={style.list}>©2020 Edudu.co</Typography>
                                <Typography className={style.list}>Edudu is a registered trademark of Edudu.co</Typography></Box>
                        </Box>
                    </Box>

                    <Box>
                        <Typography className={style.typographyText} sx={{ fontSize: "24px" }}>Courses</Typography>
                        <Box sx={{ display: "flex", gap: "4px", flexDirection: "column" }}>
                            <Typography className={style.list}>Classroom courses</Typography>
                            <Typography className={style.list}>Virtual classroom courses</Typography>
                            <Typography className={style.list}> E-learning courses</Typography>
                            <Typography className={style.list}> Video Courses</Typography>
                            <Typography className={style.list}>Offline Courses</Typography></Box>

                    </Box>

                    <Box>  <Typography className={style.typographyText} sx={{ fontSize: "24px" }}>Community</Typography>
                        <Box sx={{ display: "flex", gap: "4px", flexDirection: "column" }}>
                            <Typography className={style.list}>Learners</Typography>
                            <Typography className={style.list}> Parteners</Typography>
                            <Typography className={style.list}>Developers</Typography>
                            <Typography className={style.list}> Transactions</Typography>
                            <Typography className={style.list}>Blog</Typography>
                            <Typography className={style.list}>Teaching Center</Typography>
                        </Box></Box>

                    <Box>  <Typography className={style.typographyText} sx={{ fontSize: "24px" }}>Quick links</Typography>
                        <Box sx={{ display: "flex", gap: "4px", flexDirection: "column" }}>
                            <Typography className={style.list}>Home</Typography>
                            <Typography className={style.list}>  Professional Education</Typography>
                            <Typography className={style.list}> Courses</Typography>
                            <Typography className={style.list}> Admissions</Typography>
                            <Typography className={style.list}>Testimonial</Typography>
                            <Typography className={style.list}>Programs</Typography></Box>
                    </Box>

                    <Box>  <Typography className={style.typographyText} sx={{ fontSize: "24px" }}>More</Typography>
                        <Box sx={{ display: "flex", gap: "4px", flexDirection: "column" }}>
                            <Typography className={style.list}>Press</Typography>
                            <Typography className={style.list}>Investors</Typography>
                            <Typography className={style.list}> Terms</Typography>
                            <Typography className={style.list}> Privacy</Typography>
                            <Typography className={style.list}>Help</Typography>
                            <Typography className={style.list}>Contact</Typography></Box>
                    </Box>
                </Box>

            </Box>
        </>
    )
}