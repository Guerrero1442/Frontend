import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PreguntasComponent } from './preguntas/preguntas.component';
import { PreguntasService } from './preguntas.service';
import { CrearpreguntaComponent } from './crearpregunta/crearpregunta.component';
import { ActualizapreguntaComponent } from './actualizapregunta/actualizapregunta.component';
import { UserService } from './user.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UsermodelComponent } from './models/Usuariomodel/usermodel/usermodel.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PreguntasComponent,
    CrearpreguntaComponent,
    ActualizapreguntaComponent,
    UsermodelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PreguntasService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
