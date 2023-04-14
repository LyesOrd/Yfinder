import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyDrY7-nDW2px7KEZBIwlb3r-LvMRYkwnuM",
    authDomain: "yfinder-83eb9.firebaseapp.com",
    projectId: "yfinder-83eb9",
    storageBucket: "yfinder-83eb9.appspot.com",
    messagingSenderId: "743126886633",
    appId: "1:743126886633:web:3cd45a4e319ca9864a6878"
  }
};




@Component({
  selector: 'app-login',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  
  
  
  constructor(private fb: FormBuilder, private afAuth: AngularFireAuth, private afs: AngularFirestore, private router: Router) { }
  
  

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  async onSubmit() {
    if (this.registerForm.valid) {
      const { nom, prenom, email, telephone, password } = this.registerForm.value;
      console.log('Email:', email);
      try {
        const { user } = await this.afAuth.createUserWithEmailAndPassword(email, password);
        console.log('User created successfully:', user);
  
        // Enregistrement des données dans Cloud Firestore
        this.afs.collection('users').doc(user?.uid).set({
          nom,
          prenom,
          telephone
        });
        this.router.navigate(['/login']);
      } catch (error) {
        console.error('Error creating user:', error);
       
      }
    }
  }
  
}
