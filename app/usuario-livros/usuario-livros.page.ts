import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-usuario-livros',
  templateUrl: './usuario-livros.page.html',
  styleUrls: ['./usuario-livros.page.scss'],
})
export class UsuarioLivrosPage implements OnInit {

  constructor(private http: HttpClient) { }

  dados1: any;
  dados2: any;
  url1 = "http://localhost:52737/Forms/usuario.aspx";
  url2 = "http://localhost:52737/Forms/livrosUsuario.aspx";

  // User
  nomeUser: any;
  login: any;
  bloqueado: any;
  dtBloqueio: any;
  nomeTipoUsuario: any;
  dtDesbloqueio: any;

  // Livro
  nomeLivro: any;
  sinopseLivro: any;
  anoLivro: any;
  ISBNLivro: any;
  Editora: any;
  
  arrayAutores: any;
  categorias = "";
  disponobilidade: any;
  autores = "";
  arrayCategorias: any;

  // "Gambiarras"
  fraseSemLivro = "Cliente não possui livros emprestados";

  ngOnInit() {
    //#region Carregar Dados Usuário

    this.http.get(this.url1 + "?loginUsuario=" + localStorage.getItem("login")).subscribe(data =>{
      this.dados1 = data;

      this.login = this.dados1.login;
      this.nomeUser = this.dados1.nome;

      if(this.dados1.bloqueado == true){
        this.bloqueado = "Sim";        

        const matches = this.dados1.dtBloqueio.match(/\d+/);
        
        if(matches) 
        {
          const ticks = parseInt(matches[0], 10);
          const dataBloqueio = this.ConverterTicksParaData(ticks);
          const dataObjeto = new Date(dataBloqueio);          
          const dataDesbloqueio = this.SomarDias(dataObjeto); 
          const dataFormatada = this.FormatarDataParaDDMMYYYY(dataDesbloqueio);
          this.dtBloqueio = dataFormatada;
        } 
        else 
        {
          console.error("Formato de data inválido");
        }
      }
      else{
        this.bloqueado = "Não";
        this.dtBloqueio = "Não possui";
      }

      this.nomeTipoUsuario = this.dados1.tipoUsuario.nome;
    })

    //#endregion

    //#region Carregar dados Livro

    this.http.get(this.url2 + "?loginUsuario=" + localStorage.getItem("login")).subscribe(data =>{
      this.dados2 = data;
      
      if(this.dados2.length !== 0)
      {
        this.fraseSemLivro = "";
      }
    })

    //#endregion
  }

  AbirModal(livro:any){
    this.nomeLivro = livro.Titulo;

    if(livro.Sinopse != "")
    {
      this.sinopseLivro = livro.Sinopse;
    }
    else
    {
      this.sinopseLivro = "Não possui descrição"
    }

    this.anoLivro = livro.AnoEdicao;
    this.ISBNLivro = livro.ISBN;
    this.Editora = livro.Editora.Nome;
    this.disponobilidade = livro.Disponibilidade;

    this.arrayAutores = livro.Autor;
      for (let i = 0; i < this.arrayAutores.length; i++) {
        this.autores += this.arrayAutores[i].Nome + ", ";

        if(this.arrayAutores.length - 1 == i)
        {
          this.autores = this.autores.substring(0, this.autores.length - 2)
        }
      }

      this.arrayCategorias = livro.Categoria;
      for (let i = 0; i < this.arrayCategorias.length; i++) {
        this.categorias += this.arrayCategorias[i].Nome + ", ";

        if(this.arrayCategorias.length - 1 == i)
        {
          this.categorias = this.categorias.substring(0, this.categorias.length - 2)
        }
      }
  }

  ConverterTicksParaData(ticks: any): Date {
    const epoch = new Date(0);
    const data = new Date(epoch.getTime() + ticks);
    return data;
  }

  FormatarDataParaDDMMYYYY(data: Date): string {
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const ano = data.getFullYear();

    return `${dia}/${mes}/${ano}`;
  }

  SomarDias(data: any): Date {
    const novaData = new Date(data);
    novaData.setDate(novaData.getDate() + 15);
    return novaData;
  }
}
