import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciamentoEtapaComponentsComponent } from './gerenciamento-etapa-components.component';

describe('GerenciamentoEtapaComponentsComponent', () => {
  let component: GerenciamentoEtapaComponentsComponent;
  let fixture: ComponentFixture<GerenciamentoEtapaComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GerenciamentoEtapaComponentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GerenciamentoEtapaComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
