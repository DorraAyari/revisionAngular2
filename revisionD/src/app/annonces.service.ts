import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnnoncesService {
  baseUrl="http://localhost:3000/annonces"

 add(userData: any): Observable<any> {
    return this.http.post(this.baseUrl, userData);
   }
  getAllProduct() {
    return this.http.get<any[]>(this.baseUrl);
  }
  constructor(private http: HttpClient) {}
}
