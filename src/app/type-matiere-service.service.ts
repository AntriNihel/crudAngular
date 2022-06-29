import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TypeMatiere } from './type-matiere';

@Injectable({
  providedIn: 'root'
})
export class TypeMatiereServiceService {

  list!: TypeMatiere[];
  API_URL: string = 'http://localhost:8000/api/type_matieres';
  formData: any;
  constructor(private httpClient: HttpClient) { }
 //getAll data
   getAllTypeMatiere(): Observable<any>{
     return this.httpClient.get(`${this.API_URL}`);
 }
//create data
   createTypeMatiere(typeMatiere: Object): Observable<Object> {
    return this.httpClient.post(`${this.API_URL}`, typeMatiere);
  }
//update data 
   updateTypeMatiere(id: number, data: any): Observable<any> {
    return this.httpClient.put(`${this.API_URL}/${id}`, data);
  }
//delete data
deleteTypeMatiere(id: number): Observable<any> {
  return this.httpClient.delete(`${this.API_URL}/${id}`, { responseType: 'text' });
}
//get by id data
getTypeMatiere(id: number): Observable<any> {
  return this.httpClient.get(`${this.API_URL}/${id}`);
}

}