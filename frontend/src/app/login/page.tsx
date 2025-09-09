'use client'
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { ToastContainer, toast } from 'react-toastify';
import EmailIcon from '@mui/icons-material/Email';
import {
    TextField,
    Button,
    Typography,
    Box,
    Link as MuiLink,
    Paper,
    InputAdornment,
    IconButton,
} from '@mui/material';
import Link from 'next/link';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation'
import style from '../login/page.module.css'
import { useAppDispatch } from '@/app/redux/hook/hook';
import { loginUser } from '@/app/redux/slice/auth.slice';



export const loginSchema = z.object({
    email: z.string().min(6, { message: 'Invalid email address' }),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useAppDispatch();
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
    });
    const notify = () => toast("Login Successfull!");
    const onSubmit = async (data: LoginFormData) => {
        const res = await dispatch(loginUser(data));

        if (res.meta.requestStatus === 'fulfilled') {
            toast.success("Login successful!");
            router.push('/admin');
        } else {
            toast.error(res.payload || "Login failed");
        }
    };

    return (
        <Box
            className={style.background}
        >
            <ToastContainer />
            <Paper className={style.paperUpperBox} elevation={3}>
                <Box className={style.paper}   >
                    <Box className={style.insidPaperBox}>

                        <Box sx={{ display: "flex", justifyContent: "center" }}> <img src={"./Group2.svg"} /></Box>
                        <Box > <Typography className={style.welcomback} variant="h5" gutterBottom>
                            Welcome Back!
                        </Typography>
                            <Typography className={style.subHeading}>Sign in to explore new opportunities and connect with top employers.</Typography>

                        </Box>

                        <form onSubmit={handleSubmit(onSubmit)} noValidate>
                            <Box sx={{ display: "flex", gap: "35px", flexDirection: "column" }}>
                                <TextField className={style.enterEmail}
                                    placeholder='Enter your email'
                                    {...register('email')}
                                    error={!!errors.email}
                                    helperText={errors.email?.message}
                                    fullWidth
                                    margin="normal"
                                    size="small"
                                    sx={{
                                        background: "#F5F5F5",
                                        borderRadius: "10px",
                                        '& .MuiOutlinedInput-notchedOutline': {
                                            border: 'none'
                                        }

                                    }}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <EmailIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                />

                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    fullWidth

                                    className={style.button}
                                >
                                    Sign In
                                </Button>
                                <ToastContainer />
                            </Box>
                        </form>

                    </Box>
                </Box>
            </Paper>
        </Box>

    );
}