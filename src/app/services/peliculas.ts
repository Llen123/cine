import { Injectable } from '@angular/core';
import { Pelicula, Resena } from '../models/pelicula.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private peliculasMock: Pelicula[] = [
    {
      id: '1',
      titulo: 'Batman: El Caballero de la Noche',
      sinopsis: 'Batman combate al Guasón en Ciudad Gótica.',
      duracionMinutos: 152,
      imagenUrl: 'https://via.placeholder.com/300x450',
      generos: ['Acción', 'Drama'],
      clasificacionEdad: '13+',
      enInicio: true,
      esProximamente: false,
      esPreventa: false,
      promedioEstrellas: 4.8
    }
  ];

  constructor() {}

  getPeliculas(): Observable<Pelicula[]> {
    return of(this.peliculasMock);
  }

  getMasVendidas(): Observable<Pelicula[]> {
    // Retorna las 3 más vendidas para el inicio
    return of(this.peliculasMock.slice(0, 3));
  }

  getProximamente(): Observable<Pelicula[]> {
    return of(this.peliculasMock.filter(p => p.esProximamente));
  }

  async agregarResena(resena: Resena): Promise<void> {
    console.log('Agregando reseña:', resena);
  }
}