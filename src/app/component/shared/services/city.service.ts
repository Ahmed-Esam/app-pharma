import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private http:HttpClient) { }

  AllCity(){
    const apiUrl = 'https://taskfrontendapi.azurewebsites.net/api/city';
    let getToken: any = localStorage.getItem('Token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization':  `Bearer ${getToken}`,
      })
    };
    return this.http.get(`${apiUrl}`, httpOptions)
  }

  GetAllCitiesCountry(countryId:any){
    const apiUrl = `https://taskfrontendapi.azurewebsites.net/api/city/getcities/${countryId}`;
    let getToken: any = localStorage.getItem('Token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization':  `Bearer ${getToken}`,
      })
    };
    return this.http.get(`${apiUrl}`, httpOptions)
  }

  AddCity(Name:any,CountryId:number){
    const apiUrl = 'https://taskfrontendapi.azurewebsites.net/api/city';
    const body = {'Name' :`${Name}`,'CountryId':CountryId};
    let getToken: any = localStorage.getItem('Token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization':  `Bearer ${getToken}`,
      })
    };
    return this.http.post(`${apiUrl}`,body, httpOptions)
  }

  deleteCity(Id:number){
    const apiUrl = `https://taskfrontendapi.azurewebsites.net/api/city/${Id}`;
    let getToken: any = localStorage.getItem('Token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization':  `Bearer ${getToken}`,
      })
    };
    return this.http.delete(`${apiUrl}`, httpOptions)
  }


}
