import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  
  // Vistas Públicas
  { 
    path: 'inicio', 
    loadComponent: () => import('./pages/inicio/inicio').then(m => m.Inicio) 
  },
  { 
    path: 'peliculas', 
    loadComponent: () => import('./pages/peliculas/peliculas').then(m => m.Peliculas) 
  },
  { 
    path: 'proximamente', 
    loadComponent: () => import('./pages/proximamente/proximamente').then(m => m.Proximamente) 
  },
  { 
    path: 'login', 
    loadComponent: () => import('./pages/login/login').then(m => m.Login) 
  },
  { 
    path: 'registro', 
    loadComponent: () => import('./pages/registro/registro').then(m => m.Registro) 
  },

  // Vistas de Usuario Registrado
  { 
    path: 'perfil', 
    loadComponent: () => import('./pages/perfil/perfil').then(m => m.Perfil),
    // canActivate: [AuthGuard]
  },
  { 
    path: 'mis-peliculas', 
    loadComponent: () => import('./pages/mis-peliculas/mis-peliculas').then(m => m.MisPeliculas),
    // canActivate: [AuthGuard]
  },

  // Vistas Administrativas y Empleado
  { 
    path: 'admin', 
    loadComponent: () => import('./pages/admin/admin').then(m => m.Admin),
    // canActivate: [AdminGuard]
  },
  { 
    path: 'empleado', 
    loadComponent: () => import('./pages/empleado/empleado').then(m => m.Empleado),
    // canActivate: [EmpleadoGuard]
  },

  // Ruta comodín para 404
  { path: '**', redirectTo: 'inicio' }
];