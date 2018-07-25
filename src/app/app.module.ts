import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GlobusStyleModule } from 'ngx-globus-style';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AngularMaterialModule } from './shared/angular-material/angular-material.module';
import { ConsultaDisponibilidadeFuncionariosComponent } from './core/pages/consulta-disponibilidade-funcionarios/consulta-disponibilidade-funcionarios.component';
import { PainelValetasComponent } from './core/pages/painel-valetas/painel-valetas.component';
import { MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    ConsultaDisponibilidadeFuncionariosComponent,
    PainelValetasComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    GlobusStyleModule,
    NgbModule.forRoot(),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    AngularMaterialModule,
    SocketIoModule.forRoot(config),
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
