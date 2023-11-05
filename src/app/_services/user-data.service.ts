import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../_models/user.model';
import { HttpClient } from '@angular/common/http';
import { Booking } from '../_models/booking';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http:HttpClient) { }
  token:string;
  private url = "http://localhost:3000";
createUser(user:User){
  return this.http.post( `${this.url}/createUser`,user);
}

checkLogin(user:User):Observable<{message:string, token:string}>{
  return this.http.post<{message:string, token:string}>(`${this.url}/login`,user);
  
}

getUser(user:User):Observable<User>{
  return this.http.post<User>( `${this.url}/getUser`,user);
}

getUserBookings(user:User):Observable<Booking[]>{
  return this.http.post<Booking[]>(`${this.url}/getUserBookings`,user);
}

setToken(token:string){
  this.token = token;
}

getToken():string{
  return this.token;
}

deleteToken(){
  delete this.token;
}

}
