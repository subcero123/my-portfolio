import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalScreenComponent } from './screens/principal-screen/principal-screen.component';
import { HeaderComponent } from './components/header/header.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { ProjectsComponent } from './components/projects/projects.component';


@NgModule({
  declarations: [
    AppComponent,
    PrincipalScreenComponent,
    HeaderComponent,
    ExperienciaComponent,
    ProjectsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
