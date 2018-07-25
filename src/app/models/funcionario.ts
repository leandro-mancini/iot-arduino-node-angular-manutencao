export class Funcionario {
  matricula: Number;
  nome: String;
  situacao: String;
  tipo: String;
  codigoAccess: String;
  active: Boolean;

  constructor(matricula, nome, situacao, tipo, codigoAccess) {
    this.matricula = matricula;
    this.nome = nome;
    this.situacao = situacao;
    this.tipo = tipo;
    this.codigoAccess = codigoAccess;
    this.active = false;
  }
}
