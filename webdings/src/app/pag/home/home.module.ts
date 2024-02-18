import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ContactoModule } from 'src/app/shared/component/contacto/contacto.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ContactoModule
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }
