import React from 'react';
import { useState } from 'react';
import Books from './Books';
import './App.css';

function App() {
  const [numberOfBooks, setnumberOfBooks] = useState(0);
  const [currentBook, setCurrentBook] = useState('');
  const [listBooks, setListBooks] = useState([]);

  const incrementBooks = () => {
    setnumberOfBooks(numberOfBooks + 1);
  };

  const deleteLastBook = () => {
    setListBooks(listBooks.slice(0, listBooks.length - 1));
  };

  const addBook = () => {
    // 39lo 3lih mzyan: normalement khassna nssifto tableau machi string
    setListBooks([...listBooks, currentBook]);
  };

  const textChanged = (e) => {
    setCurrentBook(e.target.value);
  };

  return (
    <>
      <div className='maindiv'>
        <span>number of books: {numberOfBooks} </span>
        <br />
        <button onClick={incrementBooks}>Incrementer</button>

        <button onClick={deleteLastBook}>Supprimer</button>
        <br />
        <br />
        <input
          type='textfield'
          placeholder='rich dad poor dad'
          onChange={textChanged}
        />
        <button onClick={addBook}>Ajouter</button>

        {listBooks.map((item) => {
          return <Books bookname={item} />;
        })}
      </div>
    </>
  );
}

export default App;
