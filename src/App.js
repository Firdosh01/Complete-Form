import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [formData, setformData] = useState({
    firstName: "", lastName: "", email: "", country: "India", streetAddress: "",
    City: "", state: "", postalcode: "", comments: false, condidates: false, offers: false
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
        <input type="text" placeholder='Firdosh' name="firstName" id='firstName' value={formData.firstName} onChange={ChangeHandler} />
        <br />

        <label htmlFor="lastName">Last Name</label>
        <br />
        <input type="text" placeholder='Ansari' name="lastName" id='lastName' value={formData.lastName} onChange={ChangeHandler} />
        <br />

        <label htmlFor="email">Email Address</label>
        <br />
        <input type="text" placeholder='Xyz81@email.com' name="email" id='email' value={formData.email} onChange={ChangeHandler} />
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
        <br />

        <label htmlFor="streetAddress">Street Address </label>
        <br />
        <input type="text" placeholder='1234 Main st' name="streetAddress" id='streetAddress' value={formData.streetAddress} onChange={ChangeHandler} />
        <br />

        <label htmlFor="City">City</label>
        <br />
        <input type="text" placeholder='Asansol' name="City" id='City' value={formData.City} onChange={ChangeHandler} />
        <br />

        <label htmlFor="state">State / Province</label>
        <br />
        <input type="text" placeholder='Bihar' name="state" id='state' value={formData.state} onChange={ChangeHandler} />
        <br />

        <label htmlFor="postalcode">ZIP / Postal code</label>
        <br />
        <input type="text" placeholder='713301' name="postalcode" id='postalcode' value={formData.postalcode} onChange={ChangeHandler} />
        <br />


      </form>
    </div>
  );
}

export default App;
