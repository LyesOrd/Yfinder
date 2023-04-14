import { Component, OnInit } from '@angular/core';
import { ApiListService } from './api-list.service';
import { compileNgModule } from '@angular/compiler';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';


// Définir une interface pour la structure des données dans data.labelsAndRomes
interface LabelsAndRomesData {
  label: string;
  romes: string[];
}

export interface Formation {
  title: string;
  ideaType: string;
  rncpLabel: string;
  onisepUrl: string;
  zipCode: string
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

  public form!: FormGroup;


  constructor(private api: ApiListService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.api.getAllMetiers().subscribe(data => {
      this.metiers = data.metiers;
    });

    this.form = this.fb.group({
      selectedMetier: new FormControl(''),
      departement: new FormControl('')
    });
  }

  public onSubmit(): string {
    console.log(this.form.value);
    this.getSelectedMetier();
    return this.form.value.departement;
  }

  public getSelectedMetier(): void {
    this.api.selectedMetier = this.form.value.selectedMetier;
    this.api.getData().subscribe(data => {
      this.apiData = data.labelsAndRomes[0].romes;
    })
    
    this.api.getFormationsParRegion(this.form.value.departement, this.apiData).subscribe(
      data => {
        // Traitement des données de réponse de l'API
        this.formations = data.results;
        
      },
      error => {
        // Gestion des erreurs
        console.error(error);
      }
    );
  
  }

}