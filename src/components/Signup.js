// Imports
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    
    return (
        <div className="row mt-4">
            <div className="col-md-7 offset-md">
                <div className="card card-body">
                    <h2 className="py-2">Signup</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" value={name} onChange={} className="form-control" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp;