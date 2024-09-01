import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciamentoEtapasComponent } from './gerenciamento-etapas.component';

describe('GerenciamentoEtapasComponent', () => {
  let component: GerenciamentoEtapasComponent;
  let fixture: ComponentFixture<GerenciamentoEtapasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GerenciamentoEtapasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GerenciamentoEtapasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
