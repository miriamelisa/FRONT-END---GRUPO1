import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardServComponent } from './card-serv.component';



@NgModule({
  declarations: [
    CardServComponent
  ],
  imports: [
    CommonModule
  ], exports:[
    CardServComponent
  ]
})
export class CardServModule { }
