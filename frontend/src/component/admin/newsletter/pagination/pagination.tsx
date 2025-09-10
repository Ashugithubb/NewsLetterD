"use client"
import * as React from 'react';
import TablePagination from '@mui/material/TablePagination';
import { useAppDispatch, useAppSelector } from '@/app/redux/hook/hook';
import { getNewsLetterThunk } from '@/app/redux/slice/newsletter.slice';

// interface PaginationIterface {
//   total: number,
//   limit: number,
//   page: number
// }


export default function TablePaginationDemo() {
  const { limit = 3, total = 0, page = 1 } = useAppSelector((state) => state.newsLetter.newsletterlist) ?? {}
  
  const dispatch = useAppDispatch();

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    dispatch(getNewsLetterThunk({ page: page+1 }));
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const newLimit = parseInt(event.target.value, 10);
    dispatch(getNewsLetterThunk({ limit: newLimit }));
  };

  return (
    <TablePagination
      component="div"
      count={total}
      page={page-1}
      onPageChange={handleChangePage}
      rowsPerPage={limit}
      onRowsPerPageChange={handleChangeRowsPerPage}
      rowsPerPageOptions={[5,10,15,20,25]}
      
    />
  );
}
