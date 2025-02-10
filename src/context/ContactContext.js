import React, { createContext, useContext } from "react";
import axios from "axios";

const ContactContext = createContext(null);

export const useContactContext = () => {
    return useContext(ContactContext);
}

export const ContactProvider = (props) => {
    const sendMessage = async (email, name, message) => {
        let contact_url = process.env.REACT_APP_CONTACT_ME;

        if (contact_url === null) {
            return false;
        }

        await axios.post(contact_url, {
            name: name,
            email: email,
            message: message
        });

        return true;
    };
    return (
        <ContactContext.Provider
            value={{
                sendMessage: sendMessage
            }}
        >
            {props.children}
        </ContactContext.Provider>
    );
};