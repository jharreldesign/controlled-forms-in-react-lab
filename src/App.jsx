import { useState } from 'react';
import Bookshelf from './component/Bookshelf';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({ title: '', author: '' });

  const handleInputChange = (event) => {
    setNewBook({ ...newBook, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setBooks((prevBooks) => [...prevBooks, newBook]);
    setNewBook({ title: '', author: '' });
  };

  return (
    <>
      <h1>Hello World!</h1>
      
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Book Title:</label>
        <input 
          type="text"
          name="title"
          value={newBook.title}
          onChange={handleInputChange}
        />

        <label htmlFor="author">Author:</label>
        <input 
          type="text"
          name="author"
          value={newBook.author}
          onChange={handleInputChange}
        />

        <button type="submit">Add Book!</button>
      </form>

      <Bookshelf books={books} />
    </>
  );
}

export default App;
