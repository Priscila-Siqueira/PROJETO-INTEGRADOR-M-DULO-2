import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissionamentoUsuarioComponent } from './permissionamento-usuario.component';

describe('PermissionamentoUsuarioComponent', () => {
  let component: PermissionamentoUsuarioComponent;
  let fixture: ComponentFixture<PermissionamentoUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PermissionamentoUsuarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PermissionamentoUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
