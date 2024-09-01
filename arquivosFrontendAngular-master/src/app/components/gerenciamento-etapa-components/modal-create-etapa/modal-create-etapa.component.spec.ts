import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCreateEtapaComponent } from './modal-create-etapa.component';

describe('ModalCreateEtapaComponent', () => {
  let component: ModalCreateEtapaComponent;
  let fixture: ComponentFixture<ModalCreateEtapaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalCreateEtapaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalCreateEtapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
