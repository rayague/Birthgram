import React, { createContext, useContext, useState } from "react";

const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);

  return (
    <ContactContext.Provider
      value={{ contacts, setContacts, selectedContact, setSelectedContact }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export const useContact = () => {
  return useContext(ContactContext);
};
