import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {

  content: string;
  form: any = {};

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    
  }

  onSubmit() {
    this.userService.getAdminBoard(this.form).subscribe(
      data => {
        console.log(data);
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }

}
