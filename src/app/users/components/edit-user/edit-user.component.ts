import { Component, OnInit } from '@angular/core';
import {User} from "../../../models/user";
import {UserService} from "../../../services/user.service";
import {Router,ActivatedRoute,Params} from "@angular/router";
import {TdLoadingService} from "@covalent/core/loading";
import {TdDialogService} from "@covalent/core/dialogs";
import {ViewContainerRef} from "@angular/core";
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
    providers:[UserService,TdLoadingService]
})
export class EditUserComponent implements OnInit {
  public user:User;
  public loading_user: boolean = false;
  constructor(
      public _userService:UserService,
      public _router:Router,
      public _route:ActivatedRoute,
      public _loadingService:TdLoadingService,
      public _dialogService:TdDialogService,
      public _viewContrinerRef:ViewContainerRef,
      public  _snackBar: MatSnackBar
  ) {
      this.user=new User(1,'','','','','','','');
  }

  ngOnInit() {
   this.edit();
  }


  onSubmit(){
      this._dialogService.openConfirm({
            message:'¿Está seguro que desea cambiar  los datos de '+this.user.nick+' ? Si lo hace, no podrá revertir los cambios.',
            title: 'Advertencia',
            cancelButton:'Cancelar',
            acceptButton:'Aceptar',

      }).afterClosed().subscribe((accept:boolean)=>{
                if(accept){
                    this._route.params.subscribe(params=>{
                        this.user.id=+params['id'];

                        this._userService.updateUsers(this.user).subscribe(
                            response=>{
                                this.edit();
                                  this._snackBar.open(response.message,'',{duration:30*60,horizontalPosition:'right'});
                            },error=>{
                                this._dialogService.openAlert({
                                    message: '¡Oh no! Ocurrio un error inesperado intente de nuevo en unos minutos.',
                                    disableClose: false ,
                                    title: ':(',
                                    closeButton: 'OK',
                                    width: '400px',
                                });
                                console.log(<any>error);
                            }
                        );
                    });
                }
      });
  }

  edit(){
      this._loadingService.register('loading_user');
    this._route.params.subscribe(params=>{
      let id=+params['id'];
        this._userService.getUser(id).subscribe(
            response=>{
                this._loadingService.resolve('loading_user');
                this.user=response.user;
        },
                error=>{
                    this._loadingService.resolve('loading_user');
                   console.log(<any>error);
                    this._dialogService.openAlert({
                        message: '¡Oh no! Ocurrio un error inesperado intente de nuevo en unos minutos.',
                        disableClose: false ,
                        title: ':(',
                        closeButton: 'OK',
                        width: '400px',
                    });

            }

        );
    });
  }


  delete(){
      this._dialogService.openConfirm({
          message:'¿Está seguro que desea eliminar  los datos de '+this.user.nick+' ? Si lo hace, no podrá revertir los cambios.',
          title: 'Advertencia',
          cancelButton:'Cancelar',
          acceptButton:'Aceptar',

      }).afterClosed().subscribe((accept:boolean)=>{
          if(accept){
              this._route.params.subscribe(params=>{
                  let id=+params['id'];
                  console.log(id);
                  this._userService.deleteUsers(id).subscribe(
                      response=>{
                          this._router.navigate(['/home/users']);
                          this._snackBar.open(response.message,'',{duration:30*60,horizontalPosition:'right'});
                      },error=>{
                          this._dialogService.openAlert({
                              message: '¡Oh no! Ocurrio un error inesperado intente de nuevo en unos minutos.',
                              disableClose: false ,
                              title: ':(',
                              closeButton: 'OK',
                              width: '400px',
                          });
                          console.log(<any>error);
                      }
                  );
              });
          }
  });

}
}
