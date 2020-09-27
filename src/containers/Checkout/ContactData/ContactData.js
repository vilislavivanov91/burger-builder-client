import React, { useState } from 'react';

import Button from '../../../components/UI/Button/Button';
import './ContactData.css';

const ContactData = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [address, setAddress] = useState('');

  const inputChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    if (inputName === 'name') {
      setName(inputValue);
    } else if (inputName === 'email') {
      setEmail(inputValue);
    } else if (inputName === 'postalCode') {
      setPostalCode(inputValue);
    } else if (inputName === 'address') {
      setAddress(inputValue);
    }
  };

  return (
    <div className="ContactData">
      <h4>Please provide some information about you</h4>
      <form>
        <input
          className="Input"
          type="text"
          name="name"
          value={name}
          onChange={inputChange}
          placeholder="Your Name"
        />
        <input
          className="Input"
          type="email"
          name="email"
          value={email}
          onChange={inputChange}
          placeholder="Your Mail"
        />
        <input
          className="Input"
          type="text"
          name="postalCode"
          value={postalCode}
          onChange={inputChange}
          placeholder="Your Postal Code"
        />
        <input
          className="Input"
          type="text"
          name="address"
          value={address}
          onChange={inputChange}
          placeholder="Your Address"
        />
        <Button type="Success">ORDER</Button>
      </form>
    </div>
  );
};

export default ContactData;
