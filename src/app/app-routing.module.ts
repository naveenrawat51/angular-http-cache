import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstCompComponent } from './first-comp/first-comp.component';
import { SecondCompComponent } from './second-comp/second-comp.component';
import { ThirdCompComponent } from './third-comp/third-comp.component';

const routes: Routes = [
    { path: 'firstComp', component: FirstCompComponent },
    { path: 'secondComp', component: SecondCompComponent },
    { path: 'thirdComp', component: ThirdCompComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
