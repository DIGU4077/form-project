import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './task/task.component';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
 private apiurl='https://jsonplaceholder.typicode.com/users';
 private deletapiurl='https://jsonplaceholder.typicode.com/posts';
  constructor(private http:HttpClient) { }

  getData():Observable<User[]>
  {
    return this.http.get<User[]>(this.apiurl);
  }
 
  saveData(formdata:any)
  {
     return this.http.post(this.apiurl,formdata);
  }
  
  deletpost(id:number):Observable<any>
  {

    const url=`${this.deletapiurl}/${id}`;
    return this.http.delete(url);
  }
 
  updatePost(id: number, updatedData: any): Observable<any> {
    const url = `${this.deletapiurl}/${id}`;
    return this.http.put(url, updatedData);
  }
}
