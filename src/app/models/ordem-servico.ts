import { Veiculo } from './veiculo';
import { Funcionario } from './funcionario';

export class OrdemServico {
  id: Number;
  numero: Number;
  pause: Boolean;
  play: Boolean;
  finalizado: Boolean;
  veiculo: Veiculo;
  funcionarios: Array<Funcionario>;

  constructor() {
    this.play = null;
  }
}
