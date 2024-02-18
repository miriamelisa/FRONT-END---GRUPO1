import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pag/home/home.component';
import { ExpensesComponent } from './pag/expenses/expenses.component';
import { LoginComponent } from './pag/login/login.component';
import { InfComponent } from './pag/inf/inf.component';
import { ManagementComponent } from './pag/management/management.component';
import { PagenotfoundComponent } from './pag/pagenotfound/pagenotfound.component';

// RUTAS DE NAVEGACION
const routes: Routes = [
  //Redirigir
  { path: '', redirectTo: '/home',pathMatch:'full' },
  // ruta home
  { path: 'home', component: HomeComponent },
  { path: 'expenses', component: ExpensesComponent },
  { path: 'login', component: LoginComponent },
  // hay que añadir un canActivate que contenga la lógica para que estas páginas sean visualizadas solo por gestión interna 
  { path: 'inf', component: InfComponent },
  { path: 'management', component: ManagementComponent },
  { path: '**', component: PagenotfoundComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
