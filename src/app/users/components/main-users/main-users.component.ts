import { Component, OnInit } from '@angular/core';
import {IPageChangeEvent} from "@covalent/core";

@Component({
  selector: 'app-main-users',
  templateUrl: './main-users.component.html',
  styleUrls: ['./main-users.component.css']
})
export class MainUsersComponent implements OnInit {

    eventLinks: IPageChangeEvent;
    pageSize: number = 3;


    data: Object[] = [
        {
            'name': 'Seinfield',
            'status': 'Active',
            'type': 'Admin',
        }, {
            'name': 'George',
            'status': 'Active',
            'type': 'User',
        }, {
            'name': 'Kramer',
            'status': 'Active',
            'type': 'User',
        }, {
            'name': 'Elaine',
            'status': 'Active',
            'type': 'User',
        }, {
            'name': 'Newman',
            'status': 'Active',
            'type': 'User',
        },{
            'name': 'Newman',
            'status': 'Active',
            'type': 'User',
        },
        {
            'name': 'Newman',
            'status': 'Active',
            'type': 'User',
        },
        {
            'name': 'Newman',
            'status': 'Active',
            'type': 'User',
        },
        {
            'name': 'Newman',
            'status': 'Active',
            'type': 'User',
        },
        {
            'name': 'Newman',
            'status': 'Active',
            'type': 'User',
        },
    ];
    basicData: any[] = this.data.slice(0, 5);


    changeLinks(event: IPageChangeEvent): void {
        this.eventLinks = event;
        this.basicData = this.data.slice(this.eventLinks.fromRow-1,this.eventLinks.toRow);
        console.log(this.eventLinks);
    }


    constructor() { }

    ngOnInit() {

    }


}
