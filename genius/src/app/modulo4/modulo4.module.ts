import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Modulo4Component } from './modulo4.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    Modulo4Component
    ],
    exports:[
      Modulo4Component
    ]
})
export class Modulo4Module { }
