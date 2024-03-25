import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //acrescentamos esse import para ler o provider
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage{

  constructor(public http: HttpClient, public nav: NavController) {
    this.CarregarPagina();
  }

  url = "http://localhost:52737/Forms/categorias.aspx";
  dados: any;
  pesquisa: any;
  login: any;

  CarregarPagina(){
    this.http.get(this.url).subscribe(data => {
      this.dados = data;
    })
  }

  BuscarLivroCategoria(codigoCategoria: any, nomeCategoria: any){
    this.login = localStorage.getItem("login")
    localStorage.clear();
    localStorage.setItem("login", this.login)
    localStorage.setItem("codigoCategoria", codigoCategoria);
    localStorage.setItem("nomeCategoria", nomeCategoria)
    this.nav.navigateForward("/pesquisar");
  }

  BuscarLivroNome(nomeLivro: any){
    this.login = localStorage.getItem("login")
    localStorage.clear();
    localStorage.setItem("nomeLivro", nomeLivro);
    localStorage.setItem("login", this.login)
    this.nav.navigateForward("/pesquisar");
  }
}
