import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import './Register.css'

const Register = () => {

    const {createUser} = useContext(AuthContext);

    const [success,setSuceess] = useState('')
    const [error,setError] = useState('')

    const registerForm = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email,password,confirm);
        setError('')
        setSuceess('')

        if(password !== confirm){
            setError("Password did not match");
            return;
        }
        else if(!/(?=.*[A-Z])/.test(password)){
            setError('Please use at least one uppercase')
            return
        }
        else if(!/(?=.*[0-9])/.test(password)){
            setError('Please use at least one digit')
            return
        }
        else if (password.length < 6){
            setError('Password must be 6 digits')
            return
        }

        createUser(email,password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
            setSuceess('Account created successfully');
            setError('');
            form.reset();
        })
        .catch(error => {
            setError(error.message)
        })
    }

    return (
        <div>
            <h3 className='title'>Register</h3>
            <form onSubmit={registerForm}>
                <div className="form-container">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" required />
                </div>
                <div className="form-container">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" required />
                </div>
                <div className="form-container">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name="confirm" id="" required />
                </div>
                <p>Already have an account?Click here for <Link to="/login">login</Link></p>
                <button className='btn-submit'>Register</button>
                <p className='success'>{success}</p>
                <p className='error'>{error}</p>
            </form>
        </div>
    );
};

export default Register;