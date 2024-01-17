import React, { useContext, useState } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {

    const {signIn} = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const [error,setError] = useState('')
    const [show,setShow] = useState(false);

    const signInForm = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        setError('')

        signIn(email,password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            setError('');
            navigate(from,{replace: true})
        })
        .catch(error => {
            setError(error.message);
        })
    }

    return (
        <div>
            <h3 className='title'>Please Login</h3>
            <form onSubmit={signInForm}>
                <div className="form-container">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" required />
                </div>
                <div className="form-container">
                    <label htmlFor="password">Password</label>
                    <input type={show ? "text" : "password"} name="password" id="" required />
                    <h5 onClick={()=>setShow(!show)}>
                        {
                            show ? <span>Hide Password</span> : <span>Show Password</span>
                        }
                    </h5>
                </div>
                <p>Don't have an account?Click here for <Link to="/register">register</Link></p>
                <button className='btn-submit'>Login</button>
                <p className='error'>{error}</p>
            </form>
        </div>
    );
};

export default Login;