import { Component, OnInit } from '@angular/core';
import { ApiListService } from './api-list.service';
import { compileNgModule } from '@angular/compiler';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { collectionGroup } from 'firebase/firestore';



// Définir une interface pour la structure des données dans data.labelsAndRomes
interface LabelsAndRomesData {
  label: string;
  romes: string[];
}
export interface Job {
  ideaType: string;
  title: string;
  longTitle: string | null;
  id: number | null;
  idRco: number | null;
  idRcoFormation: number | null;
  contact: any; // Type spécifique à définir pour les détails de contact
  place: {
    distance: number;
    insee: string;
    zipCode: string;
    city: string;
    latitude: number;
    longitude: number;
    fullAddress: string;
  };
  company: {
    name: string;
    siret: string | null;
  };
  diplomaLevel: string | null;
  diploma: string | null;
  cfd: string | null;
  rncpCode: string | null;
  rncpLabel: string | null;
  rncpEligibleApprentissage: string | null;
  period: string | null;
  capacity: string | null;
  createdAt: string | null;
  lastUpdateAt: string | null;
  onisepUrl: string | null;
  url: string;
  job: {
    id: string;
    creationDate: string;
    description: string;
    contractType: string;
    contractDescription: string;
    duration: string;
  };
  romes: { code: string }[];
  nafs: { code: string; label: string }[];
  training: any | null; // Type spécifique à définir pour les détails de formation
}



export interface Formation {
  ideaType: string;
  title: string;
  longTitle: string;
  id: string;
  idRco: string;
  idRcoFormation: string;
  contact: null | any; // Remplacer 'any' par le type approprié si possible
  place: {
    distance: null | any; // Remplacer 'any' par le type approprié si possible
    fullAddress: string;
    latitude: string;
    longitude: string;
    city: string;
    address: string;
    cedex: null | any; // Remplacer 'any' par le type approprié si possible
    zipCode: string;
    departementNumber: string;
    region: string;
    insee: string;
  };
  company: {
    name: string;
    siret: string;
    id: string;
    uai: string;
    headquarter: {
      id: string;
      uai: string;
      siret: string;
      place: {
        address: string;
        cedex: null | any; // Remplacer 'any' par le type approprié si possible
        zipCode: string;
        city: string;
      };
      name: string;
    };
    place: null | any; // Remplacer 'any' par le type approprié si possible
  };
  diplomaLevel: string;
  diploma: string;
  cfd: string;
  rncpCode: string;
  rncpLabel: string;
  rncpEligibleApprentissage: boolean;
  period: null | any; // Remplacer 'any' par le type approprié si possible
  capacity: null | any; // Remplacer 'any' par le type approprié si possible
  createdAt: string;
  lastUpdateAt: string;
  onisepUrl: string;
  url: null | any; // Remplacer 'any' par le type approprié si possible
  job: null | any; // Remplacer 'any' par le type approprié si possible
  romes: Array<{ code: string }>;
  nafs: null | any; // Remplacer 'any' par le type approprié si possible
  training: null | any; // Remplacer 'any' par le type approprié si possible
  cleMinistereEducatif: string;
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
  public jobs: Job[] = [];

  public selectedMetier: string = ''; 
  public insee: string = ''; // Ajouter cette déclaration

  public form!: FormGroup;

  public isConnected = false;


  constructor(
    private api: ApiListService, 
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore) { }

  ngOnInit(): void {
    this.api.getAllMetiers().subscribe(data => {
      this.metiers = data.metiers;
    });

    this.form = this.fb.group({
      selectedMetier: new FormControl(''),
      inseecode: new FormControl('')
    });
  }

  public onSubmit() {
    this.getSelectedMetier();
  }

  public getSelectedMetier(): void {
    this.api.selectedMetier = this.form.value.selectedMetier;
    this.api.getData().subscribe(data => {
      this.apiData = data.labelsAndRomes[0].romes;
    })
    
    this.api.getJobsParInsee(this.form.value.inseecode, this.apiData).subscribe(data => {
      this.jobs = data.peJobs.results;
    });
  
  }

  public async likeFormation(job: Job) {
    try {
      const user = await this.afAuth.currentUser;
      if (user) {
        this.isConnected = true;
        const likedFormationsCollection = this.afs.collection('users').doc(user.uid).collection('likedFormations');
        await likedFormationsCollection.doc(job.title).set({ ...job });
      } else {
        console.error('Erreur : utilisateur non connecté');
        this.isConnected = false;
      }
    } catch (error) {
      console.error('Erreur lors de l\'enregistrement de la formation aimée :', error);
    }
  }
  
}