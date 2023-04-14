import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

interface UserProfile {
  nom: string;
  prenom: string;
  telephone: string;
  likedOffers: string[];
}

interface AlternanceOffer {
  id: string;
  title: string;
  description: string;
  company: string;
  location:string;
  // Ajoutez d'autres propriétés en fonction de votre structure de données
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public user: firebase.User | null = null;
  public userProfile: Observable<UserProfile | undefined> | undefined;
  public likedOffers: Observable<AlternanceOffer[]> | undefined;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore
  ) { }

  ngOnInit(): void {
    this.afAuth.authState.subscribe(user => {
      this.user = user;
      if (user) {
        this.userProfile = this.afs.collection('users').doc<UserProfile>(user.uid).valueChanges();
  
        this.likedOffers = this.afs.collection('users').doc(user.uid).collection<AlternanceOffer>('likedOffers').valueChanges({ idField: 'id' });
      }
    });
  }
  
}
