import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
<<<<<<< HEAD
  { path: 'login', component: LoginComponent },

];
=======
  { path: 'register', component: RegisterComponent },
  
 

]


>>>>>>> 1993450a718ce0198ae97ec1a5b541bf30a4b35b

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
