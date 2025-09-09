"use client"
import { Box, IconButton, styled, Typography } from "@mui/material";
import style from './card.module.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Switch from '@mui/material/Switch';
import { useEffect, useState } from "react";
import { useAppDispatch } from "@/app/redux/hook/hook";
import { SubsriberThunk } from "@/app/redux/thunk/subscriber";
import { setCardId } from "@/app/redux/slice/card.clicked.slice";
import { useRouter } from "next/navigation";

const PinkSwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
        color: '#FAB900',
        '&:hover': {
            backgroundColor: `rgba(250, 185, 0, ${theme.palette.action.hoverOpacity})`,
        },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
        backgroundColor: '#FAB900',
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track ': {

    }
}));

const label = { inputProps: { 'aria-label': 'Switch demo' } };

interface propInterface {
    title: string
    description: string
    status: string
}

export default function NewsCard(props: propInterface) {
    const dispatch = useAppDispatch()
    const [checked, setChecked] = useState(true);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
     
    };
    
    useEffect(() => {
        if (props?.status === "Published") {
            setChecked(true);
        } else {
            setChecked(false);
        }
    }, [props?.status]);
    const router = useRouter();



    return (
        <>

            <Box className={style.mainBox}>
                <Box className={style.innerBox}>
                    <Box sx={{ display: "flex", gap: "26px", alignItems: "center" }}>
                        <Typography>{props?.title}</Typography>
                        <Box>  <IconButton><MoreVertIcon /></IconButton></Box>
                    </Box>
                    <Typography>{props.description}
                    </Typography>



                    <Box sx={{ display: "flex", gap: "5px" }}>
                        <PinkSwitch checked={checked}
                            //    disabled={checked}
                            onChange={handleChange}
                            slotProps={{ input: { 'aria-label': 'controlled' } }} />
                        <Typography sx={{ marginTop: "5px" }}>Publish</Typography></Box>
                </Box>
            </Box>
        </>
    )
}



//export default function NewsCard({ title, description, status }: propInterface)