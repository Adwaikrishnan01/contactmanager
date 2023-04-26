import React from 'react'
import './contactcard.css'
const Contactcard=(props)=>{
   
    const{id,name,email}=props.contacts
    
return(<div className='content'>
    <div className='contactcard'> 
    <div className='name-email'>
         <div className='contactdetail'>Name: {name}
        </div>
        <div className='contactdetail'>Email: {email}</div></div>
       
        <button className='deletebtnblue' onClick={()=>{
            props.getcontactid(id)
            console.log(props)
        }}>Del</button>
    </div>
       
    </div>);}

    export default Contactcard;