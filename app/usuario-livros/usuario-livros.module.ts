import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuarioLivrosPageRoutingModule } from './usuario-livros-routing.module';

import { UsuarioLivrosPage } from './usuario-livros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuarioLivrosPageRoutingModule
  ],
  declarations: [UsuarioLivrosPage]
})
export class UsuarioLivrosPageModule {}
