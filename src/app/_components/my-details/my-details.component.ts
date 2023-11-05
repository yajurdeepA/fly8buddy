import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/_models/user.model';
import { UserDataService } from 'src/app/_services/user-data.service';

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css']
})
export class MyDetailsComponent implements OnInit{
  user:User = {email:''};
  result:User;
  constructor (private user_service:UserDataService,private router:Router){}
  ngOnInit(): void {
    /** check if user is logged in */
    if(sessionStorage.getItem('user')){
      this.user.email = sessionStorage.getItem('user');
      
      this.user_service.getUser(this.user).subscribe({
        next: data => this.result = data
      });
    }else{
      this.router.navigate(['/login']); // redirect to login page
    }
  }
}
