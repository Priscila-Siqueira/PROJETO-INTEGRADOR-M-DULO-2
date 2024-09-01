import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarEtapaComponent } from './buscar-etapa.component';

describe('BuscarEtapaComponent', () => {
  let component: BuscarEtapaComponent;
  let fixture: ComponentFixture<BuscarEtapaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscarEtapaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuscarEtapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
