"use client"
import { Box, Typography } from "@mui/material";
import NewsLetterHeader from "./newsletterHeader/newsletterHeader";
import NewsCard from "./newsCard/newsCard";
import TablePaginationDemo from "./pagination/pagination";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/app/redux/hook/hook";
import { getNewsLetterThunk } from "@/app/redux/slice/newsletter.slice";
import { id } from "zod/v4/locales";
import { setCardId } from "@/app/redux/slice/card.clicked.slice";
import { useRouter } from "next/navigation";
import { DraftNewsLetterThunk } from "@/app/redux/thunk/draft-news-letter";
import { toast, ToastContainer } from "react-toastify";

export default function NewsLetter() {
    const dispatch = useAppDispatch()
    const router = useRouter();
    const [clickedId, setClickedId] = useState(-1);
    const { limit, page, total, newsletter } = useAppSelector((state) => state.newsLetter?.newsletterlist) ?? {}
    useEffect(() => {
        dispatch(getNewsLetterThunk({}));
    }, [dispatch])

    const handelCardClick = async (id: number) => {
        console.log("card Number clicked", id);
        // dispatch(setCardId(id));
        const res = await dispatch(DraftNewsLetterThunk(id));
        if (res.meta.requestStatus === 'fulfilled') {
            toast.success("News Letter Publised Successfully!"); 
        } else {
            toast.error(res.payload || "Unable to Publish NewsLetter try again");
        }
    }
    return (
        <>
            <Box sx={{ display: "flex", flexDirection: "column", padding: "24px", gap: "16px", width: "100%" }}>
                <ToastContainer/>
                <NewsLetterHeader />
                {newsletter?.length === 0 && (<Typography>No newsletters Found.</Typography>)}

                <Box sx={{ display: "flex", flexWrap: "wrap", gap: "24px", width: '100%' }}>
                    {newsletter?.map((m: any) => (
                        <NewsCard key={m.id} title={m.title} description={m.description} status={m.status} onClick={() => handelCardClick(m.id)} />
                    ))}
                </Box>
                <TablePaginationDemo />
            </Box>
        </>
    )
}