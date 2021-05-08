import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styles: [
  ]
})
export class DeleteUserComponent implements OnInit {
  id: string = "";
  subscriber: any;

  constructor(private myService: UsersService,
    myAR: ActivatedRoute,
    private router: Router) { this.id = myAR.snapshot.params.id;}

  ngOnInit(): void {
  }

  deleteUser() {
    this.subscriber = this.myService.deleteUser(this.id).subscribe({
      next: () => {
        this.subscriber.unsubscribe();
        return this.router.navigateByUrl("");
      },
    });
  }

}
