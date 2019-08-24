import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {User} from "../../models/user";
import {Router,ActivatedRoute,Params} from "@angular/router";

import {tdBounceAnimation} from '@covalent/core/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
    providers:[UserService],
    animations: [
        tdBounceAnimation
    ]
})
export class LoginComponent implements OnInit {
    public user: User;
    public token:string;
    bounceState: boolean = false;
    public identity:string;
    public singup:boolean;
    public preloader:boolean;
    constructor(
      public _userService:UserService,
      public _router:Router,
      public _route: ActivatedRoute,
  ) {
    this.user=new User(1,'','','','','','','');
    this.logout();
  }

  ngOnInit() {
  }

  onSubmit(){
    this.preloader=true;
    this.singup=false;


    this._userService.singup(this.user,false).subscribe(
        response=>{

           if(response.status==="error"){//si  contraseña o el usuario es incorrecto
               this.preloader=false;
                this.singup=true;

                if(this.bounceState==true){
                    this.bounceState=false;
                }else{
                    this.bounceState=true;
                }



           }else{
               this.singup=false;


               this.token =response;

               localStorage.setItem('token',this.token);


               //consigo usuario
               this._userService.singup(this.user,true).subscribe(

                   response=>{
                        this.identity=response;
                        localStorage.setItem('identity',JSON.stringify(this.identity));
                        this.preloader=false;
                       this._router.navigate(['/home']);
                   },
                   error=>{
                       console.log(<any>error);
                       this.preloader=false;
                   }
               )


           }


        },error =>{
            console.log(<any>error);
            this.preloader=false;
        }
    )
  }

    logout(){
      this._route.params.subscribe(params=>{
          let sure=+params['sure'];
          if(sure==1){
              localStorage.removeItem('identity');
              localStorage.removeItem('token');
              this.identity=null;
              this.token=null;
              this._router.navigate(['/']);
          }
      });


    }
}
