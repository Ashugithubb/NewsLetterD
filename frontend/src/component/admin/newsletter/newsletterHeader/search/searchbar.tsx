import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import styles from './search.module.css'
export default function SearchTextField() {
  return (
    <TextField
      variant="outlined"
      placeholder="Search"
      className={styles.search}
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