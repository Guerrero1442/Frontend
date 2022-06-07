import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PreguntasComponent } from './preguntas/preguntas.component';
import { CrearpreguntaComponent } from './crearpregunta/crearpregunta.component';
import { ActualizapreguntaComponent } from './actualizapregunta/actualizapregunta.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PreguntaServiceService } from './Services/Pregunta/pregunta-service.service';
import { UserServiceService } from './Services/User/user-service.service';
import { TusExamenesComponent } from './tus-examenes/tus-examenes.component';
import { CrearExamenComponent } from './crear-examen/crear-examen.component';
import { CalificarExamenComponent } from './calificar-examen/calificar-examen.component';
import { ExamServiceService } from './Services/Exams/exam-service.service';
import { ResponderExamenComponent } from './responder-examen/responder-examen.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PreguntasComponent,
    CrearpreguntaComponent,
    ActualizapreguntaComponent,
    TusExamenesComponent,
    CrearExamenComponent,
    CalificarExamenComponent,
    ResponderExamenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [PreguntaServiceService,UserServiceService,ExamServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
