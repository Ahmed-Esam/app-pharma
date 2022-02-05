import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './component/User/user/user.component';

import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './component/Home/home.component';
import { CountryComponent } from './component/Home/country/country.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent,
    CountryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
