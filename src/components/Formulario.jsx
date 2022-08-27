import React from "react";
import { Box, TextField, Button, styled } from "@mui/material";

function Formulario({
  emailColaborador,
  setEmailColaborador,
  nombreColaborador,
  setNombreColaborador,
  listaColaboradores,
  setListaColaboradores,
}) {
  // Función al enviar el formulario
  const enviarFormulario = (e) => {
    e.preventDefault();
    let lastIdColaborador =
      parseInt(listaColaboradores[listaColaboradores.length - 1].id) + 1;
    lastIdColaborador = lastIdColaborador.toString();
    setListaColaboradores([
      ...listaColaboradores,
      {
        id: lastIdColaborador,
        nombre: nombreColaborador,
        correo: emailColaborador,
      },
    ]);
    setNombreColaborador("");
    setEmailColaborador("");
  };

  const Div = styled("div")(({ theme }) => ({
    ...theme.typography.button,
    padding: theme.spacing(1),
    borderRadius: "20px",
    fontSize: "30px",
    color: "rgba(100,100,100)",
  }));

  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        paddingLeft: "25%",
        paddingTop: "100px",
        paddingRight: "25%",
      }}
    >
      <Box
        sx={{
          border: 1,
          padding: 5,
          borderColor: "primary.main",
          borderRadius: "16px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          <Div>{"NUEVO COLABORADOR"}</Div>
        </Box>

        <form
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
            justifyContent: "center",
          }}
        >
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              height: "100%",
            }}
          >
            <TextField
              label="Nombre del colaborador"
              type="text"
              onChange={(e) => {
                setNombreColaborador(e.target.value);
              }}
              value={nombreColaborador}
              style={{ marginLeft: "10px", width: "100%" }}
            />
          </Box>
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              height: "100%",
              marginTop: "20px",
            }}
          >
            <TextField
              label="Email del colaborador"
              type="text"
              onChange={(e) => {
                setEmailColaborador(e.target.value);
              }}
              value={emailColaborador}
              style={{ marginLeft: "10px", width: "100%" }}
            />
          </Box>
          <Box style={{ display: "flex", justifyContent: "end" }}>
            <Button
              variant="contained"
              style={{ width: "100%", marginTop: "20px" }}
              onClick={enviarFormulario}
            >
              AGREGAR COLABORADOR
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
}

export default Formulario;
