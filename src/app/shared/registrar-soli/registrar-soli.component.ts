import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';

export interface JuntaDirectiva {
  dni: number;
  nombres: string;
  apellidop: string;
  apellidom: string;
  cargo: string;  
}

const ELEMENT_DATA: JuntaDirectiva[] = [
  { dni: 1234567, nombres: 'Pancracio', apellidop: 'Teofulú', apellidom: 'Kafka', cargo: 'Presidente' },
  { dni: 2345678, nombres: 'Miguel', apellidop: 'Serevantes', apellidom: 'Saavedra', cargo: 'Tesorero' },
  { dni: 3456789, nombres: 'Mari', apellidop: 'Curi', apellidom: 'Ccamaco', cargo: 'Secretario' },
];

@Component({
  selector: 'app-registrar-soli',
  templateUrl: './registrar-soli.component.html',
  styleUrls: ['./registrar-soli.component.css'],
})

export class RegistrarSoliComponent implements OnInit {

  displayedColumns: string[] = ['dni', 'nombres', 'apellidop', 'apellidom', 'cargo', 'opciones'];
  dataSource = ELEMENT_DATA;

  apellidop: string;
  
  @ViewChild(MatTable) table: MatTable<JuntaDirectiva>;

  addData() {
    const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    this.dataSource.push(ELEMENT_DATA[randomElementIndex]);
    this.table.renderRows();
  }

  removeData() {
    this.dataSource.pop();
    this.table.renderRows();
  }
  constructor() { }


  ngOnInit() {

  }

}