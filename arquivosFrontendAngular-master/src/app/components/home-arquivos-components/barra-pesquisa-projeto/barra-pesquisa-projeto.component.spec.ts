import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraPesquisaProjetoComponent } from './barra-pesquisa-projeto.component';

describe('BarraPesquisaProjetoComponent', () => {
  let component: BarraPesquisaProjetoComponent;
  let fixture: ComponentFixture<BarraPesquisaProjetoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarraPesquisaProjetoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BarraPesquisaProjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
