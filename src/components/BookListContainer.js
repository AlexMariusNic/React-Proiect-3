import React from "react";
import { connect } from "react-redux";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import BookList from "./BookList";
const BookListContainer = ({books, onDelete, onSort}) =>{

    return(

        <div className="d-flex flex-column align-items-center" style={{marginTop: '60px'}}>
        <div className="container" style={{marginBottom: '20px'}}>
            <Link to="/add-book">
                <Button className="mt-3" style={{backgroundColor: 'red', border: 'none'}}>Inapoi</Button>
            </Link>
        </div>
        <BookList books={books} onDelete={onDelete} onSort={onSort}></BookList>

        </div>
    );

}

const mapStateToProps = (state) =>({
    books: state.books
});

export default connect(mapStateToProps)(BookListContainer);
