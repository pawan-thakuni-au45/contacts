import React from 'react'
import ContactCard from './ContactCard';
function ContactList(props) {
    console.log(props,'k');
    const {id,name,email}=props.contacts



    const deleteHandler=(id)=>{
        props.getContactId(id)
    };
    const renderContactList=props.contacts.map((e)=>{
        return(
            <ContactCard contacts={e} clickHandle={deleteHandler} key={e.id}/>
        )
    })


  return (
    <div>
     <div className='ui celled list'>
      {renderContactList}
            
         
      </div>
    
    </div>
  )
}

export default ContactList