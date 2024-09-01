import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciamentoDisciplinasComponent } from './gerenciamento-disciplinas.component';

describe('GerenciamentoDisciplinasComponent', () => {
  let component: GerenciamentoDisciplinasComponent;
  let fixture: ComponentFixture<GerenciamentoDisciplinasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GerenciamentoDisciplinasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GerenciamentoDisciplinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
