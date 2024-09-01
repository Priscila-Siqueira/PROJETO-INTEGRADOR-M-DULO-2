import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraPesquisaEtapaComponent } from './barra-pesquisa-etapa.component';

describe('BarraPesquisaEtapaComponent', () => {
  let component: BarraPesquisaEtapaComponent;
  let fixture: ComponentFixture<BarraPesquisaEtapaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarraPesquisaEtapaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BarraPesquisaEtapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
