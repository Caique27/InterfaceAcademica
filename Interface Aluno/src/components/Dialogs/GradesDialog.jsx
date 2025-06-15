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
  const [grades, setGrades] = useState(props.grades);

  return (
    <Dialog open={props.open}>
      <DialogTitle className="dialog-style">{"Notas"}</DialogTitle>

      <DialogContent className="dialog-style">
        <div className="GradesDialog-info">
          <section>
            <h2 className="GradesDialog-label">Nota</h2>
            <h1 className="GradesDialog-value">{props.data.nota}</h1>
          </section>

          <section>
            <h2 className="GradesDialog-label">Frequência</h2>
            <h1 className="GradesDialog-value">{props.data.frequencia}%</h1>
          </section>
        </div>

        <div className="List-dialog-buttons">
          <Button
            color="fourth"
            variant="outlined"
            onClick={() => {
              props.closeDialog();
            }}
          >
            Fechar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default GradesDialog;
