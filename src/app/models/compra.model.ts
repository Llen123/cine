export interface ElementoCandyCompra {
  productoId?: string;
  comboId?: string;
  nombre: string;
  cantidad: number;
  precioUnitario: number;
}

export interface Compra {
  id?: string;
  usuarioId: string;
  funcionId: string;
  peliculaTitulo: string;
  fechaFuncion: string;
  butacasReservadas: string[]; 
  elementosCandy: ElementoCandyCompra[];
  totalPagado: number;
  puntosAcumulados: number;
  descuentoAplicado: number;
  qrCodeUrl?: string;
  qrValido: boolean; 
  fechaCompra: string;
  puedeCancelar: boolean; 
}