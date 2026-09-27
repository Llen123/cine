import { Pipe, PipeTransform } from '@angular/core';
import { Pelicula } from '../models/pelicula.model';

@Pipe({
  name: 'filtroGenero',
  standalone: true
})
export class FiltroGeneroPipe implements PipeTransform {
  transform(peliculas: Pelicula[], generosSeleccionados: string[], busquedaTexto: string = ''): Pelicula[] {
    if (!peliculas) return [];

    return peliculas.filter(pelicula => {
      // Coincidencia de texto en título
      const coincideTexto = busquedaTexto === '' || 
        pelicula.titulo.toLowerCase().includes(busquedaTexto.toLowerCase());

      // Coincidencia de géneros
      const coincideGenero = generosSeleccionados.length === 0 || 
        generosSeleccionados.some(g => pelicula.generos.includes(g));

      return coincideTexto && coincideGenero;
    });
  }
}