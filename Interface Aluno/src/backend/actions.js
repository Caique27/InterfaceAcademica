import axios from "axios";

function getAnoAtual() {
  return new Date().getFullYear();
}
function semestreAtual() {
  const mes = new Date().getMonth() + 1; // getMonth() retorna de 0 (janeiro) a 11 (dezembro)
  return mes >= 1 && mes <= 7 ? 1 : 2;
}

export async function buscarDados(student_id) {
  const queryResponse = await axios.post(
    "https://f0esm5kym1.execute-api.us-east-1.amazonaws.com/default/postgre",
    {
      resource: "courses",
      params: {
        student_id: student_id,
        year: getAnoAtual(),
        term: semestreAtual(),
      },
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return queryResponse.data;
}

export async function solicitarTrancamento(id_aluno, id_oferecimento) {
  try {
    const queryResponse = await axios.post(
      "https://f0esm5kym1.execute-api.us-east-1.amazonaws.com/default/postgre",
      {
        resource: "requestDisenrollment",
        params: {
          student_id: id_aluno,
          course_id: id_oferecimento,
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return {
      open: true,
      error: false,
      message: `Trancamento Solicitado`,
    };
  } catch {
    return {
      open: true,
      error: true,
      message: `Erro ao solicitar trancamento`,
    };
  }
}
