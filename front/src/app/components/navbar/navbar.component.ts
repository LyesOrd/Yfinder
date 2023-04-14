import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import firebase from 'firebase/compat/app';
import { switchMap, map } from 'rxjs/operators';
import { of } from 'rxjs';

export interface User {
  uid: string;
  email: string;
  nom: string;
  prenom: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user!: Observable<firebase.User | null>;
  user$: User | null;

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore) { 
    this.user$ = null;
  }

  ngOnInit(): void {
    this.user = this.afAuth.authState;
    this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.collection('users').doc(user.uid).valueChanges();
        } else {
          return of(null);
        }
      }),
      map(userData => this.user$ = userData as { uid: string, email: string, nom: string, prenom: string } | null)
    ).subscribe();
  }

  async logout() {
    await this.afAuth.signOut();
  }
}
