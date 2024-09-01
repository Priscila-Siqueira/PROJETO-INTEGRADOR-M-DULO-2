import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalArquivoListaCompartilhadaComponent } from './modal-arquivo-lista-compartilhada.component';

describe('ModalArquivoListaCompartilhadaComponent', () => {
  let component: ModalArquivoListaCompartilhadaComponent;
  let fixture: ComponentFixture<ModalArquivoListaCompartilhadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalArquivoListaCompartilhadaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalArquivoListaCompartilhadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
