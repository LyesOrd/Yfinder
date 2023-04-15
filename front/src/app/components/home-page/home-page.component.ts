import { Component, OnInit } from '@angular/core';
import { AlternanceOffer } from './alternance-offer.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { animate, state, style, transition, trigger } from '@angular/animations';



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('*', style({ opacity: 1 })),
      transition('* => *', [
        style({ opacity: 1 }),
        animate(500)
      ])
    ])
  ]

})
export class HomePageComponent implements OnInit {
  public text: string = '';
  public index: number = 0;
  public images: string[] = [
    'assets/student_img.jpg',
    'assets/student_photo_2.png',
    'assets/student_photo_3.png',
  ];

  public currentIndex: number = 0;

  constructor(private afs: AngularFirestore, private afAuth: AngularFireAuth) { }


  ngOnInit(): void {
    setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  async likeOffer(offer: AlternanceOffer) {
    try {
      const user = await this.afAuth.currentUser;
      if (user) {
        const likedOffersCollection = this.afs.collection('users').doc(user.uid).collection('likedOffers');
        await likedOffersCollection.doc(offer.id).set(offer);
      }
    } catch (error) {
      console.error('Erreur lors de l\'enregistrement de l\'offre d\'alternance aimée :', error);
    }
  }
  
  
  
  
}
