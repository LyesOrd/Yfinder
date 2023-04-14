import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { LoginComponent } from './component/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  // Ajoutez d'autres routes ici si nécessaire
  // { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirection vers /login
=======
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
>>>>>>> 165691ca893a3e80c38fe260e4096dd35cda81a7
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
