import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getUser(Email:any,Password:any){

    const apiUrl = 'https://taskfrontendapi.azurewebsites.net/api/user/login';
    const body = {'Email' :`${Email}`,'Password':`${Password}`};

    return this.http.post(`${apiUrl}`,body)
  }
}
