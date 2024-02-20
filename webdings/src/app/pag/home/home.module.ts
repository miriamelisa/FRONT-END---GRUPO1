import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContactoModule } from 'src/app/shared/component/contacto/contacto.module';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ContactoModule,
    FormsModule
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }
