import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraPesquisaDisciplinaComponent } from './barra-pesquisa-disciplina.component';

describe('BarraPesquisaDisciplinaComponent', () => {
  let component: BarraPesquisaDisciplinaComponent;
  let fixture: ComponentFixture<BarraPesquisaDisciplinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarraPesquisaDisciplinaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BarraPesquisaDisciplinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
