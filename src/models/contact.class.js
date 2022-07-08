export class Contact {
	id = 0;
	name = "";
	lastName = "";
	email = "";
	connected = false;

	constructor({ id, name, lastName, email, connected }) {
		this.id = id;
		this.name = name;
		this.lastName = lastName;
		this.email = email;
		this.connected = connected;
	}
}
