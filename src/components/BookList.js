import React from "react";
import Rating from "./Rating";
import store from "../store/configureStore";
import {deleteBook} from "../actions/booksActions";
import {useNavigate} from "react-router-dom";

const BookList = ({books, onSort}) => {
  const navigate = useNavigate();

  function handleDelete (id, books) {
    store.dispatch(deleteBook(id));
    books.length === 1 && navigate('/add-book');
  }


    return (
        <div className="container text-center">
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px'}}>
            <h2 style={{display: 'flex', margin: '0'}}>Carti existente</h2>
            <button style={{display: 'flex', marginLeft: 'auto', fontSize: '14px'}} className="btn btn-secondary" onClick={onSort}>Ordoneaza dupa nume</button>
          </div>

            <ul className="list-group list-group-flush" >
                {books.map(book => (
                    <li key={book.id} className="list-group-item" style={{display: 'flex',paddingLeft: '0', paddingRight: '0', alignItems: 'center', justifyContent: 'space-between'}}>
                      <div>
                        {book.title} by {book.author}
                      </div>
                      <div style={{display: 'flex', alignItems: 'center', gap: '20px'}}>
                        <Rating rating={book.rating}/>
                        <button className="btn btn-danger btn-sm float-right" onClick={() => handleDelete(book.id, books)}>Sterge</button>
                      </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BookList;
