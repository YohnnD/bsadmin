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


    getIdentity():any{
        let identity=JSON.parse(localStorage.getItem('identity'));
        if(identity!='undefined'){
            this.identity=identity;
        }else{
            this.identity=null;
        }
        return this.identity;
    }


    getToken():any{
        let token=localStorage.getItem('token');
        if(token!='undefined'){
            this.token=token;
        }else{
            this.token=null;
        }
        return this.token;
    }


    allUsers():Observable<any>{
      let token=this.getToken();
      let headers= new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
                                    .set('Authorization',token);
      return this._http.get(this.url+'users',{headers:headers});
    }

    registerUsers(user:User):Observable<any>{
      let token=this.getToken();
      user.role='user';
      let json=JSON.stringify(user);
      let params='json='+json;
      let headers=new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
                                    .set('Authorization',token);


      return this._http.post(this.url+'users',params,{headers:headers});
    }

    getUser(id):Observable<any>{
        let token=this.getToken();
        let headers=new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
                                      .set('Authorization',token);
        return this._http.get(this.url+'users/'+id,{headers:headers});

    }

    updateUsers(user:User):Observable<any>{
      let token=this.getToken();
      let json=JSON.stringify(user);
      let params='json='+json;
      let headers= new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
                                    .set('Authorization',token);
      return this._http.put(this.url+'users/'+user.id,params,{headers:headers});
    }

    deleteUsers(id):Observable<any>{
      let token=this.getToken();
      let headers=new HttpHeaders().set('Content-type','application-x-www-form-urlencoded')
                                    .set('Authorization',token);
      return this._http.delete(this.url+'users/'+id,{headers:headers});
  }


}
