import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaDisponibilidadeFuncionariosComponent } from './consulta-disponibilidade-funcionarios.component';

describe('ConsultaDisponibilidadeFuncionariosComponent', () => {
  let component: ConsultaDisponibilidadeFuncionariosComponent;
  let fixture: ComponentFixture<ConsultaDisponibilidadeFuncionariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaDisponibilidadeFuncionariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaDisponibilidadeFuncionariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
