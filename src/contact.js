import React from 'react';


export default function Contact(props){

       const deleteContactHere = () => {
              props.deleteContact(props.phone);
       };

      return(
       <div style={{border:2,backgroundColor:'green'}}>
       <p>nom:{props.nom} phone :  { props.phone} </p>
       <button onClick={deleteContactHere}>delete</button>

</div>
      );
}