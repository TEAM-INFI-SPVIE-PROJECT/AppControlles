import { Component } from '@angular/core';
import { User } from 'src/app/core/models/user';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { UsersService } from './../../../core/services/users/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  allusers: User | undefined
  getAllusers: any
  constructor(private user: UsersService, private auth: AuthService ){}



  getAluser() {
    this.getAllusers.getAlluser(this.allusers?.id).subscribe({
      next:(data: any)=>{

        this.getAllusers=data;
        console.log(data)
      },
      error:(err: any)=>{
        alert("erreur")
      }
      //console.log(this.declarationData);
    }
  )}
}
