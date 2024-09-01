import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnGrupoListaCompartilhadaComponent } from './btn-grupo-lista-compartilhada.component';

describe('BtnGrupoListaCompartilhadaComponent', () => {
  let component: BtnGrupoListaCompartilhadaComponent;
  let fixture: ComponentFixture<BtnGrupoListaCompartilhadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnGrupoListaCompartilhadaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BtnGrupoListaCompartilhadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
