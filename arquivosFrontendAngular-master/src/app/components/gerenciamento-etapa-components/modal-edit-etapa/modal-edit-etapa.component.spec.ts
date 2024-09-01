import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditEtapaComponent } from './modal-edit-etapa.component';

describe('ModalEditEtapaComponent', () => {
  let component: ModalEditEtapaComponent;
  let fixture: ComponentFixture<ModalEditEtapaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalEditEtapaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalEditEtapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
