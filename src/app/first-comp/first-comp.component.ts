import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/data.service';

@Component({
  selector: 'app-first-comp',
  templateUrl: './first-comp.component.html',
  styleUrls: ['./first-comp.component.css']
})
export class FirstCompComponent implements OnInit {
  userData: any[];
  constructor( private _dataService: DataService) { 
    this._dataService.getUsers().subscribe( data => this.userData = data);
  }

  ngOnInit() {
  
  }

}
