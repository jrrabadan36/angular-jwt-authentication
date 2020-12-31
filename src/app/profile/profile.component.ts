import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser: any;
  currentToken: any;

  constructor(private token: TokenStorageService) { }

  ngOnInit(): void {console.log(this.token.getToken())
    this.currentUser = this.token.getUser();
    this.currentToken = this.token.getToken();
  }

}
