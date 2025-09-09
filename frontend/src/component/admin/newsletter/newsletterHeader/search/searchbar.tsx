"use client"
import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import styles from './search.module.css'
import { useAppDispatch } from "@/app/redux/hook/hook";
import { useEffect, useState } from "react";
import { getNewsLetterThunk } from "@/app/redux/slice/newsletter.slice";
export default function SearchTextField() {
  const [search, setSearch] = useState("");

  const dispatch = useAppDispatch();

  useEffect(() => {

    const debounce = setTimeout(() => {
      dispatch(getNewsLetterThunk({ search }))
    }, 2000)

    return () => clearTimeout(debounce);

  }, [search])

  return (
    <TextField
      variant="outlined"
      placeholder="Search"
      className={styles.search}
      onChange={(e) => setSearch(e.target.value as string)}
      sx={{
        width: "273px",
        "& .MuiOutlinedInput-root": {
          borderRadius: "10px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          fontFamily: "Open Sans",
        },
        "& .MuiInputLabel-root": {
          fontSize: "14px",
          color: "#757575",
          fontFamily: "Open Sans",
        },
        fontFamily: "Open Sans",
      }}
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }
      }}
    />
  );
}