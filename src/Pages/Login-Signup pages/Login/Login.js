import './Login.css';
import React from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import logo from './../../../resources-red-onion/images/logo2.png'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../../Loading/Loading';

const Login = () => {
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;


        // error handle
        if (email === '' || password === '') {
            toast.error('Please fill all the fields');
            return;
        } else if (password.length < 6) {
            toast.error('Password must be at least 6 characters');
            return;
        }

        signInWithEmailAndPassword(email, password)

    }


    if (error) {
        toast.error(error.message);
    }

    if (loading) {
        return <Loading />
    }

    if (user) {
        toast.success('Login Successful');
        navigate('/');
    }


    return (
        <section id='loginPage' className='p-5 text-center'>
            <div className='w-50 mx-auto py-5 my-5'>
                <img src={logo} className="img-fluid mb-4" width={200} alt="" />

                <Form onSubmit={handleSubmit}>
                    <FloatingLabel
                        controlId="floatingInput4login"
                        label="Email address"
                        className="mb-3"
                    >
                        <Form.Control type="email" placeholder="name@example.com" name='email'/>
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingPassword4login" label="Password"
                        className="mb-3"
                    >
                        <Form.Control type="password" placeholder="Password" name='password'/>
                    </FloatingLabel>

                    <div className="d-grid gap-2 mb-3">
                        <Button type='submit' variant="danger" size="lg">
                            Log in
                        </Button>
                    </div>
                    <p><small style={{ color: "red", cursor: "pointer" }} onClick={() => navigate(`/signup`)}>Don't have account?</small></p>
                    <p><small className='text-primary' style={{ cursor: "pointer" }} onClick={() => navigate(`/signup`)}>Forgot password?</small></p>
                </Form>
            <ToastContainer />
            </div>
        </section>
    );
};

export default Login;