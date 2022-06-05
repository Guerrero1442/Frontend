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
import { UserService } from './user.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PreguntaServiceService } from './Services/Pregunta/pregunta-service.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PreguntasComponent,
    CrearpreguntaComponent,
    ActualizapreguntaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PreguntaServiceService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
