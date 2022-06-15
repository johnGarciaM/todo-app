import React from "react";
import { Contact } from "../../models/contact.class";
import { ContactDetail } from "../pure/contactDetail";

const ContactComponent = () => {
  const newContact = new Contact({
    name: "John",
    lastName: "García",
    email: "test@gmail.com",
    connected: true,
  });
  return (
    <div>
      <h1>Información de contacto</h1>
      <ContactDetail contact={newContact} />
    </div>
  );
};

export default ContactComponent;
