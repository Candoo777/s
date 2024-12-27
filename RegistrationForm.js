import React, { Component } from 'react';

class RegistrationForm extends Component {
  constructor() {
    super();
    this.state = { name: '', email: '' }; // Initializing state
  }

  // Method to handle input changes
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // Method to handle form submission
  handleSubmit = (e) => {
    e.preventDefault(); // Prevents page refresh
    console.log(this.state); // Logs form data (name and email) to the console
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input 
            type="text" 
            name="name" 
            placeholder="Name" 
            onChange={this.handleChange} 
            value={this.state.name} 
          />
        </div>
        <div>
          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            onChange={this.handleChange} 
            value={this.state.email} 
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default RegistrationForm;
