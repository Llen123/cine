import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './registro.html',
  styleUrl: './registro.css'
})
export class Registro {
  registroForm: FormGroup;
  mensajeError: string = '';

  tiposSangre: string[] = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registroForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      tipoSangre: ['', Validators.required],
      colorOjos: ['', Validators.required],
      diasVacaciones: [0, [Validators.required, Validators.min(0)]]
    });
  }

  async onSubmit() {
    if (this.registroForm.invalid) {
      this.registroForm.markAllAsTouched();
      return;
    }

    const formData = this.registroForm.value;
    const nuevoUsuario = {
      email: formData.email,
      nombre: formData.nombre,
      apellido: formData.apellido,
      fechaNacimiento: formData.fechaNacimiento,
      tipoSangre: formData.tipoSangre,
      colorOjos: formData.colorOjos,
      diasVacaciones: formData.diasVacaciones,
      rol: 'cliente' as const,
      puntos: 0,
      credito: 0,
      esPrimeraCompra: true
    };

    const exito = await this.authService.registrarUsuario(nuevoUsuario, formData.password);
    if (exito) {
      this.router.navigate(['/inicio']);
    } else {
      this.mensajeError = 'Error al registrar el usuario.';
    }
  }
}