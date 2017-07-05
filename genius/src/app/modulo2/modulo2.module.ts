import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Modulo2Component } from './modulo2.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    Modulo2Component
    ],
    exports:[
      Modulo2Component
      ]
})
export class Modulo2Module { }
