import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCreateProjetoComponent } from './modal-create-projeto.component';

describe('ModalCreateProjetoComponent', () => {
  let component: ModalCreateProjetoComponent;
  let fixture: ComponentFixture<ModalCreateProjetoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalCreateProjetoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalCreateProjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
