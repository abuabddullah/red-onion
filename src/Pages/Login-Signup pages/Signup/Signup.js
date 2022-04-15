import './Signup.css';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import logo from './../../../resources-red-onion/images/logo2.png'
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from './../../../firebase.init'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Loading from './../../Loading/Loading';
import { useState } from 'react';

const Signup = () => {
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });


    const [displayName, setDisplayName] = useState('');
    const [updateProfile, updating, error4UpdateProfile] = useUpdateProfile(auth);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;


        // error handle
        if (email === '' || password === '' || confirmPassword === '') {
            toast.error('Please fill all the fields');
            return;
        } else if (password !== confirmPassword) {
            toast.error('Password and Confirm Password do not match');
            return;
        } else if (password.length < 6) {
            toast.error('Password must be at least 6 characters');
            return;
        }

        await createUserWithEmailAndPassword(email, password)

        
        await updateProfile({ displayName : name });
        toast('Updated profile');

    }


    if (error || error4UpdateProfile) {
        toast.error(error.message);
    }

    if (loading || updating) {
        return <Loading />
    }

    if (user) {
        toast.success('Signup Successful');
        navigate('/');
        console.log(user);
    }


    return (
        <section id='signupPage' className='p-5 text-center'>
            <div className='w-50 mx-auto py-5 my-5'>
                <img src={logo} className="img-fluid mb-4" width={200} alt="" />

                <Form onSubmit={handleSubmit}>
                    <FloatingLabel
                        controlId="floatingInput4name"
                        label="name"
                        className="mb-3"
                    >
                        <Form.Control type="text" placeholder="name" name='name' />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingInput4signup"
                        label="Email address"
                        className="mb-3"
                    >
                        <Form.Control type="email" placeholder="name@example.com" name='email' />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingPassword" label="Password"
                        className="mb-3"
                    >
                        <Form.Control type="password" placeholder="Password" name='password' />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingPassword4confirmpass" label="Confirm Password">
                        <Form.Control type="password" placeholder="Confirm Password"
                            className="mb-3"
                            name='confirmPassword'
                        />
                    </FloatingLabel>

                    <div className="d-grid gap-2 mb-3">
                        <Button type='submit' variant="danger" size="lg">
                            Sign Up
                        </Button>
                    </div>
                    <p><small style={{ color: "red", cursor: "pointer" }} onClick={() => navigate(`/login`)}>Already have account?</small></p>
                </Form>
                <ToastContainer />
            </div>
        </section>
    );
};

export default Signup;