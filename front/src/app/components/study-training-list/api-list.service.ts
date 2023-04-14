import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiListService {

  private apiUrl = 'https://labonnealternance.apprentissage.beta.gouv.fr/api/V1/metiers';
  public workName: string = 'Développement web, intégration';

  constructor(private http: HttpClient) { }

  public getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl, {
      params: {
        title: this.workName
      }
    });
  }
}
