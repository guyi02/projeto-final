export type Course = {
  period: string;
  subject: {
    sigla: string;
    titulo: string;
    status: string;
    nf: number;
    freq: number;
    dia_aula: string;
    hira: string;
  };
};
