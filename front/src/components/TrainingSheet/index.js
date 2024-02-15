import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useContext } from "react";
import { useEffect } from "react";

//context

import { TrainingContext } from "../../context/TrainingContext";

export default function TrainingSheet() {
  const { exercises } = useContext(TrainingContext);

  useEffect(() => {
    console.log(exercises);
  }, [exercises]);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 350 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Segunda</TableCell>
            <TableCell align="center">Terça&nbsp;</TableCell>
            <TableCell align="center">Quarta&nbsp;</TableCell>
            <TableCell align="center">Quinta&nbsp;</TableCell>
            <TableCell align="center">Sexta&nbsp;</TableCell>
            <TableCell align="center">Sábado&nbsp;</TableCell>
            <TableCell align="center">Domingo&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {exercises.map((ex, index) => {
            return (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{ex.ex1}</TableCell>
                <TableCell align="center">{ex.ex2}</TableCell>
                <TableCell align="center">{ex.ex3}</TableCell>
                <TableCell align="center">{ex.ex4}</TableCell>
                <TableCell align="center">{ex.ex5}</TableCell>
                <TableCell align="center">{ex.ex6}</TableCell>
                <TableCell align="center">{ex.ex7}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
