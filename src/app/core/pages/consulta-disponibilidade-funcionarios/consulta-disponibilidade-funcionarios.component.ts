import { Component, OnInit } from '@angular/core';
import { Funcionario } from '../../../models';
import { Socket } from 'ngx-socket-io';

import * as _ from 'lodash';

@Component({
  selector: 'app-consulta-disponibilidade-funcionarios',
  templateUrl: './consulta-disponibilidade-funcionarios.component.html',
  styleUrls: ['./consulta-disponibilidade-funcionarios.component.scss']
})
export class ConsultaDisponibilidadeFuncionariosComponent implements OnInit {
  funcionarios: Array<Funcionario>;
  orderFuncionarios: any;

  constructor(
    private socket: Socket
  ) { }

  ngOnInit() {
    this.obterFuncionarios();
    this.checkSocket();
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

    this.orderFuncionarios = _.toArray(_.groupBy(this.funcionarios, 'tipo'));
  }

  checkSocket() {
    this.socket.on('arduino:data', serial => {
      const codigoAcess = serial.value.replace(/(?:\r\n|\r|\n)/g, '');

      console.log(codigoAcess);

      const filter = _.filter(this.funcionarios, ['codigoAccess', codigoAcess])[0];

      if (filter) {
        filter.active = !filter.active;
      }
    });
  }

}
