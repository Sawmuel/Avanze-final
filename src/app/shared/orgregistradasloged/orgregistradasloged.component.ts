import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  position: number;
  codigo: string;
  nombre: string;
  lugar: string;
  inivig: string;
  finvig: string;
  tipo: string;
  resol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, codigo: 'Hydrogen', nombre: 'a', lugar: 'H', inivig: 'asd', finvig: 'asd', tipo: 'asd', resol: 'asd' },
  { position: 2, codigo: 'Hydrogen', nombre: 'a', lugar: 'H', inivig: 'asd', finvig: 'asd', tipo: 'asd', resol: 'asd' },
];


@Component({
  selector: 'app-orgregistradasloged',
  templateUrl: './orgregistradasloged.component.html',
  styleUrls: ['./orgregistradasloged.component.css']
})
export class OrgregistradaslogedComponent implements OnInit {
  displayedColumns: string[] = ['position', 'codigo', 'nombre', 'lugar', 'inivig', 'finvig', 'tipo', 'resol', 'descargar'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  constructor() { }

  ngOnInit(): void {
  }

}
