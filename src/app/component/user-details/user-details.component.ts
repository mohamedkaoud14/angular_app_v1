import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styles: [
  ]
})
export class UserDetailsComponent implements OnInit, OnDestroy {
  
  id:string="";
  user:any;
  subscriber:any;

  constructor(private myService:UsersService, myAR:ActivatedRoute, private router: Router) { 
    this.id = myAR.snapshot.params.id   
  }
  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }

  ngOnInit(): void {
    this.getUser();
  }
  getUser() {
    this.subscriber = this.myService.getUserById(this.id).subscribe({
      next:(user)=>this.user=user,
      error:(err)=>console.log(err)
    });
  }

}
