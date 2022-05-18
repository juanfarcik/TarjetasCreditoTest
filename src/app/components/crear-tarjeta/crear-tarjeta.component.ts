import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TarjetaCredito } from 'src/app/models/TarjetaCredito';

@Component({
  selector: 'app-crear-tarjeta',
  templateUrl: './crear-tarjeta.component.html',
  styleUrls: ['./crear-tarjeta.component.css']
})

export class CrearTarjetaComponent implements OnInit {
  form: FormGroup;
  listTarjetas: TarjetaCredito[] = [];


  constructor(private fb: FormBuilder, private toastr: ToastrService) {
    this.form = this.fb.group({
      titular: ['', Validators.required],
      nroTarjeta: ['', [Validators.required], Validators.maxLength(16)],
      fechaExpiracion: ['', [Validators.required], Validators.maxLength(5), Validators.min(5)],
      cvv: ['', Validators.required], 
    })
  }

  ngOnInit(): void {
  }

  public CrearTarjeta() {
    console.log(this.form);

    const tarjeta: any = {
      titular: this.form.get("titular")?.value,
      numeroTarjeta: this.form.get("numeroTarjeta")?.value,
      fechaExpiracion: this.form.get("fechaExpiracion")?.value,
      cvv: this.form.get("cvv")?.value
    }
    this.listTarjetas.push(tarjeta); 
    this.toastr.success("Tarjeta registrada OK");

    this.form.reset();
  }

}
