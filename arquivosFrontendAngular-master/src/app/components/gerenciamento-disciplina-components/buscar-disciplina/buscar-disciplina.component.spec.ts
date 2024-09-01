import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarDisciplinaComponent } from './buscar-disciplina.component';

describe('BuscarDisciplinaComponent', () => {
  let component: BuscarDisciplinaComponent;
  let fixture: ComponentFixture<BuscarDisciplinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscarDisciplinaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuscarDisciplinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
