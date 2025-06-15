import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  MenuItem,
  TextField,
} from "@mui/material";
import "./GradesDialog.css";

function GradesDialog(props) {
  const [grade, setGrade] = useState(props.data.nota);
  const [frequency, setFrequency] = useState(props.data.frequencia);

  return (
    <Dialog open={props.open}>
      <DialogTitle className="dialog-style">{"Notas"}</DialogTitle>

      <DialogContent className="dialog-style">
        <div className="GradesDialog-info">
          <section>
            <h2 className="GradesDialog-label">Nota</h2>
            <TextField
              id="standard-basic"
              value={grade}
              variant="filled"
              color="fourth"
              sx={{
                input: { color: "#BBE1FA" },
              }}
              onChange={(event) => {
                setGrade(event.target.value);
              }}
            />
          </section>

          <section>
            <h2 className="GradesDialog-label">Frequência(%)</h2>

            <TextField
              id="standard-basic"
              value={frequency}
              variant="filled"
              color="fourth"
              sx={{
                input: { color: "#BBE1FA" },
              }}
              onChange={(event) => {
                setFrequency(event.target.value);
              }}
            />
          </section>
        </div>

        <div className="List-dialog-buttons">
          <Button
            color="fourth"
            onClick={() => {
              props.closeDialog();
            }}
          >
            Cancelar
          </Button>
          <Button
            color="fourth"
            variant="outlined"
            onClick={() => {
              props.updateGrades(grade, frequency);
              props.closeDialog();
            }}
          >
            Atualizar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default GradesDialog;
