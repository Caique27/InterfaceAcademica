import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Formularios from "./Formularios";
import List from "./List";
import { Snackbar, Alert } from "@mui/material";
import {
  buscarDados,
  aprovarTrancamento,
  listaOferecimentos,
  atualizarNotas,
} from "../backend/actions.js";

function Dashboard() {
  const { professor_Id } = useParams();
  const [courses, setCourses] = useState([]);
  const [displayedCourse, setDisplayedCourse] = useState(0);
  const [teachedCourses, setTeachedCourses] = useState([]);
  const [mensagem, setMensagem] = useState({
    open: false,
    error: false,
    message: "",
    helperText: {
      show: false,
      text: "",
    },
  });

  const [chosenCourse, setChosenCourse] = useState("");

  useEffect(() => {
    const atualizarDados = async () => {
      setCourses(await buscarDados());
      setTeachedCourses(await listaOferecimentos());
    };

    atualizarDados();
  }, [mensagem]);

  const changeChosenCourse = (id) => {
    for (var course in courses) {
      if (Number(courses[course].id) == Number(id)) {
        setDisplayedCourse(courses[course]);
        return;
      }
    }
  };
  async function approveDisenrollment(disenrollmentId) {
    setMensagem(await aprovarTrancamento(disenrollmentId));
  }
  async function updateGrades(grade, frequency) {
    setMensagem(await atualizarNotas(grade, frequency));
  }

  return (
    <div>
      <header>
        <h1 className="App-titulo">
          Interface Acadêmica - Docente {professor_Id}
        </h1>
      </header>
      <section>
        <Formularios
          nomesProdutos={teachedCourses}
          data={teachedCourses}
          changeChosenCourse={changeChosenCourse}
          chosenCourse={chosenCourse}
        />
      </section>
      <main className="App-main">
        {displayedCourse == 0 ? (
          <h1 style={{ margin: "0 auto", marginTop: "10%" }}>
            Selecione uma disciplina para ser exibida
          </h1>
        ) : (
          <List
            data={displayedCourse}
            approveDisenrollment={approveDisenrollment}
            updateGrades={updateGrades}
          />
        )}
      </main>
      <Snackbar
        open={mensagem.open}
        autoHideDuration={2500}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        onClose={() => setMensagem({ open: false, error: false, message: "" })}
      >
        <Alert
          onClose={() =>
            setMensagem({ open: false, error: false, message: "" })
          }
          severity={mensagem.error ? "error" : "success"}
          sx={{ width: "100%" }}
        >
          {mensagem.message}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Dashboard;
