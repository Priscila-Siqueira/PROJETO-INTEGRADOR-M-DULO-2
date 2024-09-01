import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginjwtComponent } from './loginjwt.component';

describe('LoginjwtComponent', () => {
  let component: LoginjwtComponent;
  let fixture: ComponentFixture<LoginjwtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginjwtComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginjwtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
