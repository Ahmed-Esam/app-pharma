import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CountryService } from '../../shared/services/country.service';
import { Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit ,OnChanges {

  @Output() getName = new EventEmitter<string>();
  @Input() countryId:any;
  @Input() GetEnentDelete:any;
  @Input() EditcountryItem:any;
  @Input() EditEvent:any;
  public GlobleInput:string = '';
  public ShowBtn:boolean = false;


  constructor(private CountrySer:CountryService,private router:Router) { }


  // get function Add Country (api services)
  getAddCountry(Name:any){
    return this.CountrySer.AddCountry(Name.value).subscribe((res:any) => {
      this.funGetAllCountry()
      Name.value = ''
    },err =>{
      this.router.navigateByUrl('/');
    })
  }

  // get function all Country (api services)
  funGetAllCountry(){
    return this.CountrySer.getAllCountry().subscribe((res:any) => {
      let StorageArray = [];
      for (const item of res) {
        StorageArray.push(item.id)
      }
      this.getName.emit(res);
      console.log(res,'getName')
    },err =>{
      this.router.navigateByUrl('/');
    })
  }

  // get function delete Country (api services)
  getdeleteCountry(){
    return this.CountrySer.deleteCountry(this.countryId).subscribe((res:any) => {
      this.funGetAllCountry()
      this.ShowBtn = false;
      this.GlobleInput = ''
    })
  }

   // get function Update Country (api services)
  funUpdateCountry(Name:any){
    this.EditcountryItem.name = Name.value;
    if(this.EditEvent){
      this.funEditCountry()
    }
  }
  //  function Edit Country
  funEditCountry(){
    return  this.CountrySer.EditCountry(this.EditcountryItem).subscribe((res:any) =>{
      this.ShowBtn = !this.ShowBtn;
      if(this.GlobleInput == ''){
        this.GlobleInput = res.name;
      }else{
        this.GlobleInput = ''
      }
    })

  }


  ngOnInit(): void {
    this.funGetAllCountry()
  }

  ngOnChanges(changes: SimpleChanges): void {
      if(this.GetEnentDelete){
        console.log('Delete',changes)
        this.getdeleteCountry()
      }else{
         console.log('false');
      }

      if(this.EditEvent){
        console.log('Edit',changes)
        this.funEditCountry()
      }else{
         console.log('false');
      }

  }

}
