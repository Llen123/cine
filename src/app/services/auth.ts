import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usuarioActualSubject = new BehaviorSubject<Usuario | null>(null);
  usuarioActual$: Observable<Usuario | null> = this.usuarioActualSubject.asObservable();

  constructor() {}

  // Retorna el usuario autenticado actualmente
  get usuarioActual(): Usuario | null {
    return this.usuarioActualSubject.value;
  }

  // Método simulado / conexión a Supabase Auth + Tabla 'usuarios'
  async registrarUsuario(nuevoUsuario: Usuario, contrasena: string): Promise<boolean> {
    // 1. Aquí se creará el usuario en Supabase Auth
    // 2. Se guardarán los datos extra en la tabla 'usuarios' (tipoSangre, colorOjos, diasVacaciones, etc.)
    console.log('Registrando usuario:', nuevoUsuario);
    this.usuarioActualSubject.next({ ...nuevoUsuario, id: 'user-123', puntos: 0, credito: 0, esPrimeraCompra: true });
    return true;
  }

  async iniciarSesion(email: string, contrasena: string): Promise<boolean> {
    // Lógica para autenticar con Supabase/Firebase
    return true;
  }

  cerrarSesion(): void {
    this.usuarioActualSubject.next(null);
  }

  esAdmin(): boolean {
    return this.usuarioActual?.rol === 'admin';
  }

  esEmpleado(): boolean {
    return this.usuarioActual?.rol === 'empleado' || this.usuarioActual?.rol === 'admin';
  }
}