import { Box, Typography } from "@mui/material";
import Editor from "./Editor";
import EditorMenuControls from "./EditorMenuControls";
import { RichTextEditor, RichTextReadOnly } from "mui-tiptap";
import style from '../newRequirementForm/benificerySection/benificery.module.css'
export default function MainEditor() {
    return (
        <>
            <Typography className={style.header} sx={{ color: "#424242"}}>Description</Typography>
            <Box sx={{ display: "flex", flexDirection: "column", borderRadius: "8px", gap: "16px", padding: "16px",border: "1px #9E9E9E solid",width:"100%",height:"280px" }}>
                <Editor />
            </Box>
        </>
    )
}