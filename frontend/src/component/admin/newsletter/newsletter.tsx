import { Box } from "@mui/material";
import NewsLetterHeader from "./newsletterHeader/newsletterHeader";
import NewsCard from "./newsCard/newsCard";
import TablePaginationDemo from "./pagination/pagination";

export default function NewsLetter() {
    const title = "Design Competition Winner";
    const description = "Lorem lpsum has been Switches are the preferred way to adjust settings on mobile."
    const status = "Published"
    return (
        <>
            <Box sx={{ display: "flex", flexDirection: "column", padding: "24px",gap:"24px" }}>
                <NewsLetterHeader />
                <Box sx={{display:"flex",flexWrap:"wrap",gap:"24px"}}>
                <NewsCard title={title} description={description} status={status}/>
                <NewsCard title={title} description={description} status={status}/>
                <NewsCard title={title} description={description} status={status}/></Box>
               <TablePaginationDemo/>
            </Box>
        </>
    )
}