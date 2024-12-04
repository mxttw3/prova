export class User {
  nombre: string;
  apellidos: string;
  email: string;
  dni: string;

  constructor(nombre: string, apellidos: string, email: string, dni: string) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.email = email;
    this.dni = dni;
  }
}
