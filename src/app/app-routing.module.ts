import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizapreguntaComponent } from './actualizapregunta/actualizapregunta.component';
import { CalificarExamenComponent } from './calificar-examen/calificar-examen.component';
import { CrearExamenComponent } from './crear-examen/crear-examen.component';
import { CrearpreguntaComponent } from './crearpregunta/crearpregunta.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ResponderExamenComponent } from './responder-examen/responder-examen.component';
import { TusExamenesComponent } from './tus-examenes/tus-examenes.component';

const routes: Routes = [
  {path: '',pathMatch:'full',redirectTo:'login'},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'nuevaPregunta',component:CrearpreguntaComponent},
  {path:'actualizaPregunta/:id',component:ActualizapreguntaComponent},
  {path:'tusexamenes',component:TusExamenesComponent},
  {path:'nuevoexamen',component:CrearExamenComponent},
  {path:'calificarExam',component:CalificarExamenComponent},
  {path:'responderExam',component:ResponderExamenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
