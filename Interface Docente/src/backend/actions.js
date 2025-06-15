import axios from "axios";
import Student from "../components/Student";

export async function buscarDados(courseId) {
  var formattedData = [
    {
      name: "Cálculo I",
      days: "Seg. e Qua. 16h às 18h",
      id: "001",
      students: [
        {
          id: "1234",
          name: "José da Silva",

          status: "Matriculado",
          nota: 4.5,
          frequencia: 75,
          email_aluno: "joao@usp.br",
          telefone_aluno: "(11)91234-5678",
        },
        {
          id: "5768",
          name: "Pedro Ferreira",

          status: "Trancada",
          nota: 8.5,
          frequencia: 55,
          email_aluno: "pedro@usp.br",
          telefone_aluno: "(11)91234-5678",
        },
        {
          id: "6548",
          name: "Maria Souza",

          status: "Trancamento Solicitado",
          nota: 8.5,
          frequencia: 75,
          email_aluno: "Maria@usp.br",
          telefone_aluno: "(11)91234-5678",
        },
      ],
    },
    {
      name: "Bancos de Dados II",
      days: "Seg. e Qua. 20h às 22h",
      id: "002",
      students: [
        {
          id: "1234",
          name: "Dimitri Sobrenome",

          status: "Matriculado",
          nota: 4.5,
          frequencia: 75,
          email_aluno: "dimitri@usp.br",
          telefone_aluno: "(11)91234-5678",
        },
        {
          id: "5768",
          name: "Pedro Ferreira",

          status: "Trancada",
          nota: 8.5,
          frequencia: 55,
          email_aluno: "pedro@usp.br",
          telefone_aluno: "(11)91234-5678",
        },
        {
          id: "6548",
          name: "Caique Alves",

          status: "Trancamento Solicitado",
          nota: 8.5,
          frequencia: 75,
          email_aluno: "Caique@usp.br",
          telefone_aluno: "(11)91234-5678",
        },
      ],
    },
  ];

  return formattedData;
}

export async function buscarOferecimentos() {
  const oferecimentos = [
    {
      name: "Bancos de Dados II",
      days: "Seg. e Qua. 10h às 12h",
      id: "003",
    },
    {
      name: "Bancos de Dados II",
      days: "Seg. e Qua. 20h às 22h",
      id: "002",
    },
    {
      name: "Cálculo 1",
      days: "Ter. e Qui. 19h às 22h",
      id: "001",
    },
  ];
  return oferecimentos;
}

export async function listaOferecimentos() {
  var data = await buscarOferecimentos();
  return data;
}

export async function aprovarTrancamento(idTrancamento) {
  try {
    // await query(`
    //update consome set
    //quantidade = ${quantidade} where
    //idconsome = '${idConsumo}';
    //`)
    return {
      open: true,
      error: false,
      message: `Trancamento Aprovado`,
    };
  } catch {
    return {
      open: true,
      error: true,
      message: `Erro ao aprovar trancamento`,
    };
  }
}

export async function atualizarNotas(nota, frequencia) {
  try {
    // await query(`
    //update consome set
    //quantidade = ${quantidade} where
    //idconsome = '${idConsumo}';
    //`)
    return {
      open: true,
      error: false,
      message: `Notas Atualizadas`,
    };
  } catch {
    return {
      open: true,
      error: true,
      message: `Erro ao atualizar notas`,
    };
  }
}
