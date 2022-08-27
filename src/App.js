import * as React from "react";
import Formulario from "./components/Formulario";
import NavBar from "./components/NavBar";
// import ListaTareas from "./components/ListaTareas";
import ListaColaboradores from "./components/ListaColaboradores";
import { Link, Typography, Container, Divider } from "@mui/material";
import { useState } from "react";
import { BaseColaboradores } from "./BaseColaboradores";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="http://narkistudio.com">
        OwlDev
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function App() {
  const [nombreColaborador, setNombreColaborador] = useState("");
  const [emailColaborador, setEmailColaborador] = useState("");
  const [listaColaboradores, setListaColaboradores] =
    useState(BaseColaboradores);

  return (
    <Container maxWidth="100%" maxHeight="100%">
      <NavBar
        listaColaboradores={listaColaboradores}
        listColaboradoresOld={listaColaboradores}
        setListaColaboradores={setListaColaboradores}
      ></NavBar>
      <Formulario
        emailColaborador={emailColaborador}
        setEmailColaborador={setEmailColaborador}
        nombreColaborador={nombreColaborador}
        setNombreColaborador={setNombreColaborador}
        listaColaboradores={listaColaboradores}
        setListaColaboradores={setListaColaboradores}
      ></Formulario>
      <Divider orientation="horizontal" flexItem style={{ marginTop: "50px" }}>
        <Typography variant="h5" color="text.secondary" align="center">
          {"LISTA DE COLABORADORES"}
        </Typography>
      </Divider>
      <ListaColaboradores
        listaColaboradores={listaColaboradores}
        setListaColaboradores={setListaColaboradores}
      ></ListaColaboradores>
      <Copyright />
    </Container>
  );
}
