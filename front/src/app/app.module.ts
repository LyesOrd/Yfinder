<<<<<<< HEAD
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';

// Importez ces deux modules
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';



// Ajoutez votre configuration Firebase ici
const firebaseConfig = {
  apiKey: "AIzaSyDrY7-nDW2px7KEZBIwlb3r-LvMRYkwnuM",
  authDomain: "yfinder-83eb9.firebaseapp.com",
  projectId: "yfinder-83eb9",
  storageBucket: "yfinder-83eb9.appspot.com",
  messagingSenderId: "743126886633",
  appId: "1:743126886633:web:3cd45a4e319ca9864a6878"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
=======
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StudyTrainingListComponent } from './components/study-training-list/study-training-list.component';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    StudyTrainingListComponent
>>>>>>> 165691ca893a3e80c38fe260e4096dd35cda81a7
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    ReactiveFormsModule, // Ajoutez ReactiveFormsModule ici
    AngularFireModule.initializeApp(firebaseConfig), // Ajoutez AngularFireModule ici avec la configuration Firebase
    AngularFireAuthModule,
    AngularFirestoreModule
    
=======
    HttpClientModule
>>>>>>> 165691ca893a3e80c38fe260e4096dd35cda81a7
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
