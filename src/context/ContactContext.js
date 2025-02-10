import React, { createContext, useContext } from "react";
import axios from "axios";

const ContactContext = createContext(null);

export const useContactContext = () => {
    return useContext(ContactContext);
}

export const ContactProvider = (props) => {
    const sendMessage = async (email, name, message) => {
        if (process.env.REACT_APP_CONTACT_ME == null || process.env.REACT_APP_CONTACT_ME === "") {
            return false;
        }

        await axios.post(process.env.REACT_APP_CONTACT_ME, {
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