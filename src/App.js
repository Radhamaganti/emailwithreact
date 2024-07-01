import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function App(){
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_f056urt', 'template_2i9yuxa', form.current, {
        publicKey: 'iRDd6Um406GwCSCNm',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <center>
      <form ref={form} onSubmit={sendEmail} style={{display:"flex",flexDirection:"column",width:"50%",border:"2px solid black",marginTop:"2%",padding:"5%"}}>
      <h1>Email</h1>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Phone Number</label>
      <input type="text"name="user_email"/>
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
    </center>
  );
};

export default App;
