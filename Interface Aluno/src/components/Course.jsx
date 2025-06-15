import React, { useState } from "react";
import "./Course.css";
import { Tooltip, IconButton } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import EventBusyIcon from "@mui/icons-material/EventBusy";
import ContactDialog from "./Dialogs/ContactDialog";
import ExcludeDialog from "./Dialogs/ExcludeDialog";
import AssessmentIcon from "@mui/icons-material/Assessment";
import GradesDialog from "./Dialogs/GradesDialog";

function Course({ data, deleteCourse, requestDisenrollment, CourseId }) {
  const [openDialog, setOpenDialog] = useState(false);
  return (
    <section className="Course-section">
      <div>
        <h1 className={"Course-titulo"}>
          {data.name}
          <h1 className="Course-description Course-amount">
            {" "}
            ({data.credits} créditos)
          </h1>
        </h1>
        <h2 className="Course-description Course-status">
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
        </h2>
        <h2 className="Course-description Course-date">
          {`${data.days.split("T")[0]} ${data.time}`}
        </h2>
      </div>

      <div className="Course-buttons">
        <Tooltip title="Informações do Docente" arrow>
          <IconButton
            color="fourth"
            onClick={() => {
              setOpenDialog("contact");
            }}
          >
            <PersonIcon />
          </IconButton>
        </Tooltip>
        {data.status == "Matriculado" ? (
          <Tooltip title="Trancar Disciplina" arrow>
            <IconButton
              color="fourth"
              onClick={() => {
                setOpenDialog("exclude");
              }}
            >
              <EventBusyIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <></>
        )}

        <Tooltip title="Consultar notas" arrow>
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
      <ExcludeDialog
        open={openDialog == "exclude"}
        closeDialog={() => {
          setOpenDialog(false);
        }}
        requestDisenrollment={requestDisenrollment}
        idCourse={CourseId}
      />
      <ContactDialog
        open={openDialog == "contact"}
        closeDialog={() => {
          setOpenDialog(false);
        }}
        data={data}
        idCourse={CourseId}
        //				mensagem={message}
      ></ContactDialog>
      <GradesDialog
        open={openDialog == "grades"}
        closeDialog={() => {
          setOpenDialog(false);
        }}
        data={data}
        //				mensagem={message}
      ></GradesDialog>
    </section>
  );
}

export default Course;
