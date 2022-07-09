import PropTypes from "prop-types";
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

ModalContact.propTypes = {
	modalRef: PropTypes.oneOfType([
		PropTypes.func,
		PropTypes.shape({ current: PropTypes.instanceOf(HTMLDialogElement) }),
	]).isRequired,
	addContact: PropTypes.func.isRequired,
	handleDialog: PropTypes.func.isRequired,
	nameRef: PropTypes.oneOfType([
		PropTypes.func,
		PropTypes.shape({ current: PropTypes.any }),
	]).isRequired,
	lastNameRef: PropTypes.oneOfType([
		PropTypes.func,
		PropTypes.shape({ current: PropTypes.any }),
	]).isRequired,
	emailRef: PropTypes.oneOfType([
		PropTypes.func,
		PropTypes.shape({ current: PropTypes.any }),
	]).isRequired,
	connectedRef: PropTypes.oneOfType([
		PropTypes.func,
		PropTypes.shape({ current: PropTypes.any }),
	]).isRequired,
	idRef: PropTypes.oneOfType([
		PropTypes.func,
		PropTypes.shape({ current: PropTypes.any }),
	]).isRequired,
	isUpdating: PropTypes.bool.isRequired,
};
