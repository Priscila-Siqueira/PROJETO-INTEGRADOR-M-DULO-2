import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackPageArquivoComponent } from './track-page-arquivo.component';

describe('TrackPageArquivoComponent', () => {
  let component: TrackPageArquivoComponent;
  let fixture: ComponentFixture<TrackPageArquivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackPageArquivoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrackPageArquivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
