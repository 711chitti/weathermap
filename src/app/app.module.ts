import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {WeatherService} from './weather.service';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app.routing.module';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SerachComponent } from './serach/serach.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SerachComponent,
    AboutComponent,
    ContactComponent
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
