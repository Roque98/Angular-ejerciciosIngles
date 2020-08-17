import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { TablepositionComponent } from './pages/tableposition/tableposition.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { GetNameComponent } from './pages/get-name/get-name.component';
import { GameComponent } from './pages/game/game.component';

import { PlyrModule } from 'ngx-plyr';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    TablepositionComponent,
    NavbarComponent,
    GetNameComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PlyrModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
