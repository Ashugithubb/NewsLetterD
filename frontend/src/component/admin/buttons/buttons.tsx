"use client"
import { Box, Button } from "@mui/material";
import style from './button.module.css'
import FormDialog from "../newsletter/createDailog/createDailog";
import { useState } from "react";
export default function ButtonComponent() {
    const [open,setOpen] = useState(false);
    const handelCreate = ()=>{
        setOpen(!open)
    }
    return (
        <>
            <Box className={style.box}>
                <Box>
                    <Button className={style.newsletter} variant="contained">newsLetter</Button>
                    <Button className={style.subscription} variant="contained">subscriptions</Button>
                </Box>
                <Button onClick={handelCreate} className={style.create} variant="contained">Create</Button>
                <FormDialog openDailog={open}/>
            </Box>
        </>
    )
}