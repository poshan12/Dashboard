import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-newmenu',
  templateUrl: './newmenu.component.html',
  styleUrls: ['./newmenu.component.css']
})
export class NewmenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
     this.items = [
            {
                label: 'Front-Office', icon: 'pi pi-fw pi-desktop',
                items: [
                    [
                       {label: 'Admission Enquiry'},
                        {label: 'Visitor log'},
                        {label: 'Phon Call log'},
                        {label: 'Visitor log'},
                        {label: 'Postal Dispatch'},
                        {label: 'Postal Recieve'},
                        {label: 'Complain'},
                        {label: 'Setup Front Office'}

                       
                    ]
                ]
            },
            {
              label: 'Student Information', icon: 'pi pi-fw pi-user-plus',
                items: [
                    [
                       {label: 'Admission Enquiry'},
                        {label: 'Visitor log'},
                        {label: 'Phon Call log'},
                        {label: 'Visitor log'},
                        {label: 'Postal Dispatch'},
                        {label: 'Postal Recieve'},
                        {label: 'Complain'},
                        {label: 'Setup Front Office'}

                       
                    ]
                ]
                         },
              {
              label: 'Fees Collection', icon: 'pi pi-fw pi-user-plus',
                items: [
                    [
                       {label: 'Collect Fess'},
                        {label: 'Search Fees pay'},
                        {label: 'Phon Call log'},
                        {label: 'Fees Master'},
                        {label: 'Fees Type'},
                        {label: 'Fees Group'},
                        {label: 'Fees Discount'},
                        {label: 'Fees Carry Forward'},
                        {label: 'Fees Remainder'}

                       
                    ]
                ]
                         }
          ]
  }

}