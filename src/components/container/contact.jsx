import { useRef, useState } from "react";
import { Contact } from "../../models/contact.class";
import { ContactDetail } from "../pure/contactDetail";
import "../../styles/contact.scss";

const ContactComponent = () => {
	// * Initialize variables form
	const nameRef = useRef("");
	const lastNameRef = useRef("");
	const emailRef = useRef("");

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
	const modalRef = useRef();

	const addContact = (e) => {
		e.preventDefault();
		const newContact = new Contact({
			id: new Date().getTime(),
			name: nameRef.current.value,
			lastName: lastNameRef.current.value,
			email: emailRef.current.value,
			connected: true,
		});
		contacts = [...contacts, newContact];
		setContacts(contacts);
		setTimeout(() => {
			modalRef.current.close();
		}, 1000);
	};

	const openModal = () => {
		modalRef.current.showModal();
	};

	const updateContact = (id) => {
		console.log("id :>> ", id);
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
						<input type="hidden" name="id" />
						<input type="submit" value="Enviar" />
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
