import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PreguntasComponent } from './preguntas/preguntas.component';
import { CrearPreguntaComponent } from './crear-pregunta/crear-pregunta.component';
import { ActualizarPreguntaComponent } from './actualizar-pregunta/actualizar-pregunta.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PreguntasComponent,
    CrearPreguntaComponent,
    ActualizarPreguntaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
