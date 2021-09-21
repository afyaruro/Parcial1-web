import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { RegistroComponent} from './registro/registro.component';
import { AbonosComponent } from './abonos/abonos.component';

const routes: Routes = [
  { path: 'consulta', component:  ConsultaComponent},
  { path: 'registro', component:  RegistroComponent},
  { path: 'home', component:  HomeComponent},
  { path: 'abonar', component:  AbonosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
