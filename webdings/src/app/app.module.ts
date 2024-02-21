import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavMenuModule } from './shared/component/nav-menu/nav-menu.module';
import { ContactoModule } from './shared/component/contacto/contacto.module';
import { HomeModule } from './pag/home/home.module';
import { AppRoutingModule } from './app-routing.module';
import { ExpensesModule } from './pag/expenses/expenses.module';
import { InfModule } from './pag/inf/inf.module';
import { LoginModule } from './pag/login/login.module';
import { ManagementModule } from './pag/management/management.module';
import { PagenotfoundModule } from './pag/pagenotfound/pagenotfound.module';
import { SharedModule } from './shared/shared.module';
import { ComponentModule } from './shared/component/component.module';
import { PagModule } from './pag/pag.module';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    //Modulo de ruteo
    AppRoutingModule,
    //agegi el modulo de NAV
    SharedModule,
    ComponentModule,
    NavMenuModule,
    ContactoModule,
    PagModule,
    HomeModule,
    ExpensesModule,
    InfModule,
    LoginModule,
    ManagementModule,
    PagenotfoundModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
