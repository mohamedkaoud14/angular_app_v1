import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styles: [
  ]
})
export class UserRegisterComponent implements OnInit, OnDestroy {

  constructor(private myService: UsersService, private router: Router) { }
  id: any = "";
  name: string = "";
  email: string = "";
  city: string = "";
  subscriber: any;
  
  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }

  ngOnInit(): void {
  }

  addUser(myForm: any) {
    this.subscriber = this.myService.getUsers().subscribe({
      next: (response) => {
        let users: User[] = response.body as User[];
        if (users.length === 0) {
          this.id = 1;
        } else {
          this.id = users[users.length - 1].id + 1;
        }

        let newuser = { ...{ id: this.id }, ...myForm.form.value };
        this.subscriber = this.myService.addUser(newuser).subscribe({
          next: () => {
            this.myService.isUpdated = true;
          },
        });
        this.city = "";
        this.name = "";
        this.email = "";
        this.id = "";
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

}
