import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import AddContact from './component/AddContact';
import ContactList from './component/ContactList';
import {  BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { v4 as uuid } from "uuid";
import { Outlet } from 'react-router-dom';

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
<AddContact AddContactHandler={ AddContactHandler} />
<ContactList contacts={contacts} getContactId={removeContactHandler}/>
    </div>
  );
}

export default App;

// contacts={contacts} getContactId={removeContactHandler
//   AddContactHandler={ AddContactHandler}