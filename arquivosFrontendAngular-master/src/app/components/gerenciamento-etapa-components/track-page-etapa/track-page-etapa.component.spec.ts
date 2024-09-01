import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackPageEtapaComponent } from './track-page-etapa.component';

describe('TrackPageEtapaComponent', () => {
  let component: TrackPageEtapaComponent;
  let fixture: ComponentFixture<TrackPageEtapaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackPageEtapaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrackPageEtapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
