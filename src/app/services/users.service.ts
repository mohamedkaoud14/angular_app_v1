import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
readonly baseURL:string = "https://angular-serverapp.herokuapp.com/api/v1/students"
  constructor(private myClient:HttpClient) {}
  isUpdated: boolean = false;
   getUsers()
   {
     let response = this.myClient.get(this.baseURL,{observe:"response"})
    // alert("dgsdg")
    console.log('response')
      return response
   }
   getUserById(id:string)
   {
      return this.myClient.get(`${this.baseURL}/${id}`);
   }
   addUser(user: User){
    let response = this.myClient.post(this.baseURL, user);
    return response;
   }
   deleteUser(id:string)
   {
      return this.myClient.delete(`${this.baseURL}/${id}`);
   }
   editUser(user: User){
    let response = this.myClient.patch(`${this.baseURL}/${user.id}`, user);
    return response;
  }
}
