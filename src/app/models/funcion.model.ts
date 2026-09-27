export type FormatoProyeccion = '2D' | '3D' | '4D' | '5D';
export type IdiomaProyeccion = 'Castellano' | 'Subtitulada';
export type TipoButaca = 'normal' | 'accesible' | 'vip';

export interface Butaca {
  id: string;
  fila: string;
  columna: number; 
  seccion: 'izquierda' | 'centro' | 'derecha';
  tipo: TipoButaca; 
  ocupada: boolean;
  precio: number;
}

export interface Funcion {
  id?: string;
  peliculaId: string;
  salaId: string; 
  fechaHoraInicio: string; 
  fechaHoraFin: string; 
  formato: FormatoProyeccion;
  idioma: IdiomaProyeccion;
  precioBase: number;
}