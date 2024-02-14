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
            <TableCell align="center">teste1</TableCell>
            <TableCell align="center">teste2&nbsp;</TableCell>
            <TableCell align="center">teste3&nbsp;</TableCell>
            <TableCell align="center">teste4&nbsp;</TableCell>
            <TableCell align="center">teste5&nbsp;</TableCell>
            <TableCell align="center">teste6&nbsp;</TableCell>
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
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
