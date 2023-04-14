import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StudyTrainingListComponent } from './components/study-training-list/study-training-list.component';


// Importez ces deux modules
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { HttpClientModule } from '@angular/common/http'



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
    LoginComponent,
    NavbarComponent,
    StudyTrainingListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, // Ajoutez ReactiveFormsModule ici
    AngularFireModule.initializeApp(firebaseConfig), // Ajoutez AngularFireModule ici avec la configuration Firebase
    AngularFireAuthModule,
    AngularFirestoreModule,
    
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
