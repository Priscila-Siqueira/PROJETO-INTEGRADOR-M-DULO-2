import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeAtivoComponent } from './badge-ativo.component';

describe('BadgeAtivoComponent', () => {
  let component: BadgeAtivoComponent;
  let fixture: ComponentFixture<BadgeAtivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BadgeAtivoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BadgeAtivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
