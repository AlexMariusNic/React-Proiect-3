import React, {useState} from "react";
import { connect } from "react-redux";
import { addBook } from "../actions/booksActions";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

const AddBookForm = () =>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [rating, setRating] = useState(0);
    const stars = [1, 2, 3, 4, 5];

    const handleAddBook = () =>{
        dispatch(addBook({title, author, rating}));
        setTitle('');
        setAuthor('');
        setRating(0);
        
    }
    return (
        <div className="container text-center" style={{marginTop: '60px'}}>
            <h2>Adauga o carte</h2>

            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="form-group">
                        <label style={{display: 'flex'}}>Titlu</label>
                        <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label style={{display: 'flex'}}>Autor</label>
                        <input type="text" className="form-control" value={author} onChange={(e) => setAuthor(e.target.value)} />
                    </div>
            <div style={{display: 'flex'}}>
                <label>Rating</label>
                <div style={{marginLeft: '10px'}}>
                    {stars.map((star, index) => (
                      <span key={index}
                            onClick={(e) => setRating(index + 1)}
                            style={{ color: star <= rating ? 'gold' : 'grey'}}>
                          <span style={{cursor: "pointer"}}>★</span>
                      </span>
                    ))}
                </div>
            </div>
                <button className="btn" style={{ display: 'flex', marginTop: '20px', backgroundColor: 'red', border: 'none', color: 'white'}} onClick={handleAddBook}>Adauga carte</button>
            </div>

            </div><br></br>
        </div>
    )
}

export default connect()(AddBookForm);
