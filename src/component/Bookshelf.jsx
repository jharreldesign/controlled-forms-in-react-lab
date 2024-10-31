const Bookshelf = ({ books }) => {
    return (
      <div className="bookshelf">
        {books.map((book, index) => (
          <div key={index} className="book-card">
            <h3>{book.title}</h3>
            <p>{book.author}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default Bookshelf;
  