import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Pelicula } from '../../models/pelicula.model';
import { PeliculasService } from '../../services/peliculas';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css'
})
export class Inicio implements OnInit {
  peliculasDestacadas: Pelicula[] = [];

  constructor(private peliculasService: PeliculasService) {}

  ngOnInit(): void {
    this.peliculasService.getMasVendidas().subscribe(peliculas => {
      this.peliculasDestacadas = peliculas;
    });
  }
}