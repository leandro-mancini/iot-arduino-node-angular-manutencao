import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelValetasComponent } from './painel-valetas.component';

describe('PainelValetasComponent', () => {
  let component: PainelValetasComponent;
  let fixture: ComponentFixture<PainelValetasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PainelValetasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelValetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
