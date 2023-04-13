import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  // Ajoutez d'autres routes ici si nécessaire
  // { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirection vers /login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
