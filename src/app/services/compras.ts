import { Injectable } from '@angular/core';
import { Compra } from '../models/compra.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComprasService {
  private comprasMock: Compra[] = [];

  constructor() {}

  // Procesar una compra completa de entradas + candy
  async registrarCompra(compra: Omit<Compra, 'id'>): Promise<Compra> {
    const nuevaCompra: Compra = {
      ...compra,
      id: 'compra-' + Date.now(),
      qrValido: true,
      fechaCompra: new Date().toISOString()
    };

    this.comprasMock.push(nuevaCompra);
    console.log('Compra registrada con éxito:', nuevaCompra);
    return nuevaCompra;
  }

  // Obtener historial de un usuario
  getMisCompras(usuarioId: string): Observable<Compra[]> {
    return of(this.comprasMock.filter(c => c.usuarioId === usuarioId));
  }

  // Lógica de cancelación (hasta 2 hs antes de la función -> Devuelve crédito)
  cancelarCompra(compraId: string, fechaFuncion: string): { exito: boolean; mensaje: string; montoCredito?: number } {
    const horaFuncion = new Date(fechaFuncion).getTime();
    const horaActual = new Date().getTime();
    const diferenciaHoras = (horaFuncion - horaActual) / (1000 * 60 * 60);

    if (diferenciaHoras < 2) {
      return { exito: false, mensaje: 'No se puede cancelar la compra con menos de 2 horas de anticipación.' };
    }

    const compra = this.comprasMock.find(c => c.id === compraId);
    if (compra) {
      compra.qrValido = false; // Inhabilitar QR
      return { 
        exito: true, 
        mensaje: 'Compra cancelada correctamente. Saldo acreditado a tu cuenta.', 
        montoCredito: compra.totalPagado 
      };
    }

    return { exito: false, mensaje: 'Compra no encontrada.' };
  }

  // Validación de QR para el rol EMPLEADO
  validarQR(codigoQR: string): { valido: boolean; mensaje: string; detalles?: Compra } {
    const compra = this.comprasMock.find(c => c.id === codigoQR);

    if (!compra) {
      return { valido: false, mensaje: 'Código QR inexistente o inválido.' };
    }

    if (!compra.qrValido) {
      return { valido: false, mensaje: 'Este código QR ya fue utilizado o cancelado.' };
    }

    // Inhabilitar inmediatamente para evitar reuso
    compra.qrValido = false;
    return { valido: true, mensaje: 'Entrada / Candy validado exitosamente.', detalles: compra };
  }
}