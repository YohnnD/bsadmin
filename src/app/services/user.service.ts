import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {Global} from "./global";
import {User} from "../models/user";
@Injectable({
  providedIn: 'root'
})
export class UserService {
  public url:string;
  public token:string;
  public identity:string;
  constructor(
      public _http:HttpClient
  ) {
    this.url=Global.url;
  }

    singup(user,getToken=false):Observable<any>{
      if(getToken){
        user.getToken=true;
      }
      let json=JSON.stringify(user);
      let params='json='+json;
      let headers= new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
      return this._http.post(this.url+'users/login',params,{headers:headers});
    }
}
