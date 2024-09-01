import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCreateDisciplinaComponent } from './modal-create-disciplina.component';

describe('ModalCreateDisciplinaComponent', () => {
  let component: ModalCreateDisciplinaComponent;
  let fixture: ComponentFixture<ModalCreateDisciplinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalCreateDisciplinaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalCreateDisciplinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
