import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../../models/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private route: Router) { }

  onSubmit(login:any): Observable<any>{
    console.log(login);
    const httphHeaders = new HttpHeaders();
    httphHeaders.append('Content-Type', 'application/json');
    httphHeaders.append('Access-Control-Allow-Origin', '*');
    return this.http.post<any>("http://localhost:3000/auth/login", login, { headers: httphHeaders });
  }





  // getCurrentUser(): User | null{
  //   const user = localStorage.getItem("user")
  //   if(user===null){
  //     return null;
  //   }else{
  //     return JSON.parse(user);
  //   }
  // }

  // isLogin():boolean {
  //   let user = localStorage.getItem('user')
  //   return user!=null? true:false
  // }
}

