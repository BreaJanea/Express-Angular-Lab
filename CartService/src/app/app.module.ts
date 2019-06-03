import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CartService } from './services/cart.services';

@NgModule({
  declarations: [
    AppComponent
  ],
  
  imports: [
    BrowserModule, 
    HttpClientModule
  ],

  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }