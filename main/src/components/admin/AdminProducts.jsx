import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { useQuery } from 'react-query';
import Button from '@mui/material/Button';





export default function AdminProducts() {
  const { error, isLoading, data, refetch } = useQuery(["products"], () => {
    return axios.get("https://fakestoreapi.com/products");
  },
    {
      staleTime: 20000
    });
  // const DeleteWithFilterAdminProducts = (rowid) => {
  //   data && data.data.filter(e => e.id !== rowid)

  // }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">ID</TableCell>
            <TableCell align="left">TITLE</TableCell>
            <TableCell align="left">PRICE</TableCell>
            <TableCell align="left">CATEGORY</TableCell>
            {/* <TableCell align="left">DELETE</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {data && data.data?.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">{row.id}</TableCell>
              <TableCell align="left">{row.title}</TableCell>
              <TableCell align="left">{row.price}</TableCell>
              <TableCell align="left">{row.category}</TableCell>
              {/* <TableCell align='left'><Button variant="outlined" color="error" onClick={() => DeleteWithFilterAdminProducts(row.id)}>Delete(filter)</Button></TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}