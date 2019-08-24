import {Component} from '@angular/core';
import { TdMediaService } from '@covalent/core';


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent{
     name = 'BSADMIN';
     public identity;

     routes: Object[] = [{
        icon: 'home',
        route: '/home',
        title: 'Inicio',
    }, {
        icon: 'cloud',
        route: '.',
        title: 'Productos',
    },{
        icon: 'view_comfy',
        route: '.',
        title: 'Categorias',
    },{
        icon: 'store_mall_directory',
        route: '.',
        title: 'Ventas',
    },{
        icon: 'shopping_cart',
        route: '.',
        title: 'Caja',
    },{
        icon: 'work',
        route: '.',
        title: 'Compras',
    },{
        icon: 'local_shipping',
        route: '.',
        title: 'Proveedores',
    },{
        icon: 'person_pin',
        route: '/home/users',
        title: 'Usuarios',
    },
    ];
    usermenu: Object[] = [{
        icon: 'tune',
        route: '.',
        title: 'Configuraciones',
    }, {
        icon: 'exit_to_app',
        route: '.',
        title: 'Salir',
    },
    ];

    constructor(public media: TdMediaService) {
            this.identity=JSON.parse(localStorage.getItem('identity'));
    }










}
