import React from "react";
import { AppBar, Toolbar, Box, Typography, TextField, Button } from "@mui/material";

function NavBar({ listaColaboradores, setListaColaboradores }) {
  let nombreBuscadoVar;
  const buscarColaborador = () => {
    const listaColaborador = [...listaColaboradores]; // Copiamos las tareas anteriores
    if (nombreBuscadoVar !== "") {
      const listaColaboradorNew = listaColaborador.filter(
        (colaborador) => colaborador.nombre === nombreBuscadoVar
      );
      setListaColaboradores(listaColaboradorNew);
    } else {
      setListaColaboradores(listaColaborador);
    }
  };

  const nombreBuscado = (nombreColab) =>{
    nombreBuscadoVar = nombreColab;
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Toolbar style={{ display: "flex", justifyContent: "center" }}>
          <Box
            style={{
              display: "flex",
              width: "80%",
              justifyContent: "flex-end",
            }}
          >
            <Typography variant="h4" component="div" gutterBottom mr={2}>
              Buscador de colaboradores :
            </Typography>
          </Box>
          <Box
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "flex-start",
            }}
          >
            <TextField
              hiddenLabel
              variant="filled"
              size="small"
              style={{ width: "70%", backgroundColor: "white" }}
              onChange={(e) => nombreBuscado(e.target.value)}
            />
            <Button variant="contained" color="success" onClick={(e) => buscarColaborador()}>
              Buscar
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
