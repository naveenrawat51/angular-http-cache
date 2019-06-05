import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data;
  observable;

  url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private httpClient: HttpClient) { }

  // getUsers(){
  //   return this.httpClient.get<any[]>(this.url);
  // }

  getUsers(){
    if(this.data){
      return of(this.data);
    } else if(this.observable){
      return this.observable;
    } else {
      this.observable = this.httpClient.get<any[]>(this.url, { observe: 'response'})
      .pipe(map(response => {
        this.observable = null;
        if(response.status === 400){
          return 'request failed!!'
        } else if(response.status === 200){
          this.data = response.body;
          return this.data
        }
      }))
      return this.observable;
    }
  }
  
}
