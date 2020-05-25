import React from 'react';

export default function Books(props) {
  return (
    <div style={{ backgroundColor: 'green', margin: '5px', width: '50%' }}>
      <span> name of book : {props.bookname} </span>
    </div>
  );
}
