import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditDisciplinaComponent } from './modal-edit-disciplina.component';

describe('ModalEditDisciplinaComponent', () => {
  let component: ModalEditDisciplinaComponent;
  let fixture: ComponentFixture<ModalEditDisciplinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalEditDisciplinaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalEditDisciplinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
