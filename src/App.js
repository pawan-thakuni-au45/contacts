import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import AddContact from './component/AddContact';
import ContactList from './component/ContactList';
import { useEffect, useState } from 'react';
import { v4 as uuid } from "uuid";

function App() {
  const LOCAL_STORAGE_KEY='contacts'
  const [contacts,setContact]=useState([])
console.log(contacts);
  const AddContactHandler=(contact)=>{
    console.log(contact);
    
    setContact([...contacts,{id:uuid(),...contact}])
  }

  const removeContactHandler=(id)=>{
      const newContactList=contacts.filter((contact)=>{
         return contact.id!==id
      })
      setContact(newContactList)
  }

  useEffect(()=>{
    const  retriveContact=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
     if(retriveContact)  setContact(retriveContact)
  },[])

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts))
  },[contacts])
    return (
    <div className="ui container">
    <Header/>
        <AddContact AddContactHandler={AddContactHandler}/>
        <ContactList contact={contacts} getContactId={removeContactHandler}/>
    </div>
  );
}

export default App;
