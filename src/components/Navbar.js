import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar() {
  const [bookCount, setBookCount] = useState(0);
  const location = useLocation();
  const books = useSelector(state => state.books);

  
  useEffect(() => {
    setBookCount(books.length);
  }, [books]);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
      <a className="navbar-brand" href="#">LIBRARIE ONLINE</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/add-book">Adaugare carti</Link>
          </li>
          <li className="nav-item active">
            {}
            <Link style={{position: 'relative'}} className="nav-link" to="/book-list">Carti existente
            {bookCount > 0 && <span style={{position:'absolute', right: '-2px', top: '-2px', borderRadius: '50px', backgroundColor: 'black', color: 'white', width: '18px', height: '18px',paddingBottom: '2px' ,display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px'}}>{bookCount}</span>}
             </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
