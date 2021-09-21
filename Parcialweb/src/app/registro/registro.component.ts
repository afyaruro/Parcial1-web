import { Component, OnInit } from '@angular/core';
import { ProyectoViviendaService } from '../services/proyecto-vivienda.service';
import { ProyectoVivienda } from '../Vivienda/proyecto-vivienda';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  vivienda: ProyectoVivienda;

  constructor(private viviendaservice: ProyectoViviendaService) {
    this.vivienda = new ProyectoVivienda();
  }

  ngOnInit(): void {
  }

  calcularCuota() {
    if (this.vivienda.nombreProyecto === "M") {
      alert("Usted Aplico a la Vivienda Brisas del Mar");
      this.vivienda.nombreProyecto = "Brisas del Mar";
      this.CuotaBrisaMar();
    }
    else if (this.vivienda.nombreProyecto === "S") {
      alert("Usted Aplico a la Vivienda Balcones de la Sierra");
      this.vivienda.nombreProyecto = "Balcones de la Sierra"
      this.CuotaBalconesSierra();
    }
    else if (this.vivienda.nombreProyecto === "R") {
      alert("Usted Aplico a la Vivienda Jardines del Rey");
      this.vivienda.nombreProyecto = "Jardines del Rey";
      this.CuotaJadinesRey();
    }

    else {
      alert("La Opcion Seleccionada no esta Registrada..");
    }
  }

  CuotaBrisaMar() {
    this.vivienda.valorVivienda = 40000;
    this.vivienda.cuotainicial = 40000 * 0.20;
    this.viviendaservice.post(this.vivienda)
  }

  CuotaBalconesSierra() {
    this.vivienda.valorVivienda = 50000;
    this.vivienda.cuotainicial = 50000 * 0.20;
    this.viviendaservice.post(this.vivienda);
  }

  CuotaJadinesRey() {
    this.vivienda.valorVivienda = 70000;
    this.vivienda.cuotainicial = 70000 * 0.20;
    this.viviendaservice.post(this.vivienda);
  }
}
