import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {

  constructor(private http: HttpClient, private nav: NavController) { }

  frase = document.querySelector(".fraseTroca");
  divUsuarios = document.querySelector("#divUsuarios");


  dados: any;
  NomeUsuario: any;
  url = "http://localhost:52737/Forms/usuarios.aspx";

  ngOnInit() {
    this.http.get(this.url).subscribe(data =>{
      this.dados = data;
    })

  }

  BuscarUsuario(nomeUsuario: any){
    this.http.get(this.url + "?nomeUsuario=" + nomeUsuario).subscribe(data =>{
      this.dados = data;
      console.log(this.dados)
    })
  }

  BuscarLivroUsuario(codigoUsuario: any){
    localStorage.setItem("login", codigoUsuario);
    this.nav.navigateForward("/usuario-livros");
  }

}
