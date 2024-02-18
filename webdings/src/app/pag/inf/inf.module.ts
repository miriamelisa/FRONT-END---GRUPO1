import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfComponent } from './inf.component';



@NgModule({
  declarations: [
    InfComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[InfComponent]
})
export class InfModule { }
