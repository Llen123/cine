export interface Resena {
  id?: string;
  peliculaId: string;
  usuarioId: string;
  nombreUsuario: string;
  estrellas: number; // 1 a 5
  comentario: string;
  fecha: string;
}

export interface Pelicula {
  id?: string;
  titulo: string;
  sinopsis: string;
  duracionMinutos: number; 
  imagenUrl: string;
  generos: string[]; 
  clasificacionEdad: 'TP' | '13+' | '18+';
  enInicio: boolean; 
  esProximamente: boolean;
  esPreventa: boolean;
  fechaEstreno?: string;
  precioPreventa?: number;
  promedioEstrellas?: number;
}