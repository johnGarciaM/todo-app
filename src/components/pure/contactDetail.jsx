import React from "react";
import PropTypes from "prop-types";
import { Contact } from "../../models/contact.class";

export const ContactDetail = ({ contacts, updateContact, deleteContact }) => {
	const customBadge = (state) => {
		return state ? (
			<span className="badge bg-success">Áctivo</span>
		) : (
			<span className="badge bg-danger">Ináctivo</span>
		);
	};

	const CustomRows = () => {
		return contacts.length ? (
			contacts.map((contact, index) => {
				return (
					<tr key={index}>
						<td>{contact.name}</td>
						<td>{contact.lastName}</td>
						<td>{contact.email}</td>
						<td>{customBadge(contact.connected)}</td>
						<td>
							<i
								className="pe-auto bi bi-pencil-square m-3"
								role="button"
								onClick={updateContact(contact.id)}
							></i>
							<i
								className="pe-auto bi bi-trash"
								role="button"
								onClick={() => deleteContact(contact.id)}
							></i>
						</td>
					</tr>
				);
			})
		) : (
			<tr>
				<td colSpan={4}>No hay contactos</td>
			</tr>
		);
	};

	return (
		<div>
			<table className="table table-hover">
				<thead>
					<tr>
						<th>Nombre del contacto</th>
						<th>Apellidos del contacto</th>
						<th>Correo del contacto</th>
						<th>Estado del contacto</th>
						<th>Acciones</th>
					</tr>
				</thead>
				<tbody>
					{/* previous rows */}
					{CustomRows()}
					{/* add new contacts */}
					<div className="d-flex">
						<i class="fs-4 bi bi-plus-circle"></i>
					</div>
				</tbody>
			</table>
		</div>
	);
};

ContactDetail.propTypes = {
	contacts: PropTypes.arrayOf(PropTypes.instanceOf(Contact)).isRequired,
	updateContact: PropTypes.func.isRequired,
	deleteContact: PropTypes.func.isRequired,
};

export default ContactDetail;
