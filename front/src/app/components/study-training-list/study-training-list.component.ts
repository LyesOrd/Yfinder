import { Component, OnInit } from '@angular/core';
import { ApiListService } from './api-list.service';
import { compileNgModule } from '@angular/compiler';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';



// Définir une interface pour la structure des données dans data.labelsAndRomes
interface LabelsAndRomesData {
  label: string;
  romes: string[];
}



export interface Formation {
  id: string;
  title: string;
  ideaType: string;
  rncpLabel: string;
  onisepUrl: string;
  place: {
    zipCode: string;
  };
}

@Component({
  selector: 'app-study-training-list',
  templateUrl: './study-training-list.component.html',
  styleUrls: ['./study-training-list.component.css']
})
export class StudyTrainingListComponent implements OnInit {

  public apiData: any;
  public metiers: any;
  public formations: Formation[] = [];
  public selectedMetier: string = ''; 
  public departement: string = ''; // Ajouter cette déclaration


  public onSubmit(): string {
    
    return this.departement
  }
  public getSelectedMetier(): void {
    this.api.selectedMetier = this.selectedMetier;
    this.api.getData().subscribe(data => {
      // Essayer de comprendre ce principe pour appliquer la même chose au autres API
      console.log(data)
      this.apiData = data.labelsAndRomes[0].romes; // Utiliser la fonction map pour extraire les codes ROMES de chaque élément
      console.log(this.apiData.toString(), 'apiData')
      
    })
    console.log(this.departement + 'dep');
    this.api.getFormationsParRegion(this.departement, this.apiData).subscribe(
      data => {
        // Traitement des données de réponse de l'API
        console.log(data.results[0].place.zipCode + 'forma /region');
        this.formations = data.results;
        
      },
      error => {
        // Gestion des erreurs
        console.error(error);
      }
    );
  
  }

  constructor(
    private api: ApiListService,
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore
  ) { }

  async likeFormation(formation: Formation) {
    try {
      const user = await this.afAuth.currentUser;
      if (user) {
        const likedFormationsCollection = this.afs.collection('users').doc(user.uid).collection('likedFormations');
        await likedFormationsCollection.doc(formation.title).set({ ...formation });
        console.log('La formation a été enregistrée avec succès.');
      } else {
        console.error('Erreur : utilisateur non connecté');
      }
    } catch (error) {
      console.error('Erreur lors de l\'enregistrement de la formation aimée :', error);
    }
  }
  

  ngOnInit(): void {
    /*this.api.getData().subscribe(data => {
      // Essayer de comprendre ce principe pour appliquer la même chose au autres API
      console.log(data)
      this.apiData = data.labelsAndRomes.map((item: LabelsAndRomesData) => item.romes); // Utiliser la fonction map pour extraire les codes ROMES de chaque élément
      console.log(this.apiData, 'apiData')
    })*/

    

    this.api.getAllMetiers().subscribe(data => {
      this.metiers = data.metiers;
    });

  }

}