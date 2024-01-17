import React, { useContext } from 'react';
import './Header.css'
import ActiveLink from '../ActiveLink/ActiveLink';
import { AuthContext } from '../../Provider/AuthProvider';

const Header = () => {

    const {user,logOut} = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
        .then(()=>{})
        .catch(error => {
            console.error(error);
        })
    }

    return (
        <div className='header-container'>
            <nav className="navbar">
                <ActiveLink to="/">Home</ActiveLink>
                <ActiveLink to="/book">Book</ActiveLink>             
                {
                    user ? 
                    <>
                        <span><button className='btn-sign-out' onClick={handleLogOut}>Sign Out</button></span>
                    </>
                    :
                    <ActiveLink to="/login">Login</ActiveLink>
                }
            </nav>
            <div className="text-center">
                <h2>Burj Al Arab</h2>
                <h3>A global icon of Arabian luxury</h3>
            </div>
        </div>
    );
};

export default Header;