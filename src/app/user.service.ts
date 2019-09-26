import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common//http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get("http://reqres.in/api/users");
  }
  
  getUser(id : String){
    return this.http.get("http://reqres.in/api/users/"+ id);
  }
}
