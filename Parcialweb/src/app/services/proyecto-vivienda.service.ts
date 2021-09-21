import { Injectable } from '@angular/core';
import { ProyectoVivienda } from '../Vivienda/proyecto-vivienda';

@Injectable({
  providedIn: 'root'
})
export class ProyectoViviendaService {

  constructor() { }

  get(): ProyectoVivienda[] {
    return JSON.parse(localStorage.getItem('datos') || '[]');
  }
  post(vivienda: ProyectoVivienda) {
    let viviendas: ProyectoVivienda[] = [];
    if (this.get() != null) {
      viviendas = this.get();
    }
    viviendas.push(vivienda);
    localStorage.setItem('datos', JSON.stringify(viviendas));
  }

 

}
