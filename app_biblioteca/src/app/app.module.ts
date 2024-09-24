import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoansComponent } from './pages/loans/loans.component';
import { RatingsComponent } from './pages/ratings/ratings.component';


@NgModule({
  declarations: [
    AppComponent,
    LoansComponent,
    RatingsComponent
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
