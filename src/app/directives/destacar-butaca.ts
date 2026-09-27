import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appDestacarButaca]',
  standalone: true
})
export class DestacarButacaDirective implements OnChanges {
  @Input('appDestacarButaca') fila!: string;

  constructor(private el: ElementRef) {}

  ngOnChanges(): void {
    if (!this.fila) return;

    const filaUpper = this.fila.toUpperCase();

    // Filas J y K -> Adaptadas / Discapacidad
    if (filaUpper === 'J' || filaUpper === 'K') {
      this.el.nativeElement.style.backgroundColor = '#0284c7'; // Azul accesibilidad
      this.el.nativeElement.style.color = '#ffffff';
      this.el.nativeElement.setAttribute('title', 'Butaca Adaptada / Accesible');
    } 
    // Filas R, S y T -> VIP
    else if (['R', 'S', 'T'].includes(filaUpper)) {
      this.el.nativeElement.style.backgroundColor = '#eab308'; // Dorado VIP
      this.el.nativeElement.style.color = '#000000';
      this.el.nativeElement.setAttribute('title', 'Butaca VIP');
    }
  }
}