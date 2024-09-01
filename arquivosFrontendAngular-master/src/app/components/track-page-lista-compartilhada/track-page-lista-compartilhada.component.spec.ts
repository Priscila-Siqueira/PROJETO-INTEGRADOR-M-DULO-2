import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackPageListaCompartilhadaComponent } from './track-page-lista-compartilhada.component';

describe('TrackPageListaCompartilhadaComponent', () => {
  let component: TrackPageListaCompartilhadaComponent;
  let fixture: ComponentFixture<TrackPageListaCompartilhadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackPageListaCompartilhadaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrackPageListaCompartilhadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
