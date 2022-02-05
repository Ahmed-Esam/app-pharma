import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  messageError:boolean= false;

  constructor(private UserSer:UserService,private router:Router) { }
  getAccont(Email:any,Password:any){
    console.log(Email.value,Password.value)
    return this.UserSer.getUser(Email.value,Password.value).subscribe((res:any) =>{
      let accessToken = localStorage.setItem('Token', res.token);
      this.router.navigateByUrl('/Home');

      // console.log(localStorage.getItem('Token'),res)
    },error =>{
      this.messageError = true;
    })
  }

  ngOnInit(): void {
  }

}
