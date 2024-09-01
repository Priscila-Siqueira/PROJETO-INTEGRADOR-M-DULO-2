import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditProjetoComponent } from './modal-edit-projeto.component';

describe('ModalEditProjetoComponent', () => {
  let component: ModalEditProjetoComponent;
  let fixture: ComponentFixture<ModalEditProjetoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalEditProjetoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalEditProjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
