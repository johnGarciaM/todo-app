import { useState } from "react";
import { Contact } from "../../models/contact.class";
import { ContactDetail } from "../pure/contactDetail";

const ContactComponent = () => {
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

	// const addContact = (contact) => {
	// 	contacts = [...contacts, contact];
	// 	setContacts(contacts);
	// };

	const updateContact = (id) => {
		console.log("id :>> ", id);
	};

	const deleteContact = (id) => {
		contacts = contacts.filter((contact) => contact.id !== id);
		setContacts(contacts);
	};

	return (
		<div>
			<h1>Información de contacto</h1>
			<ContactDetail
				contacts={contacts}
				updateContact={updateContact}
				deleteContact={deleteContact}
			/>
		</div>
	);
};

export default ContactComponent;
