import { User } from './../user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private _http:HttpClient) { }
  getUsers(){
    return this._http.get<User[]>(this.apiUrl)
  }
  sendData(post){
    this._http.post(this.apiUrl,post).toPromise().then(data => {
      console.log(data);
    })
  }
}
