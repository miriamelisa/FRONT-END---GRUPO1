import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagementComponent } from './management.component';
import { CardServComponent } from 'src/app/shared/component/card-serv/card-serv.component';



@NgModule({
  declarations: [
    ManagementComponent,
    CardServComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[ManagementComponent]
})
export class ManagementModule { }
