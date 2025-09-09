import AdminNavbar from "@/component/admin/navbar/navbar";
import Editor from "@/component/editor/Editor";
import EditorHeader from "@/component/editor/editorHeader/editorHeader";
import { Box } from "@mui/material";

export default function EditorPage() {
    return (
        <>
            <Box sx={{display:"flex",flexDirection:"column",gap:"40px"}}>
                <AdminNavbar />
                <Box sx={{ display: "flex", flexDirection: "column", paddingLeft: "156px", paddingRight: "156px", gap: "24px" }}>
                    <EditorHeader />
                    <Editor />
                </Box></Box>
        </>
    )

}