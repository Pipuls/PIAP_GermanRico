import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* componentes angular */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AboutComponent } from './components/about/about.component';
import { WorkXpComponent } from './components/work-xp/work-xp.component';
import { EducationComponent } from './components/education/education.component';
import { HysSkilsComponent } from './components/hys-skils/hys-skils.component';

/* Bootstrap cicle progress bar */
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent,
    AboutComponent,
    WorkXpComponent,
    EducationComponent,
    HysSkilsComponent
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
