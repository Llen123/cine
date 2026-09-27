import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pelicula } from '../../models/pelicula.model';
import { PeliculasService } from '../../services/peliculas';

@Component({
  selector: 'app-proximamente',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proximamente.html',
  styleUrl: './proximamente.css'
})
export class Proximamente implements OnInit {
  proximosEstrenos: Pelicula[] = [];
  alertasActivadas: Set<string> = new Set();

  constructor(private peliculasService: PeliculasService) {}

  ngOnInit(): void {
    this.peliculasService.getProximamente().subscribe(data => {
      this.proximosEstrenos = data;
    });
  }

  toggleAlerta(peliculaId?: string): void {
    if (!peliculaId) return;

    if (this.alertasActivadas.has(peliculaId)) {
      this.alertasActivadas.delete(peliculaId);
    } else {
      this.alertasActivadas.add(peliculaId);
      alert('🔔 ¡Alerta activada! Te notificaremos cuando las entradas estén disponibles.');
    }
  }

  esAlertaActivada(peliculaId?: string): boolean {
    return peliculaId ? this.alertasActivadas.has(peliculaId) : false;
  }
}