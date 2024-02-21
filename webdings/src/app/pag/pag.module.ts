import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagComponent } from './pag.component';



@NgModule({
  declarations: [
    PagComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PagComponent
  ]
})
export class PagModule { }
