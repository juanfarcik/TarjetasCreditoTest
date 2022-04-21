export class TarjetaCredito {
    id?: string;
    titular: string;
    numeroTarjeta: string;
    fechaExpiracion: string;
    cvv: number;
    fechaCreacion: Date;
    fechaActualizacion: Date;

    constructor(titular: string, numeroTarjeta: string, fechaExpiracion: string, cvv: number, fechaCreacion: Date, fechaActualizacion: date) {
        this.titular = titular;
        this.numeroTarjeta = numeroTarjeta;
        this.fechaExpiracion = fechaExpiracion;
        this.cvv = cvv;
        this.fechaCreacion = fechaCreacion;
        this.fechaActualizacion = fechaActualizacion;
    }
}