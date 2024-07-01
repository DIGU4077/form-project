import { Component,OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { MatTableModule } from '@angular/material/table';



export interface Geo {
  lat: string;
  lng: string;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  
  data:User[] | undefined;
  displayedColumns: string[] = ['name', 'email', 'city', 'companyname'];

 constructor(private apiservice:ApiService)
 {}
  
 ngOnInit(): void {
   this.apiservice.getData().subscribe(
    (response:User[])=>{
      console.log(response);
      this.data=response;
    }
    , (error)=>
      {
         console.error('error in fetching data',error);
      }
   );

  }


}
