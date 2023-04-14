import { Component, OnInit } from '@angular/core';
import { AlternanceOffer } from './alternance-offer.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { arrayUnion } from 'firebase/firestore';



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  public text: string = '';
  public texts: string[] = ['Texte 1', 'Texte 2', 'Texte 3'];
  public index: number = 0;

  alternanceOffers: AlternanceOffer[] = [
    {
      id: '1',
      title: 'Offre alternance 1',
      company: 'Entreprise 1',
      location: 'Paris',
      description: "Description de l'offre alternance 1",
    },
    {
      id: '2',
      title: 'Offre alternance 2',
      company: 'Entreprise 2',
      location: 'Lyon',
      description: "Description de l'offre alternance 2",
    },
    {
      id: '3',
      title: 'Offre alternance 3',
      company: 'Entreprise 2',
      location: 'Lyon',
      description: "Description de l'offre alternance 2",
    },


   
  ];

  constructor(private afs: AngularFirestore, private afAuth: AngularFireAuth) { }


  ngOnInit(): void {
    setInterval(() => {
      this.text = this.texts[this.index];
      this.index = (this.index + 1) % this.texts.length;
    }, 1000);
  }

  async likeOffer(offer: AlternanceOffer) {
    try {
      const user = await this.afAuth.currentUser;
      if (user) {
        const likedOffersCollection = this.afs.collection('users').doc(user.uid).collection('likedOffers');
        await likedOffersCollection.doc(offer.id).set(offer);
        console.log('L\'offre d\'alternance a été enregistrée avec succès.');
      } else {
        console.error('Erreur : utilisateur non connecté');
      }
    } catch (error) {
      console.error('Erreur lors de l\'enregistrement de l\'offre d\'alternance aimée :', error);
    }
  }
  
  
  
  
}
