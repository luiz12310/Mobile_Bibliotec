import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.page.html',
  styleUrls: ['./livro.page.scss'],
})
export class LivroPage implements OnInit {

  constructor(public http: HttpClient) { }

  dados:any;
  url = "http://localhost:52737/Forms/livrosUsuario.aspx";

  // Livro
  nomeLivro: any;
  AnoEdicao: any
  arrayAutores: any;
  descricao: any;
  categorias = "";
  disponobilidade: any;
  autores = "";
  arrayCategorias: any;
  

  ngOnInit() {
    this.http.get(this.url + "?livro=" + localStorage.getItem("codigoLivro")).subscribe(data =>{
      this.dados = data;

      this.nomeLivro = this.dados.Titulo;
      this.AnoEdicao = this.dados.AnoEdicao;
      this.descricao = this.dados.Sinopse;
      this.disponobilidade = this.dados.Disponibilidade;
      
      this.arrayAutores = this.dados.Autor;
      for (let i = 0; i < this.arrayAutores.length; i++) {
        this.autores += this.arrayAutores[i].Nome + ", ";

        if(this.arrayAutores.length - 1 == i)
        {
          this.autores = this.autores.substring(0, this.autores.length - 2)
        }
      }

      this.arrayCategorias = this.dados.Categoria;
      for (let i = 0; i < this.arrayCategorias.length; i++) {
        this.categorias += this.arrayCategorias[i].Nome + ", ";

        if(this.arrayCategorias.length - 1 == i)
        {
          this.categorias = this.categorias.substring(0, this.categorias.length - 2)
        }
      }
    })
  }

}
