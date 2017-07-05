import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Modulo3Component } from './modulo3.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    Modulo3Component
    ],
    exports:[
      Modulo3Component
    ]
})
export class Modulo3Module { }
