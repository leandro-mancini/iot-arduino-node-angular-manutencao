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
    this.obterFuncionario();

    this.socket.on('arduino:data', serial => {
      serial.value = serial.value.replace(/(?:\r\n|\r|\n)/g, '');

      const filter = _.filter(this.funcionarios, ['codigoAccess', serial.value])[0];

      if (filter) {
        filter.active = !filter.active;
      }
    });
  }

  obterFuncionario() {
    this.funcionarios = new Array<Funcionario>();
    this.funcionarios[0] = new Funcionario('000001', 'Rafael', 'Ausente', 'Funilaria', 'D9:78:5E:49');
    this.funcionarios[1] = new Funcionario('000002', 'Luciano', 'Ausente', 'Mêcanica', '1');
    this.funcionarios[2] = new Funcionario('000003', 'Carlos', 'Ausente', 'Pintura', '73:63:F2:7A');
    this.funcionarios[3] = new Funcionario('000004', 'Francisco', 'Ausente', 'Funilaria', '3');
    this.funcionarios[4] = new Funcionario('000005', 'Thiago', 'Ausente', 'Mêcanica', '06:D1:58:A5');
    this.funcionarios[5] = new Funcionario('000006', 'Pedro', 'Ausente', 'Pintura', '5');

    this.orderFuncionarios = _.toArray(_.groupBy(this.funcionarios, 'tipo'));
  }

}
