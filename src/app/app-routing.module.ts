import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Ejercio3Component } from './ejercio3/ejercio3.component';
import { Ejercio1Component } from './ejercio1/ejercio1.component';
import { Ejercio2Component } from './ejercio2/ejercio2.component';

const routes: Routes = [
  { path: '', component: Ejercio3Component },
  { path: 'ejercicio1', component: Ejercio1Component },
  { path: 'ejercicio2', component: Ejercio2Component },
  { path: 'ejercicio3', component: Ejercio3Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
