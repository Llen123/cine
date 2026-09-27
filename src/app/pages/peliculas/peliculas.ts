import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Pelicula } from '../../models/pelicula.model';
import { PeliculasService } from '../../services/peliculas';
import { FiltroGeneroPipe } from '../../pipes/filtro-genero-pipe';

@Component({
  selector: 'app-peliculas',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, FiltroGeneroPipe],
  templateUrl: './peliculas.html',
  styleUrl: './peliculas.css'
})
export class Peliculas implements OnInit {
  peliculas: Pelicula[] = [];
  textoBusqueda: string = '';
  
  // Lista de géneros disponibles para filtrar
  generosDisponibles: string[] = ['Acción', 'Comedia', 'Drama', 'Ciencia Ficción', 'Terror', 'Animación', 'Aventura'];
  generosSeleccionados: string[] = [];

  constructor(private peliculasService: PeliculasService) {}

  ngOnInit(): void {
    this.peliculasService.getPeliculas().subscribe(data => {
      this.peliculas = data;
    });
  }

  // Alternar selección de géneros (soporta múltiple selección)
  toggleGenero(genero: string): void {
    const index = this.generosSeleccionados.indexOf(genero);
    if (index > -1) {
      this.generosSeleccionados.splice(index, 1);
    } else {
      this.generosSeleccionados.push(genero);
    }
  }

  limpiarFiltros(): void {
    this.textoBusqueda = '';
    this.generosSeleccionados = [];
  }
}