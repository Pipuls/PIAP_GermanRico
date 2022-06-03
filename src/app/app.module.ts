import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* Bootstrap cicle progress bar */
import { NgCircleProgressModule } from 'ng-circle-progress';

/* componentes angular */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AboutComponent } from './components/about/about.component';
import { WorkXpComponent } from './components/work-xp/work-xp.component';
import { EducationComponent } from './components/education/education.component';
import { HysSkilsComponent } from './components/hys-skils/hys-skils.component';
import { FSjProjectsComponent } from './components/fsj-projects/fsj-projects.component';
import { ArqPorjectsComponent } from './components/arq-porjects/arq-porjects.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent,
    AboutComponent,
    WorkXpComponent,
    EducationComponent,
    HysSkilsComponent,
    FSjProjectsComponent,
    ArqPorjectsComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({})
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
