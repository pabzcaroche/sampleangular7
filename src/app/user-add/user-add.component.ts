import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {

  user : Object;

  id : String;

  constructor(private userService : UserService) { }

  ngOnInit() {
    
  }

  save(){
    alert("Test");
  }

}
