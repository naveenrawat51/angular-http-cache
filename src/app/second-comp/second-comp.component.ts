import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/data.service';

@Component({
  selector: 'app-second-comp',
  templateUrl: './second-comp.component.html',
  styleUrls: ['./second-comp.component.css']
})
export class SecondCompComponent implements OnInit {
  userData: any[];
  constructor( private _dataService: DataService) {
    this._dataService.getUsers().subscribe( data => this.userData = data);
   }

  ngOnInit() {
  
  }

}
