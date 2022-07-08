import { useRef, useState } from "react";
import { Contact } from "../../models/contact.class";
import { ContactDetail } from "../pure/contactDetail";
import "../../styles/contact.scss";

const ContactComponent = () => {
	// * Initialize variables form
	const idRef = useRef(0);
	const nameRef = useRef("");
	const lastNameRef = useRef("");
	const emailRef = useRef("");
	const connectedRef = useRef("yes");

	// * Initialize contacts by default.
	const contact1 = new Contact({
		id: 1,
		name: "John",
		lastName: "García",
		email: "test@gmail.com",
		connected: true,
	});
	const contact2 = new Contact({
		id: 2,
		name: "Pablo",
		lastName: "Ramires",
		email: "test2@gmail.com",
		connected: false,
	});

	let [contacts, setContacts] = useState([contact1, contact2]);
	let [isUpdating, setUpdating] = useState(false);
	const modalRef = useRef();

	const addContact = (e) => {
		e.preventDefault();
		let currentContact = null;
		let connected = connectedRef.current.value === "yes" ? true : false;
		if (!isUpdating) {
			currentContact = new Contact({
				id: new Date().getTime(),
				name: nameRef.current.value,
				lastName: lastNameRef.current.value,
				email: emailRef.current.value,
				connected,
			});
			contacts = [...contacts, currentContact];
		} else {
			currentContact = new Contact({
				id: +idRef.current.value,
				name: nameRef.current.value,
				lastName: lastNameRef.current.value,
				email: emailRef.current.value,
				connected,
			});
			contacts = contacts.map((item) => {
				if (item.id === currentContact.id) {
					item = currentContact;
				}
				return item;
			});
		}
		setContacts(contacts);
		setUpdating(false);
		setTimeout(() => {
			modalRef.current.close();
		}, 500);
	};

	const openModal = () => {
		modalRef.current.showModal();
	};

	const updateContact = (contact) => {
		idRef.current.value = contact.id;
		nameRef.current.value = contact.name;
		lastNameRef.current.value = contact.lastName;
		emailRef.current.value = contact.email;
		setUpdating(true);
		openModal();
	};

	const handleDialog = (e) => {
		if (e.target === modalRef.current) {
			modalRef.current.close();
		}
	};

	const deleteContact = (id) => {
		contacts = contacts.filter((contact) => contact.id !== id);
		setContacts(contacts);
	};

	const modalComponent = () => {
		return (
			<dialog
				ref={modalRef}
				onClick={(event) => handleDialog(event)}
				id="custom-modal"
			>
				<form onSubmit={addContact}>
					<fieldset>
						<legend>Datos personales</legend>
						<label htmlFor="name">Nombre del contacto:</label>
						<input
							ref={nameRef}
							type="text"
							name="name"
							placeholder="Nombre completo"
							tabIndex="1"
							required
						/>
						<label htmlFor="lastName">Apellidos del contacto:</label>
						<input
							ref={lastNameRef}
							type="text"
							name="lastName"
							placeholder="Apellidos"
							tabIndex="2"
							required
						/>
						<label htmlFor="email">Correo del contacto:</label>
						<input
							ref={emailRef}
							type="email"
							name="email"
							placeholder="Correo electrónico"
							tabIndex="3"
							required
						/>
						<label htmlFor="connected">¿Esta áctivo?</label>
						<select name="connected" id="connected" ref={connectedRef}>
							<option value="yes">Áctivo</option>
							<option value="not">Ináctivo</option>
						</select>
						<input type="hidden" name="id" ref={idRef} />
						{isUpdating ? (
							<input type="submit" value="Actualizar" />
						) : (
							<input type="submit" value="Guardar" />
						)}
					</fieldset>
				</form>
			</dialog>
		);
	};

	return (
		<div>
			<h1>Información de contactos</h1>
			{/* Modal component */}
			{modalComponent()}
			{/* Contact detail */}
			<ContactDetail
				contacts={contacts}
				openModal={openModal}
				updateContact={updateContact}
				deleteContact={deleteContact}
			/>
		</div>
	);
};

export default ContactComponent;
