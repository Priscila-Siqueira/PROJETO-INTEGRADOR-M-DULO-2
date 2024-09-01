import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackPageDisciplinaComponent } from './track-page-disciplina.component';

describe('TrackPageDisciplinaComponent', () => {
  let component: TrackPageDisciplinaComponent;
  let fixture: ComponentFixture<TrackPageDisciplinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackPageDisciplinaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrackPageDisciplinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
