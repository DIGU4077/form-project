import { Component } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent {
  
  user:any=
  {
    firstname:'',
    lastname:'',
    selectedDate:null,
    email:'',   
    ispresent:false

  }
   
  onDateChange(event: MatDatepickerInputEvent<Date>) {
    if(event.value)
      {
        // let date=event.value.toISOString().split[T].[0];
        const date = event.value.toISOString().split('T')[0];
        this.user.selectedDate=date;
      }
   
  }

  onSubmit() {
  console.log("userinfo",this.user);  
  this.sendEmail();
  }
  sendEmail()
  {
    const status = this.user.ispresent ? 'present' : 'absent';
    const emailMessage=`Hi ${this.user.firstname} ${this.user.lastname},
      You are marked as ${status} on ${this.user.selectedDate}.
    `;
    console.log(`Sending email to ${this.user.email}: ${emailMessage}`);

  }
  
}
