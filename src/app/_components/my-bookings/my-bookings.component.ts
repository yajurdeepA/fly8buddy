import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from 'src/app/_models/booking';
import { User } from 'src/app/_models/user.model';
import { UserDataService } from 'src/app/_services/user-data.service';
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.css']
})
export class MyBookingsComponent implements OnInit{
  user:User = {email:''}
  bookings:Booking[];
  constructor(private router:Router,private user_service:UserDataService){}
  ngOnInit(): void {
    if(sessionStorage.getItem('user')){
      this.user.email = sessionStorage.getItem('user');
       this.user_service.getUserBookings(this.user).subscribe({
        next:data => {
          this.bookings = data;
          console.log(this.bookings);
        }
       }) 
    }else{
      this.router.navigate(['/login']);
    }
  }

  convetToPDF(i:number){
    var data = document.getElementById(`booking${i}`);
    html2canvas(data).then(canvas => {
    // Few necessary setting options
    var imgWidth = 208;
    var pageHeight = 295;
    var imgHeight = canvas.height * imgWidth / canvas.width;
    var heightLeft = imgHeight;

    const contentDataURL = canvas.toDataURL('image/png')
    let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
    var position = 0;
    pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
    pdf.save('new-file.pdf'); // Generated PDF
    });
  }
}
