import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentComponent } from './component.component';



@NgModule({
  declarations: [
    ComponentComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ComponentComponent
  ]
})
export class ComponentModule { }
