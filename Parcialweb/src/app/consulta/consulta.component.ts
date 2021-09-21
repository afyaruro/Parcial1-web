import { Component, OnInit } from '@angular/core';
import { ProyectoViviendaService } from '../services/proyecto-vivienda.service';
import { ProyectoVivienda } from '../Vivienda/proyecto-vivienda';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  viviendas: ProyectoVivienda[] = [];

  constructor(private viviendaservice:ProyectoViviendaService) { }

  ngOnInit(): void {
    this.viviendas=this.viviendaservice.get();
  }

}
