import { TestBed } from '@angular/core/testing';

import { ProyectoViviendaService } from './proyecto-vivienda.service';

describe('ProyectoViviendaService', () => {
  let service: ProyectoViviendaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProyectoViviendaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
