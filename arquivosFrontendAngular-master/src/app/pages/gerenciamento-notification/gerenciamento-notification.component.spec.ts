import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciamentoNotificationComponent } from './gerenciamento-notification.component';

describe('GerenciamentoNotificationComponent', () => {
  let component: GerenciamentoNotificationComponent;
  let fixture: ComponentFixture<GerenciamentoNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GerenciamentoNotificationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GerenciamentoNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
