import React from "react";
import PropTypes from "prop-types";
import { Contact } from "../../models/contact.class";

export const ContactDetail = ({ contact }) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", fontSize: "1.5rem" }}
    >
      <span>Nombre del contacto: {contact.name}</span>
      <span>Apellido del contacto: {contact.lastName}</span>
      <span>Correo del contacto: {contact.email}</span>
      <span>
        Está conectado: {contact.connected ? "Conectado" : "No esta conectado"}
      </span>
    </div>
  );
};

ContactDetail.propTypes = {
  contact: PropTypes.instanceOf(Contact),
};

export default ContactDetail;
