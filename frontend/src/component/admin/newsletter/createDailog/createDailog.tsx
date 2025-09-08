"use client"
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import style from './dailog.module.css'
import { Box, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import z from 'zod';
import { newsSchema } from './schema/create';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from '@/redux/hook/hook';
import { setTitle } from '@/redux/slice/newstittle.slice';
import { useRouter } from 'next/navigation';
interface propInterface {
    openDailog: boolean
}

type NewsFormData = z.infer<typeof newsSchema>;
export default function FormDialog({ openDailog }: propInterface) {
    const [open, setOpen] = React.useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<NewsFormData>({
        resolver: zodResolver(newsSchema),
        defaultValues: {

        },
    });

    const dispatch = useAppDispatch();
    const router = useRouter()
    const onSubmit = async (data: NewsFormData) => {
        const title = data.title;
        const description = data.description
        const res = await dispatch(setTitle({ title, description }));
        router.push("/admin/newsletter")
        handleClose();

    };
    const handleClickOpen = () => {
        setOpen(true);
    };
    React.useEffect(() => {
        setOpen(openDailog)
    }, [openDailog])

    const handleClose = () => {
        setOpen(false);
    };

    // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    //     event.preventDefault();
    //     const formData = new FormData(event.currentTarget);
    //     const formJson = Object.fromEntries((formData as any).entries());
    //     handleClose();
    // };

    return (
        <React.Fragment>
            <Dialog open={open} onClose={handleClose}>
                <Box className={style.mainBox}>
                    <DialogTitle className={style.createText}>Create New Newsletter</DialogTitle>
                    <form onSubmit={handleSubmit(onSubmit)} id="subscription-form" noValidate>
                        <DialogContent>

                            <Box sx={{ display: "flex", gap: "16px", flexDirection: "column" }}>
                                <Box sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                                    <Typography className={style.newTitle} >News Title*</Typography>
                                    <Box sx={{ border: "0px solid #F5F5F5", borderRadius: "12px" }}>
                                        <TextField
                                            {...register('title')}
                                            error={!!errors.title}
                                            helperText={errors.title?.message}
                                            sx={{
                                                borderRadius: "10px",
                                                "& .MuiOutlinedInput-input": {
                                                    height: "21px",
                                                    color: "black",
                                                    fontWeight: "400",
                                                    background: "#F5F5F5"
                                                },
                                                '& .MuiOutlinedInput-notchedOutline': {
                                                    border: 'none',
                                                },
                                                '& .MuiOutlinedInput-root': {
                                                    '&.Mui-focused fieldset': {
                                                        border: 'none',
                                                    }
                                                }


                                            }}
                                            autoFocus
                                            required
                                            name="title"
                                            type="text"
                                            fullWidth
                                            size="small"

                                        /></Box></Box>
                                <Box sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                                    <Typography className={style.newTitle} >Description*</Typography>
                                    <Box sx={{ border: "0px solid #F5F5F5", borderRadius: "12px" }}>
                                        <TextField autoFocus
                                            required
                                            margin="dense"
                                            label=""
                                            type="text"
                                            fullWidth
                                            {...register('description')}
                                            error={!!errors.description}
                                            helperText={errors.description?.message}
                                            sx={{
                                                "& .MuiOutlinedInput-input": {

                                                    color: "black",
                                                    fontWeight: "400",
                                                    background: "#F5F5F5",
                                                },
                                                '& .MuiOutlinedInput-notchedOutline': {
                                                    border: 'none',
                                                },
                                                '& .MuiOutlinedInput-root': {

                                                    '&.Mui-focused fieldset': {
                                                        border: 'none',
                                                    }
                                                }

                                            }}
                                        /></Box></Box>
                            </Box>

                        </DialogContent>
                        <DialogActions sx={{
                            display: "flex", gap: "16px", padding: "24px"
                        }}>

                            <Button className={style.button} onClick={handleClose}>Cancel</Button>
                            <Button className={style.button} type="submit" >
                                Create
                            </Button>
                        </DialogActions>
                    </form>
                </Box>

            </Dialog>

        </React.Fragment>
    );
}