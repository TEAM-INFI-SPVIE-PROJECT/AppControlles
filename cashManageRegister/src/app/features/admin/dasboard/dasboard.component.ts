import { Component } from '@angular/core';
import { User } from 'src/app/core/models/user';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.css']
})
export class DasboardComponent {
  user!: User | null;
  isLoggedIn!:boolean;
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    // this.user = this.auth.getCurrentUser();
    // console.log(this.user);

    // if(this.user){
    //   this.isLoggedIn = true;
    // }else{
    //   this.isLoggedIn =false;
    // }
   }



}
