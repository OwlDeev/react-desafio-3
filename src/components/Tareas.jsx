import React from "react";
import { useState } from "react";
import { BaseColaboradores } from "../BaseColaboradores";

const Tareas = () => {
  const [nombreTarea, setNombreTarea] = useState("");
  const [listaTareas, setListaTareas] = useState(BaseColaboradores);

  // Función al enviar el formulario
  const enviarFormulario = (e) => {
    e.preventDefault();
    setListaTareas([
      ...listaTareas,
      { nombre: nombreTarea, completada: false },
    ]);
    setNombreTarea("");
  };
  //Función al escribir sobre el input del formulario
  const capturaInput = (e) => {
    setNombreTarea(e.target.value);
  };

  const modificarTarea = (tarea) => {
    const nuevasTareas = [...listaTareas]; // Copiamos las tareas anteriores
    const index = nuevasTareas.findIndex((el) => el.nombre === tarea.nombre);
    // Buscamos la tarea a modificar en la lista
    nuevasTareas[index].completada = true;
    setListaTareas(nuevasTareas);
  };

  const eliminarTarea = (tarea) => {
    const listaFiltrada = listaTareas.filter(
      (el) => el.nombre !== tarea.nombre
    );
    setListaTareas(listaFiltrada);
  };

  return (
    <div>
      <form onSubmit={enviarFormulario}>
        <input name="nombreTarea" onChange={capturaInput} />
        <button> Agregar Tarea </button>
      </form>
      <ul>
        {listaTareas.map((tarea) => (
          <li
            key={tarea.nombre}
            style={
              tarea.completada === true
                ? { textDecoration: "line-through" }
                : {}
            }
          >
            {tarea.nombre}
            {tarea.completada === false ? (
              <button onClick={() => modificarTarea(tarea)}> Completar </button>
            ) : (
              ""
            )}
            <button onClick={() => eliminarTarea(tarea)}> Borrar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tareas;
