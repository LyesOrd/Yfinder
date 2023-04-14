import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StudyTrainingListComponent } from './components/study-training-list/study-training-list.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './components/register/register.component'
import { AngularFireModule } from '@angular/fire/compat';



// Ajoutez votre configuration Firebase ici
const firebaseConfig = {
  apiKey: "AIzaSyDrY7-nDW2px7KEZBIwlb3r-LvMRYkwnuM",
  authDomain: "yfinder-83eb9.firebaseapp.com",
  projectId: "yfinder-83eb9",
  storageBucket: "yfinder-83eb9.appspot.com",
  messagingSenderId: "743126886633",
  appId: "1:743126886633:web:3cd45a4e319ca9864a6878"
}

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    RegisterComponent,
    NavbarComponent,
    StudyTrainingListComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
