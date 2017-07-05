import { Modulo4Module } from './modulo4/modulo4.module';
import { Modulo3Module } from './modulo3/modulo3.module';
import { Modulo2Module } from './modulo2/modulo2.module';
import { Modulo1Module } from './modulo1/modulo1.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { Modulo4Component } from './modulo4/modulo4.component';
import { Modulo3Component } from './modulo3/modulo3.component';
import { Modulo2Component } from './modulo2/modulo2.component';
import { Modulo1Component } from './modulo1/modulo1.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Modulo1Module,
    Modulo2Module,
    Modulo3Module,
    Modulo4Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
