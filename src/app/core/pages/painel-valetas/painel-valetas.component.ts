import { Component, OnInit } from '@angular/core';
import { Veiculo } from '../../../models/veiculo';
import { Funcionario } from '../../../models/funcionario';
import { OrdemServico } from '../../../models/ordem-servico';
import { Socket } from 'ngx-socket-io';

import * as _ from 'lodash';

@Component({
  selector: 'app-painel-valetas',
  templateUrl: './painel-valetas.component.html',
  styleUrls: ['./painel-valetas.component.scss']
})
export class PainelValetasComponent implements OnInit {
  veiculos: Array<Veiculo>;
  veiculo: Veiculo;
  funcionarios: Array<Funcionario>;
  listafuncionario: Funcionario;

  os: OrdemServico;

  isVeiculo: boolean = false;

  constructor(
    private socket: Socket
  ) { }

  ngOnInit() {
    this.os = new OrdemServico();
    this.os.funcionarios = new Array<Funcionario>();

    this.obterVeiculos();
    this.obterFuncionarios();
    this.validarVeiculo();
    this.validarFuncionario();
  }

  obterVeiculos() {
    this.veiculos = new Array<Veiculo>();
    this.veiculos[0] = new Veiculo('0006201', 1, null, false, '04:95:C9:1A');
  }

  obterFuncionarios() {
    this.funcionarios = new Array<Funcionario>();
    this.funcionarios[0] = new Funcionario('000001', 'Carlos', 'Ausente', 'Funilaria', '1');
    this.funcionarios[1] = new Funcionario('000002', 'Luciano', 'Ausente', 'Mêcanica', '2');
    this.funcionarios[2] = new Funcionario('000003', 'Rafael', 'Ausente', 'Pintura', '90:BF:B3:56');
    this.funcionarios[3] = new Funcionario('000004', 'Francisco', 'Ausente', 'Funilaria', '4');
    this.funcionarios[4] = new Funcionario('000005', 'Thiago', 'Ausente', 'Mêcanica', '25:82:3B:5B');
    this.funcionarios[5] = new Funcionario('000006', 'Pedro', 'Ausente', 'Pintura', '6');
    this.funcionarios[6] = new Funcionario('000007', 'Miguel', 'Ausente', 'Funilaria', '69:EE:3B:5B');
    this.funcionarios[7] = new Funcionario('000008', 'Lucas', 'Ausente', 'Mêcanica', '8');
    this.funcionarios[8] = new Funcionario('000009', 'Guilherme', 'Ausente', 'Pintura', '9');
    this.funcionarios[9] = new Funcionario('000010', 'Gabriel', 'Ausente', 'Funilaria', '10');
    this.funcionarios[10] = new Funcionario('000011', 'Heitor', 'Ausente', 'Mêcanica', '11');
    this.funcionarios[11] = new Funcionario('000012', 'Felipe', 'Ausente', 'Pintura', '12');
  }

  validarVeiculo() {
    this.socket.on('arduino:data', serial => {
      serial.value = serial.value.replace(/(?:\r\n|\r|\n)/g, '');

      const filter = _.filter(this.veiculos, ['codigoAccess', serial.value])[0];

      if (filter) {
        if (!this.isVeiculo) {
          this.isVeiculo = true;

          this.veiculo = _.filter(this.veiculos, ['codigoAccess', serial.value])[0];

          if (this.veiculo) {
            this.veiculo.active = !this.veiculo.active;
            this.veiculo.valeta = '0001';

            this.os = new OrdemServico();
            this.os.funcionarios = new Array<Funcionario>();
            this.os.id = this.veiculo.osId;
            this.os.veiculo = this.veiculo;
            this.os.numero = 16;

            console.log(this.os);
          }
        }
      }
    });
  }

  validarFuncionario() {
    this.socket.on('arduino:data', serial => {
      serial.value = serial.value.replace(/(?:\r\n|\r|\n)/g, '');

      if (this.isVeiculo) {
        const filter = _.filter(this.funcionarios, ['codigoAccess', serial.value])[0];

        if (filter) {
          filter.active = !filter.active;

          const isFuncionario = _.filter(this.os.funcionarios, ['codigoAccess', serial.value])[0];

          if (!isFuncionario) {
            this.os.funcionarios.push(filter);
          }
        }
      }
    });
  }

  playPause(os: OrdemServico) {
    os.play = !os.play;
  }

  finalizar(os) {
    this.os = new OrdemServico();
    this.os.funcionarios = new Array<Funcionario>();
    this.veiculo = null;
    this.isVeiculo = false;

    this.veiculos.filter(x => {
      x.active = false;
    });
  }

}
