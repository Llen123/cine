export interface ProductoCandy {
  id?: string;
  nombre: string;
  categoria: 'pochoclos' | 'bebidas' | 'snack' | 'dulces';
  precio: number;
  imagenUrl: string; 
  puntosCanje?: number; 
}

export interface ComboCandy {
  id?: string;
  nombre: string;
  descripcion: string;
  precioFijo: number;
  imagenUrl: string; 
  productosIncluded: string[]; 
}