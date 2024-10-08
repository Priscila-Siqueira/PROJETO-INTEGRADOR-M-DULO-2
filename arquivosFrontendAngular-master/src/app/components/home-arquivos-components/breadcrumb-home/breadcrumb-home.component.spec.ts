import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbHomeComponent } from './breadcrumb-home.component';

describe('BreadcrumbHomeComponent', () => {
  let component: BreadcrumbHomeComponent;
  let fixture: ComponentFixture<BreadcrumbHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreadcrumbHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BreadcrumbHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
