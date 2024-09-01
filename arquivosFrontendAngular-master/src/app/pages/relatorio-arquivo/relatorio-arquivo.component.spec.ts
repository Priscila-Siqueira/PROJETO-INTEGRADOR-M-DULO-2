import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioArquivoComponent } from './relatorio-arquivo.component';

describe('RelatorioArquivoComponent', () => {
  let component: RelatorioArquivoComponent;
  let fixture: ComponentFixture<RelatorioArquivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelatorioArquivoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RelatorioArquivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
