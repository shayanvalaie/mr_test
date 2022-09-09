import React, { useContext } from "react";
import { DataContext } from "../DataContext";
import { Link } from "react-router-dom";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const PageTwo = ({ data }) => {
  const { q2, setQ2 } = useContext(DataContext);
  return (
    <>
      <div style={{ padding: 5 }}>
        <TextField
          id="outlined-basic"
          value={q2}
          onChange={(e) => setQ2(e.target.value)}
          label="Title/Completed"
          variant="outlined"
          color="secondary"
          sx={{
            borderColor: "white",
          }}
        />
        <Link style={{ textDecoration: "none" }} to="/mr_test">
          <Button
            id="buttonHover"
            sx={{
              marginLeft: "200px",
              backgroundColor: "#353839",
              ":hover": {
                bgcolor: "#3b444b",
              },
            }}
            variant="contained"
          >
            &larr; Page Two
          </Button>
        </Link>
      </div>

      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 650, backgroundColor: "#414a4c" }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell align="center"> userId</TableCell>
              <TableCell align="center">Title</TableCell>
              <TableCell align="center">Completed</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((person) => (
              <TableRow
                key={person.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{person.userId}</TableCell>
                <TableCell align="center">{person.title}</TableCell>
                <TableCell align="center">
                  {person.completed ? "true" : "false"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default PageTwo;
