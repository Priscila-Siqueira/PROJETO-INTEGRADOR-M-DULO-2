import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCompartilhadaComponent } from './lista-compartilhada.component';

describe('ListaCompartilhadaComponent', () => {
  let component: ListaCompartilhadaComponent;
  let fixture: ComponentFixture<ListaCompartilhadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaCompartilhadaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaCompartilhadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
