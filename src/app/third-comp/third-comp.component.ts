import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/data.service';

@Component({
  selector: 'app-third-comp',
  templateUrl: './third-comp.component.html',
  styleUrls: ['./third-comp.component.css']
})
export class ThirdCompComponent implements OnInit {

  userData: any[];
  constructor( private _dataService: DataService) { 
    this._dataService.getUsers().subscribe( data => this.userData = data);
  }

  ngOnInit() {
  
  }
}
