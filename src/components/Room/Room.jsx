import React from 'react';
import './Room.css'
import { Link } from 'react-router-dom';

const Room = ({data}) => {

    const {title,name,img,description,bed,person,price} = data;

    return (
        <div className='container'>
            <div className="title-name">
                <h2>{title}</h2>
                <h3>{name}</h3>
            </div>
            <img src={img} alt="" />
            <p>{description}</p>
            <div className="info">
                <p>Bed: {bed}</p>
                <p>Person: {person}</p>
                <p>Price: ${price}</p>
                <Link to="/book">
                    <button className='btn-book'>Book</button>
                </Link>
            </div>
        </div>
    );
};

export default Room;