import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbEtapaComponent } from './breadcrumb-etapa.component';

describe('BreadcrumbEtapaComponent', () => {
  let component: BreadcrumbEtapaComponent;
  let fixture: ComponentFixture<BreadcrumbEtapaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreadcrumbEtapaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BreadcrumbEtapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
