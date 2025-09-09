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

export default function NewsLetter() {
    const dispatch = useAppDispatch()
    const router = useRouter();
    const [clickedId,setClickedId] =useState(-1);
    const { limit, page, total, newsletter } = useAppSelector((state) => state.newsLetter?.newsletterlist) ?? {}
    useEffect(() => {
        dispatch(getNewsLetterThunk({}));
    }, [dispatch])

    const handelCardClick = (id: number) => {
        console.log("card Number clicked", id);
        dispatch(setCardId(id));
        router.push('/admin/newsletter')
    }
    return (
        <>
            <Box sx={{ display: "flex", flexDirection: "column", padding: "24px", gap: "16px", width: "100%" }}>
                <NewsLetterHeader />
                {newsletter?.length === 0 && (<Typography>No newsletters created yet.</Typography>)}

                <Box sx={{ display: "flex", flexWrap: "wrap", gap: "24px", width: '100%' }}>
                    {newsletter?.map((m: any) => (
                        <NewsCard  key={m.id}  title={m.title} description={m.description} status={m.status} />
                    ))}
                </Box>
                <TablePaginationDemo />
            </Box>
        </>
    )
}