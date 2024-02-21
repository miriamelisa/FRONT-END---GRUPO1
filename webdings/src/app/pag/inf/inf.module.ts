import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfComponent } from './inf.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    InfComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[InfComponent]
})
export class InfModule { }
