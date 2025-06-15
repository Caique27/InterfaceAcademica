import axios from "axios";

export async function buscarDados() {
  var formattedData = [
    {
      category: "Disciplinas atuais",
      courses: [
        {
          id: "0000000004",
          name: "Cálculo I",
          credits: "3",
          days: "Seg. e Qua.",
          time: "16h às 18h",
          status: "Matriculado",
          nota: 8.5,
          frequencia: 75,
          nome_professor: "João de Souza",
          email_professor: "joao@usp.br",
          telefone_professor: "(11)91234-5678",
        },
        {
          id: "0000000005",
          name: "Algoritmos e Estruturas de Dados II",
          credits: "4",
          days: "Qua. e Sex",
          time: "19h às 22h",
          status: "Trancada",
          nota: 8.5,
          frequencia: 75,
          nome_professor: "João de Souza",
          email_professor: "joao@usp.br",
          telefone_professor: "(11)91234-5678",
        },
        {
          id: "0000000011",
          name: "Matemática Discreta",
          credits: "3",
          days: "Seg. e Qua.",
          time: "19h às 22h",
          status: "Trancamento Solicitado",
          nota: 8.5,
          frequencia: 75,
          nome_professor: "João de Souza",
          email_professor: "joao@usp.br",
          telefone_professor: "(11)91234-5678",
        },
      ],
    },
    {
      category: "Disciplinas já cursadas",
      courses: [
        {
          id: "0000000004",
          name: "Computação Orientada à Objetos",
          credits: "3",
          days: "1° Sem",
          time: "2024",
          status: "Cursada",
          nota: 8.5,
          frequencia: 75,
          nome_professor: "João de Souza",
          email_professor: "joao@usp.br",
          telefone_professor: "(11)91234-5678",
        },
        {
          id: "0000000005",
          name: "Algoritmos e Estruturas de Dados I",
          credits: "4",
          days: "1° Sem",
          time: "2024",
          status: "Cursada",
          nota: 8.5,
          frequencia: 75,

          nome_professor: "João de Souza",
          email_professor: "joao@usp.br",
          telefone_professor: "(11)91234-5678",
        },
        {
          id: "0000000011",
          name: "Introdução à Análise de Algoritmos",
          credits: "3",
          days: "2° Sem",
          time: "2023",
          status: "Cursada",
          nota: 8.5,
          frequencia: 75,

          nome_professor: "João de Souza",
          email_professor: "joao@usp.br",
          telefone_professor: "(11)91234-5678",
        },
      ],
    },
  ];
  return formattedData;
}

export async function solicitarTrancamento(idMatricula) {
  try {
    // await query(`
    //update consome set
    //quantidade = ${quantidade} where
    //idconsome = '${idConsumo}';
    //`)
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
