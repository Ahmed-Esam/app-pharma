import { CityService } from './../shared/services/city.service';
import { Component, Input, OnInit, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit , OnChanges{

  getcountryId:any;
  NameTest:any;
  Editcountry:any;
  passEvent:any;
  EventDelete:any;

  ShowBtn:boolean = false;
  inputCity:any;
  CountryIdInput:any;
  resAllCitiesCountry:any;

  constructor(private CitySer:CityService) { }


  getId(id:number,event:any){
    this.getcountryId = id;
    if(event){
      this.EventDelete = event;
    }
  }

  EditItem(countryObj:any ,event:any){
    this.Editcountry = countryObj;
    if(event){
      this.passEvent = event;
    }
  }

  GetAllCity(){
    return this.CitySer.AllCity().subscribe((res:any) => {
      this.resAllCitiesCountry = res;
    })
  }

  getAddCity(CountryId:any){
    this.CountryIdInput = CountryId;
    this.ShowBtn = !this.ShowBtn;

    if(this.inputCity !== undefined){
      return this.CitySer.AddCity(this.inputCity,CountryId).subscribe((res:any) =>{
        if(this.ShowBtn == false){
          this.GetAllCity()
        }
      })
    }else{
      return false;
    }

  }


  AddbtnCity(city:any){
    if(city.value !== ''){
      this.inputCity = city.value;
      this.getAddCity(this.CountryIdInput)
    }

  }

  removeCity(countryId:number){
    this.CitySer.deleteCity(countryId).subscribe((res:any) =>{
      this.GetAllCity()
    })
  }



  ngOnInit(): void {
    this.GetAllCity()

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.GetAllCity()

  }


}
