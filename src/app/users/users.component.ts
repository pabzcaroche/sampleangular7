import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users : Object;

  constructor(private data : UserService) { }

  ngOnInit() {
    this.data.getUsers().subscribe( data => {
      this.users = data;
    })
  }

}
