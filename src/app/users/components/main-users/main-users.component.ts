import { Component, OnInit } from '@angular/core';
import {IPageChangeEvent} from "@covalent/core";
import {User} from "../../../models/user";
import {UserService} from "../../../services/user.service";
import { TdLoadingService } from '@covalent/core/loading';
import { ViewContainerRef } from '@angular/core';
import { TdDialogService } from '@covalent/core/dialogs';
import {Router,ActivatedRoute} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
    selector: 'app-main-users',
    templateUrl: './main-users.component.html',
    styleUrls: ['./main-users.component.css'],
    providers:[UserService,TdLoadingService]
})



export class MainUsersComponent implements OnInit {
    public user:User;
    public eventLinks: IPageChangeEvent;
    public pageSize: number = 3;
    public total:number;
    public users:Array<any>;
    public basicData: any;
    selected = 'option1';
    public loading_users: boolean = false;

    constructor(
        public _userService:UserService,
        private _loadingService: TdLoadingService,
        private _dialogService: TdDialogService,
        private _viewContainerRef: ViewContainerRef,
        private _router:Router,
        private _route:ActivatedRoute,
        private _snackBar:MatSnackBar

    ) {
        this.user=new User(1,'','','','','','','');

    }


    onSubmit(){
        this._userService.registerUsers(this.user).subscribe(
            response=>{

                    this.getUsers();
                     this._snackBar.open(response[0].message+".",'',{duration:30*60,horizontalPosition:'right'});
            },error=>{
                console.log(<any>error);
                this._loadingService.resolve('loading_users');
                this._dialogService.openAlert({
                    message: '¡Oh no! Ocurrio un error inesperado intente de nuevo en unos minutos.',
                    disableClose: false ,
                    viewContainerRef: this._viewContainerRef,
                    title: ':(',
                    closeButton: 'OK',
                    width: '400px',
                });
            }

        )
    }

    changeLinks(event: IPageChangeEvent): void {
        this.eventLinks = event;
        this.basicData = this.users[0].slice(this.eventLinks.fromRow-1,this.eventLinks.toRow);
        console.log(this.basicData);
        console.log(this.eventLinks);
    }


    ngOnInit() {

        this.getUsers();
    }

    getUsers(){
        this._loadingService.register('loading_users');

        this._userService.allUsers().subscribe(
            response=>{
                this.users=response;
                this.basicData=this.users[0].slice(0,this.pageSize);
                this.total=this.users[0].length;
                this._loadingService.resolve('loading_users');
            },error=>{
                        console.log(<any>error);
                        this._loadingService.resolve('loading_users');
                        this._dialogService.openAlert({
                            message: '¡Oh no! Ocurrio un error inesperado intente de nuevo en unos minutos.',
                            disableClose: false , // defaults to false
                            viewContainerRef: this._viewContainerRef, //OPTIONAL
                            title: ':(', //OPTIONAL, hides if not provided,
                            closeButton: 'OK', //OPTIONAL, defaults to 'CLOSE'
                            width: '400px', //OPTIONAL, defaults to 400px
                                }).afterClosed().subscribe(close=>{
                                this._router.navigate(['/home']);
                });

        });
    }




}
