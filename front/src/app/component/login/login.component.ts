import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private afAuth: AngularFireAuth) {}

  async register(email: string, password: string) {
    try {
      const result = await this.afAuth.createUserWithEmailAndPassword(email, password);
      console.log('User registered successfully:', result);
    } catch (error) {
      console.error('Error registering user:', error);
    }
  }

  // Vous pouvez ajouter d'autres méthodes ou propriétés ici, si nécessaire.
}
