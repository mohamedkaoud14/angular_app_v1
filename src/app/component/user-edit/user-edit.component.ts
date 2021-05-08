import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styles: [
  ]
})
export class UserEditComponent implements OnInit {

  constructor(private myService: UsersService) { }
  subscriber: any;
  @Input("userInfo") user: User = {
    id: "",
    name: "",
    email: "",
    city: "",
  };

  ngOnInit(): void {}
  
  updateUser(myForm: any) {
    this.subscriber = this.myService.editUser(this.user).subscribe({
      next: () => {
        console.log("updates successfully");
        this.subscriber.unsubscribe();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

}
