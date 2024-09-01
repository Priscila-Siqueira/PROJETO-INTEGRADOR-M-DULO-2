import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbDisciplinaComponent } from './breadcrumb-disciplina.component';

describe('BreadcrumbDisciplinaComponent', () => {
  let component: BreadcrumbDisciplinaComponent;
  let fixture: ComponentFixture<BreadcrumbDisciplinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreadcrumbDisciplinaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BreadcrumbDisciplinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
