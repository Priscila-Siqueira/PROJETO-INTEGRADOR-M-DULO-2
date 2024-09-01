import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchListaCompartilhadaComponent } from './search-lista-compartilhada.component';

describe('SearchListaCompartilhadaComponent', () => {
  let component: SearchListaCompartilhadaComponent;
  let fixture: ComponentFixture<SearchListaCompartilhadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchListaCompartilhadaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchListaCompartilhadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
