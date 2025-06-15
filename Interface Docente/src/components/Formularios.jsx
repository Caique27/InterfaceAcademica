import "./Formularios.css";
import React, { useState } from "react";
import { Fab, TextField, Select, MenuItem, Tooltip } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

function Formularios(props) {
  const [acomodacaoEscolhida, setAcomodacaoEscolhida] = useState("");
  const [produtoEscolhido, setProdutoEscolhido] = useState("");
  const [chosenCourse, setChosenCourse] = useState(props.chosenCourse);

  function enviarConsumo(id, acomodacaoEscolhida) {
    props.addConsumo(id, acomodacaoEscolhida);
  }

  return (
    <section className="Formularios-section">
      <form className="Formularios-form">
        <TextField
          SelectProps={{
            MenuProps: {
              sx: {
                "& .MuiPaper-root": {
                  backgroundColor: "#24333b", // Change dropdown background
                  color: "white", // Change text color
                },
                "& .MuiMenuItem-root:hover": {
                  backgroundColor: "#1e2a30", // Change hover background
                },
              },
            },
          }}
          labelStyle={{ color: "#BBE1FA" }}
          color="fourth"
          sx={{
            width: "40rem",
            margin: "0 auto",
            color: "white",
            ".MuiOutlinedInput-notchedOutline": {
              borderColor: "#BBE1FA",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#BBE1FA",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#BBE1FA",
            },
            ".MuiSvgIcon-root ": {
              fill: "#BBE1FA !important",
            },
            ".MuiSelect-select": {
              color: "white", // Set the text color here
            },
          }}
          value={chosenCourse}
          label="Disciplina"
          variant="outlined"
          onChange={(event) => {
            setChosenCourse(event.target.value);
          }}
          select
          focused
        >
          {props.nomesProdutos.map((produto) => (
            <MenuItem value={produto.id}>
              {produto.name} - {produto.days}
            </MenuItem>
          ))}
        </TextField>

        <Tooltip title="Exibir Disciplina">
          <Fab
            className="Formularios-addButton"
            color="fourth"
            aria-label="add"
            onClick={(event) => {
              props.changeChosenCourse(chosenCourse);

              event.preventDefault();
            }}
          >
            <AddIcon color="primary" />
          </Fab>
        </Tooltip>
      </form>
    </section>
  );
}
export default Formularios;
