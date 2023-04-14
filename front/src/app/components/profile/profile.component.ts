import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';
import { Observable } from 'rxjs';

interface UserProfile {
  nom: string;
  prenom: string;
  telephone: string;
  likedOffers: string[];
}

interface Formation {
  id:string;
  title: string;
  ideaType: string;
  rncpLabel: string;
  onisepUrl: string;
  zipCode: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public user: firebase.User | null = null;
  public userProfile: Observable<UserProfile | undefined> | undefined;
  public likedFormations: Observable<Formation[]> | undefined;

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore) {}

  ngOnInit(): void {
    this.afAuth.authState.subscribe(user => {
      this.user = user;
      if (user) {
        this.userProfile = this.afs.collection('users').doc<UserProfile>(user.uid).valueChanges();
        this.getLikedFormations();
      }
    });
  }

  getLikedFormations() {
    if (this.user) {
      this.likedFormations = this.afs.collection('users').doc(this.user.uid).collection<Formation>('likedFormations').valueChanges({ idField: 'id' });
    }
  }

  async unlikeFormation(formationId: string): Promise<void> {
    if (!this.user) {
      return;
    }
  
    try {
      // Supprimer la formation de la collection "likedFormations"
      await this.afs.collection('users').doc(this.user.uid).collection('likedFormations').doc(formationId).delete();
  
      // Supprimer l'ID de la formation de la liste des formations aimées dans le profil utilisateur
      await this.afs.collection('users').doc(this.user.uid).update({
        likedFormations: firebase.firestore.FieldValue.arrayRemove(formationId)
      });
  
    } catch (error) {
      console.error('Error removing formation from liked formations:', error);
    }
  }
}
