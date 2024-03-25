import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public http: HttpClient, public nav: NavController) {
    localStorage.clear();
  }

  login: any;
  password: any;
  url = "http://localhost:52737/Forms/index.aspx";
  dados: any;
  

  VerificarAcesso(login: any, password: any){
    if(login != "" && login != null && password != "" && password != null)
    {
      this.http.get(this.url + "?login=" + login + "&password=" + password).subscribe(data => 
        {this.dados = data
      
        if(this.dados == "False")
        {
          alert("usuário e/ou senha inválidos")
        }
        else{
          localStorage.setItem("login", login);
          this.nav.navigateForward("/usuario-livros");
        }
      });
      
    }
    else
    {
      alert("Preenchar os campos indicados!");
    }
  }
}
