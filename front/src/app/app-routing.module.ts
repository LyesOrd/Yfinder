import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [
  { path: '/login', component: LoginComponent },
  { path: '', component: HomePageComponent },
  // Ajoutez d'autres routes ici si nécessaire
  // { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirection vers /login

]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
