import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalScreenComponent } from './screens/principal-screen/principal-screen.component';
import { HeaderComponent } from './components/header/header.component';
import { ExperienciaLaboralComponent } from './componenets/experiencia-laboral/experiencia-laboral.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalScreenComponent,
    HeaderComponent,
    ExperienciaLaboralComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
