import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiListService {

  private apiUrl = 'https://labonnealternance.apprentissage.beta.gouv.fr/api/V1/metiers';
  public workName: string = '';
  public selectedMetier: string = '';

  constructor(private http: HttpClient) { }

  public getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl, {
      params: {
        title: this.selectedMetier,
      }
    });
  }

  public getAllMetiers(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/all`);
  }

  public getFormationsParRegion(departement: string, romes: string): Observable<any> {
    // Créer les paramètres pour l'appel API avec les valeurs de departement et romes
    let params = new HttpParams();
    params = params.set('departement', departement);
    params = params.set('romes', romes);

    return this.http.get<any>('https://labonnealternance.apprentissage.beta.gouv.fr/api/V1/formationsParRegion?caller=contact@ynov.com', { params: params });
  }

  public getJobsParInsee(insee: string, romes: string): Observable<any> {
    // Créer les paramètres pour l'appel API avec les valeurs de departement et romes
    let params = new HttpParams();
    params = params.set('insee', insee);
    params = params.set('romes', romes);

    return this.http.get<any>('https://labonnealternance.apprentissage.beta.gouv.fr/api/V1/jobs?caller=contact@ynov.com&radius=0', { params: params });
  }

}
