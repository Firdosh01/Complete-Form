import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [formData, setformData] = useState({
    firstName: "", lastName: "", email: "", country: "India"
  })

  function ChangeHandler(event) {
    const { name, value, checked, type } = event.target;
    setformData((prev) => ({ ...prev, [name]: value }))

  }


  return (
    <div>
      <form>
        <label htmlFor="firstName">First Name</label>
        <br />
        <input type="text" placeholder='Enter your firstname' name="firstName" id='firstName' value={formData.firstName} onChange={ChangeHandler} />
        <br />

        <label htmlFor="lastName">Last Name</label>
        <br />
        <input type="text" placeholder='Enter your lastname' name="lastName" id='lastName' value={formData.lastName} onChange={ChangeHandler} />
        <br />

        <label htmlFor="email">Email Address</label>
        <br />
        <input type="text" placeholder='Enter your lastname' name="email" id='email' value={formData.email} onChange={ChangeHandler} />
        <br />

        <label htmlFor="country">Country</label>

        <select
        id='country'
        name='country'
        value={formData.country}
        >
          <option >India</option>
          <option >Canada</option>
          <option >Soudi</option>
        </select>
        
      </form>
    </div>
  );
}

export default App;
