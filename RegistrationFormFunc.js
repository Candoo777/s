import React, { useState } from 'react';
const RegistrationFormFunc = () => {
 const [formData, setFormData] = useState({ name: '', email: '' });
 const handleChange = (e) => {
 setFormData({ ...formData, [e.target.name]: e.target.value });
 };
 const handleSubmit = (e) => {
 e.preventDefault();
 console.log(formData);
 };
 return (
 <form onSubmit={handleSubmit}>
 <input type="text" name="name" placeholder="Name" onChange={handleChange}
/>
 <input type="email" name="email" placeholder="Email" onChange={handleChange}
/>
 <button type="submit">Submit</button>
 </form>
 );
};
export default RegistrationFormFunc;