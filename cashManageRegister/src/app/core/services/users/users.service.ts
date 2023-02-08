import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient, private route: Router) { }

  getAlluser(): Observable<any>{
    const httphHeaders = new HttpHeaders();
    httphHeaders.append('Content-Type', 'application/json');
    httphHeaders.append('Access-Control-Allow-Origin', '*');
    return this.http.get<any>("http://localhost:3000/users", { headers: httphHeaders });
  }
}
