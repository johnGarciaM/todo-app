import { useRef, useState } from "react";
import { Contact } from "../../models/contact.class";
import { ContactDetail } from "../pure/contactDetail";
import { ModalContact } from "../pure/forms/modalContact";
import "../../styles/contact.scss";

const ContactComponent = () => {
	// * Initialize variables form
	const modalRef = useRef(null);
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
		setUpdating(false);
		idRef.current.value = 0;
		nameRef.current.value = "";
		lastNameRef.current.value = "";
		emailRef.current.value = "";
		connectedRef.current.value = "yes";
		modalRef.current.showModal();
	};

	const updateContact = (contact) => {
		idRef.current.value = contact.id;
		nameRef.current.value = contact.name;
		lastNameRef.current.value = contact.lastName;
		emailRef.current.value = contact.email;
		setUpdating(true);
		setTimeout(() => {
			modalRef.current.showModal();
		}, 500);
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

	return (
		<div>
			<h1>Información de contactos</h1>
			<ModalContact
				modalRef={modalRef}
				handleDialog={handleDialog}
				addContact={addContact}
				nameRef={nameRef}
				lastNameRef={lastNameRef}
				emailRef={emailRef}
				connectedRef={connectedRef}
				idRef={idRef}
				isUpdating={isUpdating}
			/>
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
