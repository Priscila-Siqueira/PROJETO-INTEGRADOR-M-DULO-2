import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeArquivosComponentsComponent } from './home-arquivos-components.component';

describe('HomeArquivosComponentsComponent', () => {
  let component: HomeArquivosComponentsComponent;
  let fixture: ComponentFixture<HomeArquivosComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeArquivosComponentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeArquivosComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
