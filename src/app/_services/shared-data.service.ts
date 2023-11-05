import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../_models/user.model';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private dataSubjectLogin = new BehaviorSubject<boolean>(this.hasSession());
  //set initial value based on session
  private hasSession() : boolean{
    return !!sessionStorage.getItem('user');
  }
  isLoggedIn$ = this.dataSubjectLogin.asObservable();
  
  LoggedIn(newValue:boolean){
    this.dataSubjectLogin.next(true);
  }

  LoggedOut(newValue:boolean){
    this.dataSubjectLogin.next(false);
  }
  constructor() { }
}
