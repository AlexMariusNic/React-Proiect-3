import React from 'react';
import {BrowserRouter as Router, Route, Routes, useNavigate} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import store from './store/configureStore';
import { Provider } from 'react-redux';
import AddBookForm from './components/AddBookForm';
import BookListContainer from './components/BookListContainer';
import { deleteBook } from './actions/booksActions';
import { sortBooks } from './actions/booksActions';
import Navbar from './components/Navbar';

function App() {
  // const navigate = useNavigate();

  function handleDelete (id, books) {
    // store.dispatch(deleteBook(id));
    // books.length === 1 && navigate('/add-book');
  }
  const handleSort = () => {
    store.dispatch(sortBooks());
  };

  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/book-list" element={<BookListContainer style={{marginTop: '60px'}} onDelete={handleDelete} onSort={handleSort} />} />
          <Route path="/add-book" element={<AddBookForm  />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
