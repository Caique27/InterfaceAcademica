import React, { useState } from "react";
import "./Student.css";
import { Tooltip, IconButton } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import AssessmentIcon from "@mui/icons-material/Assessment";
import ContactDialog from "./Dialogs/ContactDialog";
import GradesDialog from "./Dialogs/GradesDialog";

function Student({ data, approveDisenrollment, updateGrades, StudentId }) {
  const [openDialog, setOpenDialog] = useState(false);
  return (
    <section className="Student-section">
      <div>
        <h1 className={"Student-titulo"}>
          {data.name}
          <h1 className="Student-description Student-amount">
            {" "}
            (N° matrícula {data.id})
          </h1>
        </h1>
        <h2 className="Student-description Student-status">
          <p>Situação: </p>
          <p
            style={{
              marginLeft: "1%",
              color:
                data.status == "Trancada"
                  ? "#F27373"
                  : data.status == "Trancamento Solicitado"
                  ? "#F2B273"
                  : "#BBE1FA",
            }}
          >
            {data.status}
          </p>
          <p style={{ marginLeft: "5%" }}>Nota: </p>
          <p
            style={{
              marginLeft: "1%",
              color: Number(data.nota) >= 5 ? "#BBE1FA" : "#F27373",
            }}
          >
            {data.nota}
          </p>

          <p style={{ marginLeft: "5%" }}>Frequência: </p>
          <p
            style={{
              marginLeft: "1%",
              color: Number(data.frequencia) >= 75 ? "#BBE1FA" : "#F27373",
            }}
          >
            {data.frequencia}%
          </p>
        </h2>
      </div>

      <div className="Student-buttons">
        {data.status == "Trancamento Solicitado" ? (
          <Tooltip title="Aprovar trancamento" arrow>
            <IconButton
              color="fourth"
              onClick={() => {
                approveDisenrollment();
              }}
            >
              <EventAvailableIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <></>
        )}
        <Tooltip title="Informações do Aluno" arrow>
          <IconButton
            color="fourth"
            onClick={() => {
              setOpenDialog("contact");
            }}
          >
            <PersonIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Atualizar notas" arrow>
          <IconButton
            color="fourth"
            onClick={() => {
              setOpenDialog("grades");
            }}
          >
            <AssessmentIcon />
          </IconButton>
        </Tooltip>
      </div>

      <ContactDialog
        open={openDialog == "contact"}
        closeDialog={() => {
          setOpenDialog(false);
        }}
        data={data}
        idStudent={StudentId}
        //				mensagem={message}
      ></ContactDialog>
      <GradesDialog
        open={openDialog == "grades"}
        closeDialog={() => {
          setOpenDialog(false);
        }}
        updateGrades={updateGrades}
        data={data}
        //				mensagem={message}
      ></GradesDialog>
    </section>
  );
}

export default Student;
