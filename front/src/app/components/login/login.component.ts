import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: FormGroup;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }



  async onSubmit() {
    const { email, password } = this.loginForm.value;
    try {
      const { user } = await this.afAuth.signInWithEmailAndPassword(email, password);
  
      const userDoc = await this.afs.collection('users').doc(user?.uid).get().toPromise();
      if (userDoc?.exists) {
        const userData: { nom: string, prenom: string } = userDoc.data() as { nom: string, prenom: string };
        const nom = userData.nom;
        const prenom = userData.prenom;
        this.router.navigate(['']);
      }
      this.errorMessage = null;
    } catch (error) {
      console.error('Error logging in:', error);
      this.errorMessage = "L'adresse e-mail ou le mot de passe est invalide.";
    }
  } 
}
