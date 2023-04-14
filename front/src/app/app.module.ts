import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StudyTrainingListComponent } from './components/study-training-list/study-training-list.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { FormsModule } from '@angular/forms';

// Importez ces deux modules
import { LoginComponent } from './components/login/login.component';
import { firebaseConfig } from '../environments/firebase-config';

import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './components/register/register.component'

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    RegisterComponent,
    NavbarComponent,
    StudyTrainingListComponent,
    RegisterComponent,
    SearchFormComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule, 
    AngularFireModule.initializeApp(firebaseConfig), 
    AngularFireAuthModule,
    AngularFirestoreModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
