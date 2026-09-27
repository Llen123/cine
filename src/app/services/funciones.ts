import { Injectable } from '@angular/core';
import { Funcion } from '../models/funcion.model';

@Injectable({
  providedIn: 'root'
})
export class FuncionesService {

  constructor() {}

  // Verifica si hay solapamiento de horarios en la misma sala (+30 min de margen)
  validarHorarioDisponible(salaId: string, nuevaInicio: Date, duracionMinutos: number, funcionesExistentes: Funcion[]): boolean {
    const nuevaFin = new Date(nuevaInicio.getTime() + (duracionMinutos + 30) * 60000); // Duración + 30 min buffer

    for (const f of funcionesExistentes.filter(x => x.salaId === salaId)) {
      const fInicio = new Date(f.fechaHoraInicio);
      const fFin = new Date(f.fechaHoraFin);

      // Si se solapan los rangos de tiempo
      if (nuevaInicio < fFin && nuevaFin > fInicio) {
        return false; // Hay solapamiento
      }
    }
    return true; // Horario disponible
  }
}