import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciamentoDisciplinaComponentsComponent } from './gerenciamento-disciplina-components.component';

describe('GerenciamentoDisciplinaComponentsComponent', () => {
  let component: GerenciamentoDisciplinaComponentsComponent;
  let fixture: ComponentFixture<GerenciamentoDisciplinaComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GerenciamentoDisciplinaComponentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GerenciamentoDisciplinaComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
