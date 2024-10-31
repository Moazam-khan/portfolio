// src/components/ContactForm.js
import React, { useState,useRef } from 'react';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import emailjs from '@emailjs/browser';


const Contactus = () => {
 
  const form = useRef();
  
  
  const sendEmail = (e) => {

    e.preventDefault();

    emailjs
      .sendForm('service_rlt5m88', 'template_waymxeb', form.current, {
        publicKey: 'bSWp2M94VlIOAzWyo',
      })
      .then(
        () => {
         alert ('Message send Sucessfully')
        
    
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    
  };

  return (
    <div className="flex flex-col items-center py-20 px-4 bg-gray-100">
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      <form ref ={form} onSubmit={sendEmail} className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text" name="user_name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
           type="email" name="user_email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
            Phone Number
          </label>
          <input
            Classname="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number" placeholder='Mobile Number' name='User_Number'
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
            Subject
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text" placeholder='Subject' name='subject'
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text" placeholder='Subject' name='message'
            required cols={2} rows={5}
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
      <div className="flex items-center mt-6">
        <a href="https://wa.me/+923168999139" target="_blank" rel="noopener noreferrer" className="text-green-500 text-3xl mx-2">
          <FaWhatsapp />
        </a>
       
      </div>
    </div>
  );
};

export default Contactus;
