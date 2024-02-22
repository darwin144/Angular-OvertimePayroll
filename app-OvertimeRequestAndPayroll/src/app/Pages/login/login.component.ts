import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import {Login } from '../../Interfaces/Login';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

    loginObj: Login;

    constructor(private http:HttpClient, private route: Router){
      this.loginObj = new Login();
    }
    ngOnInit(): void {    
      this.onLogin();
    }

    onLogin(){
      return this.http.post('https://localhost:7173/API-Overtimes/Account/login/', this.loginObj).subscribe((res:any) =>
      {
        if(res.code == 200){
          this.route.navigateByUrl('/employee');
        }
        else{
          alert("Username or Password wrong")
        }
      })
    }

  }

  // export class Login{
  //   email:string;
  //   password:string;
  
  //   constructor(){
  //     this.email = '';
  //     this.password ='';
  //   }
  // }