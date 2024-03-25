import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioLivrosPage } from './usuario-livros.page';

const routes: Routes = [
  {
    path: '',
    component: UsuarioLivrosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioLivrosPageRoutingModule {}
