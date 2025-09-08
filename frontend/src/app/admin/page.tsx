import ButtonComponent from "@/component/admin/buttons/buttons";
import AdminNavbar from "@/component/admin/navbar/navbar";
import NewsLetter from "@/component/admin/newsletter/newsletter";
import NewsLetterHeadder from "@/component/admin/newsletter/newsletterHeader/newsletterHeader";
import { Box } from "@mui/material";

export default function Admin() {
    return (
        <>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "40px" }}>
                <AdminNavbar />
                <Box sx={{ display: "flex", flexDirection: "column", gap: "24px",paddingLeft:"15%", paddingRight:"15%" }}>
                    <ButtonComponent />
                    <NewsLetter/>
                </Box>
            </Box>
        </>
    )
}