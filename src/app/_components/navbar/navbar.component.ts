import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';
import { SharedDataService } from 'src/app/_services/shared-data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  @ViewChild(LoginComponent) loginModal: LoginComponent;
  isLoggedOut:boolean; 
  isLoggedIn:boolean; 

  constructor(private router:Router,private sharedDataService:SharedDataService){}
  logout(){
    alert("you will be logged out");
    this.sharedDataService.LoggedOut(false);
    // remove user session
    sessionStorage.removeItem('user');
    this.router.navigate(['/login']);


  }
  ngOnInit(): void {
    this.sharedDataService.isLoggedIn$.subscribe(data => {
      this.isLoggedIn = data;
      this.isLoggedOut = !data;
    })
  }
  openLoginModal() {
    this.router.navigate(['/login']);     
  }

}
