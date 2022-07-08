import "../../../styles/contact.scss";

export const ModalContact = ({
	modalRef,
	handleDialog,
	addContact,
	nameRef,
	lastNameRef,
	emailRef,
	connectedRef,
	idRef,
	isUpdating,
}) => {
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
