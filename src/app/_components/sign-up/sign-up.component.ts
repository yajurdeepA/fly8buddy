import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/_models/user.model';
import { UserDataService } from 'src/app/_services/user-data.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{
  
  user!:User; 
  serverError:string;
  constructor(private user_service:UserDataService,private router:Router){}
  ngOnInit(): void {
   
  }
  

  createUser(registrationForm:NgForm){
    this.user = {
      firstName: registrationForm.value.firstName,
      lastName : registrationForm.value.lastName,
      email : registrationForm.value.email,
      password:registrationForm.value.password,
      address1:registrationForm.value.address1,
      address2:registrationForm.value.address2,
      city:registrationForm.value.city,
      state:registrationForm.value.state,
      zip:registrationForm.value.zip

    };
       
      this.user_service.createUser(this.user).subscribe({
        next:(response:any)=>{
          alert(response.message);
          this.router.navigate(['/login']);
        },
        error:err=>this.serverError = err.message
      }); 
  }
}
