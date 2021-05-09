import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import {ChartModule} from 'primeng/chart';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
      basicData: any;

data: any;

value: number = 20;
    constructor() {
        
    }
    
  ngOnInit() {
  
  }
}
