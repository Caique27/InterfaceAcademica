import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import List from "./List";
import { Snackbar, Alert } from "@mui/material";
import { buscarDados, solicitarTrancamento } from "../backend/actions.js";

function Dashboard() {
  const { student_Id } = useParams();
  const [courses, setCourses] = useState([]);
  const [mensagem, setMensagem] = useState({
    open: false,
    error: false,
    message: "",
    helperText: {
      show: false,
      text: "",
    },
  });

  useEffect(() => {
    const atualizarDados = async () => {
      setCourses(await buscarDados());
    };

    atualizarDados();
  }, [mensagem]);

  async function requestDisenrollment(enrollmentId) {
    setMensagem(await solicitarTrancamento(enrollmentId));
  }

  return (
    <div>
      <header>
        <h1 className="App-titulo">Interface Acadêmica - Aluno {student_Id}</h1>
      </header>

      <main className="App-main">
        {courses.map((course) => (
          <List
            key={course.id}
            data={course}
            requestDisenrollment={requestDisenrollment}
          />
        ))}
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
