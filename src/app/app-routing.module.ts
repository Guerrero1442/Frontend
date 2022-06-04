import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizapreguntaComponent } from './actualizapregunta/actualizapregunta.component';
import { CrearpreguntaComponent } from './crearpregunta/crearpregunta.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '',pathMatch:'full',redirectTo:'login'},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'nuevaPregunta',component:CrearpreguntaComponent},
  {path:'actualizaPregunta/:id',component:ActualizapreguntaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
