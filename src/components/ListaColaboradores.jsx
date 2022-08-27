import React from "react";
import {
  Paper,
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
  TableBody,
  Table,
  Button,
} from "@mui/material";

export default function BasicTable({
  listaColaboradores,
  setListaColaboradores
}) {
  const eliminarColaborador = (colaborador) => {
    const listaFiltrada = listaColaboradores.filter(
      (el) => el.nombre !== colaborador.nombre
    );
    setListaColaboradores(listaFiltrada);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Eliminar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {listaColaboradores.map((colaborador) => (
            <TableRow key={colaborador.id}>
              <TableCell>{colaborador.id}</TableCell>
              <TableCell>{colaborador.nombre}</TableCell>
              <TableCell>{colaborador.correo}</TableCell>
              <TableCell>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => eliminarColaborador(colaborador)}
                >
                  Eliminar
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
