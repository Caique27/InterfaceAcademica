import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  MenuItem,
  TextField,
} from "@mui/material";
import "./ContactDialog.css";

function ContactDialog(props) {
  const [contact, setContact] = useState(props.contact);

  return (
    <Dialog open={props.open}>
      <DialogTitle className="dialog-style">
        {"Informações do Aluno"}
      </DialogTitle>

      <DialogContent className="dialog-style">
        <h2 className="ContactDialog-label">Nome</h2>
        <h1 className="ContactDialog-value">{props.data.name}</h1>

        <h2 className="ContactDialog-label">N° matrícula</h2>
        <h1 className="ContactDialog-value">{props.data.id}</h1>

        <h2 className="ContactDialog-label">Email</h2>
        <h1 className="ContactDialog-value">{props.data.email_aluno}</h1>

        <h2 className="ContactDialog-label">Telefone</h2>
        <h1 className="ContactDialog-value">{props.data.telefone_aluno}</h1>

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

export default ContactDialog;
