import React, { useState } from 'react';
import './App.css';
import Contact from './contact';

function App() {

  const [listContact,setListContact] = useState([]);
  const [nom,setNom] = useState('');
  const [phone,setPhone] = useState('');


  const addButtonClicked = () => {
    setListContact([...listContact,{nom:nom,phone:phone}]);
  };

  const nomChanged = (e) => {
    setNom(e.target.value);
  };
  
  const phoneChanged = (e) => {
    setPhone(e.target.value);
  };
  
  const deleteContact = (p) => {
    const temptable = listContact.filter( c => c.phone != p);
    setListContact(temptable);
  };

  return (
    <>
    <input type='text' placeholder='nom' onChange={nomChanged}/>
    <input type='text' placeholder='phone number' onChange={phoneChanged} />
    <button onClick={addButtonClicked}> Ajouter</button>
    {listContact.map((e)=>{
      return (<Contact deleteContact={deleteContact} nom={e.nom} phone={e.phone} />);
    })}
    </>

  );
}

export default App;
