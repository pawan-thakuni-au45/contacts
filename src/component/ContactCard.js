import React from 'react'

function ContactCard(props) {
    const {id,name,email}=props.contacts
  return (
    <div className='item'>
    <div className='content'>
     <div className='header'>{name}</div>
     <div>{email}</div>
     </div>
       <i className='trash alternate outline icon'
        style={{color:'red'}}
        onClick={()=>props.clickHandle(id)}
       >
         
       </i>
    
    </div>
  )
}

export default ContactCard