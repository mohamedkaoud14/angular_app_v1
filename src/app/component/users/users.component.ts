import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: []
})
export class UsersComponent implements OnInit {

  constructor(private myService:UsersService) { }
  subscriber: any;
  users: User[] = [];
  searchValue: string = "";

  ngOnDestroy(): void{
    this.subscriber.unsubscribe();
  }

  ngOnInit(): void {
    this.loadPage();
  }

  ngDoCheck(): void{
    if (this.myService.isUpdated){
      this.loadPage();
      this.myService.isUpdated = false;
    }
  }

  loadPage(){
    this.subscriber = this.myService.getUsers()
    .subscribe({
      next:(data)=>{
          this.users = data.body as User[];
          
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

  search(event:Event){
    this.subscriber = this.myService.getUsers().subscribe({
      next:(data)=>{
       let userArray: User[] = data.body as User[];
       if (userArray.length > 0)
        {
          this.users = userArray.filter((element: User) => {
            return element.name.toLowerCase().includes(this.searchValue.toLowerCase());
          })
        }
    },
    error:(err)=>{
      console.log(err);
    }
    })
  }

}
