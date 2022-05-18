import { Component, OnInit } from '@angular/core';
import { TarjetaCredito } from 'src/app/models/TarjetaCredito';

@Component({
  selector: 'app-listar-tarjeta',
  templateUrl: './listar-tarjeta.component.html',
  styleUrls: ['./listar-tarjeta.component.css']
})
export class ListarTarjetaComponent implements OnInit {
  listTarjetas: TarjetaCredito[] = [
    { titular: "test", numeroTarjeta: "222", fechaExpiracion: "11/12", cvv: 124, fechaCreacion: new Date("2019-01-16"), fechaActualizacion: new Date("2019-01-16") }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
