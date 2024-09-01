import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArquivosRecentesComponent } from './arquivos-recentes.component';

describe('ArquivosRecentesComponent', () => {
  let component: ArquivosRecentesComponent;
  let fixture: ComponentFixture<ArquivosRecentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArquivosRecentesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArquivosRecentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
