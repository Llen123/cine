import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductoCandy, ComboCandy } from '../models/candy.model';

@Injectable({
  providedIn: 'root'
})
export class CandyService {
  // Ajusta la URL de tu API o las funciones / tablas de Supabase
  private readonly API_URL = 'https://tu-proyecto.supabase.co/rest/v1';

  constructor(private http: HttpClient) {}

  getProductos(): Observable<ProductoCandy[]> {
    return this.http.get<ProductoCandy[]>(`${this.API_URL}/productos_candy`);
  }

  getCombos(): Observable<ComboCandy[]> {
    return this.http.get<ComboCandy[]>(`${this.API_URL}/combos_candy`);
  }
}