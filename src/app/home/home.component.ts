import { AuthService } from 'src/app/service/auth.service';
import { Component, OnInit } from '@angular/core';


// tslint:disable-next-line: use-pipe-transform-interface
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
user: string;

  constructor(public authService: AuthService) {
    this.user = this.authService.display;
  }

  ngOnInit() {
  }

}
