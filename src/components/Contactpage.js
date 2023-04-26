import React, { useState } from 'react'
import './Contactstyle.css'
import ContactList from "./ContactList";
import Contacts from "./Contacts.js"
import { v4 as uuidv4 } from 'uuid';

function Contactpage() {
    const [contacts, setContact] = useState([]);
    const addContactHandler = (contact) => {
        console.log(contact)
       setContact([...contacts,{id:uuidv4(), ...contact}])
    }
    
       const deletecontact=(id)=>{
          const newcontacts=contacts.filter((contact)=>{ 
            return contact.id!==id
        })
       setContact(newcontacts)
    }
    
    return (
        <>
            <h1>CONTACT PAGE</h1>

            <Contacts addContactHandler={addContactHandler} />
            <ContactList contacts={contacts} getcontact={deletecontact}/>
        </>

    );

}
export default Contactpage;