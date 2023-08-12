import { Component, OnInit } from '@angular/core';
import { LoginService } from './services/login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Sistema ACI';
  isLoggedIn = false;
  constructor(public login: LoginService) {
  }
  ngOnInit(): void {


    this.isLoggedIn = this.login.isLoggedIn();
  }
}

