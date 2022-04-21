import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-tarjeta',
  templateUrl: './crear-tarjeta.component.html',
  styleUrls: ['./crear-tarjeta.component.css']
})

export class CrearTarjetaComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      titular: ['', Validators.required],
      nroTarjeta: ['', [Validators.required], Validators.maxLength(16)],
      fechaExpiracion: ['', [Validators.required],Validators.maxLength(5), Validators.min(5)],
      cvv: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  public CrearTarjeta() {
    console.log(this.form);
  }

}
