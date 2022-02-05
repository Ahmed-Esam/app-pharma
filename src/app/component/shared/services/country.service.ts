import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http:HttpClient) { }

  AddCountry(Name:any){
    const apiUrl = 'https://taskfrontendapi.azurewebsites.net/api/country';
    const body = {'Name' :`${Name}`};
    let getToken: any = localStorage.getItem('Token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization':  `Bearer ${getToken}`,
      })
    };

    return this.http.post(`${apiUrl}`,body, httpOptions)
  }

  getAllCountry(){
    const apiUrl = 'https://taskfrontendapi.azurewebsites.net/api/country';
    let getToken: any = localStorage.getItem('Token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization':  `Bearer ${getToken}`,
      })
    };
    return this.http.get(`${apiUrl}`, httpOptions)
  }

  deleteCountry(Id:number){
    const apiUrl = `https://taskfrontendapi.azurewebsites.net/api/country/${Id}`;
    let getToken: any = localStorage.getItem('Token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization':  `Bearer ${getToken}`,
      })
    };
    return this.http.delete(`${apiUrl}`, httpOptions)
  }

  EditCountry(countryObj:any){
    const apiUrl = `https://taskfrontendapi.azurewebsites.net/api/country`;
    let getToken: any = localStorage.getItem('Token');
    const body = `${countryObj}`;

    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization':  `Bearer ${getToken}`,
      })
    };
    return this.http.put(`${apiUrl}`, countryObj,httpOptions)
  }

}
