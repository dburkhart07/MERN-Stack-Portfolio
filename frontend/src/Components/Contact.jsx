import React from 'react';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Contact = () => {
    const refForm = useRef();
    const navigate = useNavigate();
    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:5000";

    const isValidEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const sendEmail = async (e) => {
        e.preventDefault();
        const email = refForm.current.email.value;
        const confirmEmail = refForm.current.confirm_email.value;
        const name = refForm.current.name.value;
        const subject = refForm.current.subject.value;
        const message = refForm.current.message.value;

        if (email !== confirmEmail) {
            alert('Email addresses do not match. Please check and try again.');
            return;
        }

        if (!isValidEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        try {
            // Post form data to backend
            await axios.post(`${API_BASE_URL}/api/contact`, { name, email, subject, message });
            console.log("Contact form data successfully submitted to the database.");
            
            // Send email to me via emailjs
            await emailjs.sendForm('service_nj4aeh5', 'template_ogqgudi', refForm.current, 'cY2UcSIMLnEaSJ-1P');
            
            // Send confirmation email
            await sendConfirmationEmail(name, email);
            
            navigate('../Confirmation');
        } catch (error) {
            console.error("Failed to submit contact form:", error);
            alert("Failed to submit the message. Please try again.");
        }
    };

    const sendConfirmationEmail = async (recipientName, recipientEmail) => {
        try {
            await emailjs.send('service_nj4aeh5', 'template_iv4xktv', {
                to_name: recipientName,
                to_email: recipientEmail,
            }, 'cY2UcSIMLnEaSJ-1P');
            console.log('Confirmation email sent successfully.');
        } catch (error) {
            console.error('Failed to send confirmation email:', error);
        }
    };

    return (
        <div className='container contact-page text-[rgb(255,233,209)] px-10 h-full md:h-auto'>
            <div className='flex flex-col md:flex-row justify-between items-start'>
                <div className='text-zone ml-6 w-full md:w-1/2 mb-10'>
                    <div style={{ animation: `fadeInUp 1s ease-out forwards`, opacity: 0 }}>
                        <h1 className='text-2xl font-bold mt-10'>Contact Me</h1>
                        <p className='mt-4'>Thank you for your interest in getting in touch!</p>
                        <p className='mt-4'>
                            I am actively looking for summer/fall software engineering/data science internships,
                            as well as any opportunities to work on fun, innovative projects.
                            I value strong, open communication, and welcome any questions or feedback you may have as well.
                            Please do not hesitate to reach out by filling out the form below!
                        </p>
                    </div>
                    <div className='contact-form mt-5' style={{ animation: `fadeInUp 1s ease-out forwards`, animationDelay: `0.5s`, opacity: 0 }}>
                        <form ref={refForm} onSubmit={sendEmail} className='bg-[rgb(119,47,17)] px-5 pt-5 pb-10 rounded relative w-full md:w-auto'>
                            <ul className='p-0 m-0'>
                                <li className='mb-3'>
                                    <input className='w-full border-0 h-12 bg-transparent text-lg px-3 box-border' placeholder='Name' type='text' name='name' required />
                                </li>
                                <li className='mb-3'>
                                    <input className='w-full border-0 h-12 bg-transparent text-lg px-3 box-border' placeholder='Email' type='email' name='email' required />
                                </li>
                                <li className='mb-3'>
                                    <input className='w-full border-0 h-12 bg-transparent text-lg px-3 box-border' placeholder='Confirm Email Address' type='email' name='confirm_email' required />
                                </li>
                                <li className='mb-3'>
                                    <input className='w-full border-0 h-12 bg-transparent text-lg px-3 box-border' placeholder='Subject' type='text' name='subject' required />
                                </li>
                                <li className='mb-3'>
                                    <textarea className='w-full border-0 bg-transparent text-lg p-3 min-h-[175px] box-border' placeholder='Message' name='message' required></textarea>
                                </li>
                            </ul>
                            <div className='absolute bottom-2 right-5'>
                                <input type='submit' value='Submit' className='bg-gradient-to-r from-orange-400 to-red-500 text-white rounded-md px-4 py-2 cursor-pointer' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
