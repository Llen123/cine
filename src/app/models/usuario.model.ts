export type RolUsuario = 'cliente' | 'admin' | 'empleado';

export interface Usuario {
  id?: string;
  email: string;
  nombre: string;
  apellido: string;
  fechaNacimiento: string; 
  tipoSangre: string; 
  colorOjos: string;
  diasVacaciones: number;
  rol: RolUsuario;
  puntos: number; 
  credito: number; 
  esPrimeraCompra?: boolean;
}