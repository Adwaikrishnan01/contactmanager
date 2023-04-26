import React from 'react'
import Contactcard from './Contactcard.js'

         
    
const ContactList=(props)=>{
    
    const removecontact=(id)=>{
        props.getcontact(id);
    }
    const renderedcontact=props.contacts.map((contact) =>{
        
       return (<Contactcard contacts={contact} 
        getcontactid={removecontact} 
        key={contact.id}></Contactcard>)
    } )
   

    return <div className="uicelledlist">
        {renderedcontact}
    </div>
}
export default ContactList;











