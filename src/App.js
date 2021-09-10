import { useEffect, useState } from "react";
import "./App.css";
import BookCard from "./componentes/BookCard";
//our main function to edit below vvvv,,,,

function App() {
  const [books, setBooks] = useState([]);
  const [favoriteBooks, setFavoriteBooks] = useState([])

  const fetchBooks = () => {
    fetch("https://api.itbook.store/1.0/new")
    .then((res) => res.json())
    .then((data) => setBooks(data.books));
  };

  useEffect(fetchBooks, [])

  const handleAddToFavs = (book) => {
    setFavoriteBooks([...favoriteBooks, book])
  }  

  //when fetching from an api we want the funcdtion above to 
  //run - now we will use useEffect;
  
  return (
    <div>
       <h2>Books Available</h2>
       <div className='books-container'>
       {books.map((book) => (
       <BookCard key={book.isbn13} bookInfo={book} handleAddToFavs={handleAddToFavs} />
      
    ))}
    </div>
  </div>
  )
}

export default App;
