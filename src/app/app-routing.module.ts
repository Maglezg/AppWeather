import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { HistorialComponent } from './components/historial/historial.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'buscador', component: BuscadorComponent},
  {path:'historial', component:HistorialComponent},
  {path:'*', component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
