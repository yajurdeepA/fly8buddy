import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/_models/user.model';
import { SharedDataService } from 'src/app/_services/shared-data.service';
import { UserDataService } from 'src/app/_services/user-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  isModalOpen = false;
  user:User = {email:'',password:''};
  serverError:string;
  constructor(private router:Router,private user_service:UserDataService,private sharedDataService:SharedDataService ) { }

  ngOnInit(): void {
    // Modal is initially closed
    this.isModalOpen = true;
  }

  openModal() {
    // Set the variable to true to open the modal
    this.isModalOpen = true;
  }

  closeModal() {
    // Set the variable to false to close the modal
    this.isModalOpen = false;
    this.router.navigate(['/home']);
  }

  login(){
    this.user_service.checkLogin(this.user).subscribe({
      next:(response:any)=>{
        if(response.token){
          
          this.sharedDataService.LoggedIn(true);
          // set user email in session
          sessionStorage.setItem('user',this.user.email);
          this.user_service.setToken(response.token);
          this.router.navigate(["/flight"]);
        }
      },
      error:err=>{
        this.serverError = err.message;
      }
    });
  }

  
}
