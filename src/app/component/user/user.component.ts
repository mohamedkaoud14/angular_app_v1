import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }
  @Input('userInfo') user:User = {
    id:'',
    name:'',
    email:'',
    city:'',
  }
  ngOnInit(): void {
  }

}
