import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsuarioLivrosPage } from './usuario-livros.page';

describe('UsuarioLivrosPage', () => {
  let component: UsuarioLivrosPage;
  let fixture: ComponentFixture<UsuarioLivrosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UsuarioLivrosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
