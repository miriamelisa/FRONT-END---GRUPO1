import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagementComponent } from './management.component';



@NgModule({
  declarations: [
    ManagementComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[ManagementComponent]
})
export class ManagementModule { }
