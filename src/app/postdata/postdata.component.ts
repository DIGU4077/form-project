import { Component,OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-postdata',
  templateUrl: './postdata.component.html',
  styleUrls: ['./postdata.component.css']
})
export class PostdataComponent implements OnInit {

   constructor(private apiservice:ApiService)
   {}
  ngOnInit(): void {
  
  }

   data=
   {
    name:'',
    email:'',
    phonenumber:''
   };
   user: any[]=[];
   id:number=0;
   updateTitle:string="";
   updateid:number=0;
     submitData(data:any) {
    
    
    this.apiservice.saveData(data).subscribe((result)=>{
      console.log('Form Data:',result);
    })
  }
 
 

  deletepost(id:number):void
  {
        this.apiservice.deletpost(id).subscribe(
          response =>
            {
             alert("post deleted succefully");
             
            },
            error =>
              {
                console.error('error deleting post',error);
              }
        )
  }



  updatepost():void
  {
         const updatedData=
         {
          title:this.updateTitle,
         };
         this.apiservice.updatePost(this.updateid,updatedData).subscribe(response=>{
          alert("record updated successfully");
          console.log(response);

         },error=>
          {
            console.log("record is not updated" ,error);
          }
        )
  }

}
