import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { AdicionarContext } from '../context/adicionarContext';
import { useContext } from 'react';
import { useEffect } from 'react';

export default function TrainingSheet() {
  const {extrato} = useContext(AdicionarContext);
  
  useEffect(() => {
    console.log(extrato)
  }, [extrato])
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">CARTEIRA</TableCell> 
            <TableCell align="center">DATA&nbsp;</TableCell>
            <TableCell align="center">VALOR&nbsp;</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {extrato.map((extract, index) => {
            return <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >             
              <TableCell align="center">{extract.carteira}</TableCell>
              <TableCell align="center">{extract.data}</TableCell>
              <TableCell align="center">{extract.valor}</TableCell>             
            </TableRow>
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
