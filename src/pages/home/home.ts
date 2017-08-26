import { Component } from '@angular/core';
import { GithubProvider } from '../../providers/github/github';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  userInfo:any = [];
  constructor(private _github: GithubProvider) {

  }

  testDojo() {
    console.log("Testing dojo...");
    this._github.buscarUsuario("ceballos1019").then((data) => {
      this.userInfo = data;
      console.log(this.userInfo);
    }
    );
  }

}
