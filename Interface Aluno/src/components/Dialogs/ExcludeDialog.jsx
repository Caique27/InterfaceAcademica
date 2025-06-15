import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Button,
} from "@mui/material";

function ExcludeDialog(props) {
  return (
    <Dialog open={props.open}>
      <DialogTitle className="dialog-style">{"Trancar Disciplina"}</DialogTitle>

      <DialogContent className="dialog-style">
        <DialogContentText color="fourth" className="dialog-style">
          Tem certeza que deseja trancar esta disciplina?
        </DialogContentText>
        <div className="List-dialog-buttons">
          <Button
            color="fourth"
            onClick={() => {
              props.closeDialog();
            }}
          >
            Não
          </Button>
          <Button
            color="fourth"
            variant="outlined"
            onClick={() => {
              props.requestDisenrollment();
              props.closeDialog();
            }}
          >
            Sim, Trancar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ExcludeDialog;
