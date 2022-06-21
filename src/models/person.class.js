export class Person {
	nombre;
	apellidos;
	fecha;
	edad;
	constructor({ nombre, apellidos, edad, fecha }) {
		this.nombre = nombre;
		this.apellidos = apellidos;
		this.edad = edad;
		this.fecha = fecha;
	}
}
