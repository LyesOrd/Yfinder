import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm!: FormGroup;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    }, { validator: this.checkPasswords });
  }

  checkPasswords(group: FormGroup) {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { notSame: true };
  }

  async onSubmit() {
    const { nom, prenom, email, telephone, password } = this.registerForm.value;
    try {
      const { user } = await this.afAuth.createUserWithEmailAndPassword(email, password);
      console.log('User registered successfully:', user);

      await this.afs.collection('users').doc(user?.uid).set({
        nom,
        prenom,
        email,
        telephone
      });

      this.router.navigate(['']);
    } catch (error) {
      console.error('Error registering:', error);
      this.errorMessage = "Une erreur est survenue lors de l'inscription. Veuillez réessayer.";
    }
  }
}
