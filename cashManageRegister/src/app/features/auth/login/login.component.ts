import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: FormGroup | any
  constructor(private http:HttpClient, private route:Router, private auth: AuthService) { }

  ngOnInit(): void {
    this.login=new FormGroup({
      'email': new FormControl(),
      'password': new FormControl()
    })
  }

  onSubmit(){
      //console.log(this.login.value);
      this.auth.onSubmit(this.login.value).subscribe(
              {
                next:(data)=>{
                  console.log(data);
                  if(data.message != "success"){
                    this.route.navigate(['/']);
                    return
                  }
                  this.route.navigate(['admin/dasboard'])
                },
                error: (error)=>{
                  console.log(error);

                }
              }
        ) //Appel de la méthode de connexion
      // console.log(this.auth.onSubmit(this.login));
  }

}


