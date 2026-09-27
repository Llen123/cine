import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestacarButacaDirective } from '../../directives/destacar-butaca';

export interface Butaca {
  id: string;         // Ej: "A1", "J3", "R5"
  fila: string;       // Ej: "A", "J", "R"
  numero: number;     // Ej: 1, 2, 3...
  tipo: 'normal' | 'discapacidad' | 'vip';
  estado: 'disponible' | 'ocupada' | 'seleccionada';
  precio: number;
}

@Component({
  selector: 'app-seleccion-butacas',
  standalone: true,
  imports: [CommonModule, DestacarButacaDirective],
  templateUrl: './seleccion-butacas.html',
  styleUrl: './seleccion-butacas.css'
})
export class SeleccionButacas implements OnInit {
  @Input() precioBase: number = 5000;
  @Output() seleccionCambiada = new EventEmitter<Butaca[]>();

  filas: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T'];
  butacasPorFila: number = 10;
  matrizButacas: Butaca[][] = [];
  butacasSeleccionadas: Butaca[] = [];

  ngOnInit(): void {
    this.generarMapaButacas();
  }

  generarMapaButacas(): void {
    this.matrizButacas = [];

    for (const fila of this.filas) {
      const filaButacas: Butaca[] = [];
      let tipo: 'normal' | 'discapacidad' | 'vip' = 'normal';
      let multiplicadorPrecio = 1;

      // Definir tipo según requerimiento consigna
      if (['J', 'K'].includes(fila)) {
        tipo = 'discapacidad';
      } else if (['R', 'S', 'T'].includes(fila)) {
        tipo = 'vip';
        multiplicadorPrecio = 1.3; // 30% recargo por VIP
      }

      for (let num = 1; num <= this.butacasPorFila; num++) {
        // Simulación: ocupar aleatoriamente algunas butacas existentes
        const estaOcupada = Math.random() < 0.15;

        filaButacas.push({
          id: `${fila}${num}`,
          fila: fila,
          numero: num,
          tipo: tipo,
          estado: estaOcupada ? 'ocupada' : 'disponible',
          precio: Math.round(this.precioBase * multiplicadorPrecio)
        });
      }
      this.matrizButacas.push(filaButacas);
    }
  }

  seleccionarButaca(butaca: Butaca): void {
    if (butaca.estado === 'ocupada') return;

    if (butaca.estado === 'seleccionada') {
      butaca.estado = 'disponible';
      this.butacasSeleccionadas = this.butacasSeleccionadas.filter(b => b.id !== butaca.id);
    } else {
      butaca.estado = 'seleccionada';
      this.butacasSeleccionadas.push(butaca);
    }

    this.seleccionCambiada.emit(this.butacasSeleccionadas);
  }

  get totalPrecio(): number {
    return this.butacasSeleccionadas.reduce((sum, b) => sum + b.precio, 0);
  }
}