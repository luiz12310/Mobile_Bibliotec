import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //acrescentamos esse import para ler o provider
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-pesquisar',
  templateUrl: './pesquisar.page.html',
  styleUrls: ['./pesquisar.page.scss'],
})
export class PesquisarPage{

  constructor(public http: HttpClient, public nav: NavController) {
    this.CarregarPagina();
  }

  url = "http://localhost:52737/Forms/livros.aspx";
  dados: any;

  nomeCategoria : any;

  CarregarPagina(){    
    if(localStorage.getItem("codigoCategoria") != null){
      this.http.get(this.url + "?categoria=" + localStorage.getItem("codigoCategoria")).subscribe(data => {
        this.dados = data;
      })      
    }

    if(localStorage.getItem("nomeCategoria") != null){
      this.nomeCategoria = "de " + localStorage.getItem("nomeCategoria");
    }

    if(localStorage.getItem("nomeLivro") != null){
      if(localStorage.getItem("nomeLivro") != "undefined"){
        this.http.get(this.url + "?nomeLivro=" + localStorage.getItem("nomeLivro")).subscribe(data => {
          this.dados = data;
        })      
      }
      else{
        this.http.get(this.url).subscribe(data => {
          this.dados = data;
        })
      }
    }    
  }

  DetalhesLivro(codigoLivro:any){
    localStorage.setItem("codigoLivro", codigoLivro);
    this.nav.navigateForward("/livro");
  }
}
