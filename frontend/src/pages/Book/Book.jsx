import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './index.scss';

const Book = () => {
    const data = JSON.parse(localStorage.getItem('data'));
    const [movieDetails, setmovieDetails] = useState(null);
    const { id } = useParams();
    useEffect(() => {
        if (data) {
            const selectedMovie = data.find((item) => item.show.id == id);
            setmovieDetails(selectedMovie);
        }
    }, [data, id]);
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    const token = localStorage.getItem('token');
    return (
        <div className="book-container">
            <>
                <h2>{`Book Tickets for ${movieDetails?.show?.name}`}</h2>
                <div className="movie-details">
                    <p>
                        <strong>Release Date:</strong>{' '}
                        {movieDetails?.show?.premiered &&
                            new Date(movieDetails?.show?.premiered).toLocaleDateString()}
                    </p>
                    <p>
                        <strong>Runtime:</strong>{' '}
                        {movieDetails?.show?.runtime &&
                            `${Math.floor(movieDetails?.show?.runtime / 60)}h ${movieDetails?.show?.runtime % 60
                            }m`}
                    </p>
                </div>
            </>
            <form onSubmit={handleSubmit} >
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="numberOfTickets">Number of Tickets:</label>
                    <input
                        type="number"
                        id="numberOfTickets"
                        name="numberOfTickets"
                        min="1"
                        required
                    />
                </div>
                <button type="submit" className="btn">
                    Confirm Booking
                </button>
            </form>
        </div>
    );
};

export default Book;
