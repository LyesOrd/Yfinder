import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';
import { Observable } from 'rxjs';
import { Job } from '../study-training-list/study-training-list.component';
import { collectionGroup } from 'firebase/firestore';

interface UserProfile {
  nom: string;
  prenom: string;
  telephone: string;
  likedOffers: string[];
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public user: firebase.User | null = null;
  public userProfile: Observable<UserProfile | undefined> | undefined;
  public offerLiked: Observable<Job[]> | undefined;

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
      this.offerLiked = this.afs.collection('users').doc(this.user.uid).collection<Job>('likedFormations').valueChanges({ idField: 'id' });
    }
  }

  async unlikeFormation(offerId: number): Promise<void> {
    if (!this.user) {
      return;
    }
  
    try {
      await this.afs.collection('users').doc(this.user.uid).collection('likedFormations').doc(offerId.toString()).delete();
  
      await this.afs.collection('users').doc(this.user.uid).update({
        likedFormations: firebase.firestore.FieldValue.arrayRemove(offerId)
      });
  
    } catch (error) {
      console.error('Error removing formation from liked formations:', error);
    }
  }

}
