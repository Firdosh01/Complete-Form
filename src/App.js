import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [formData, setformData] = useState({
    firstName: "", lastName: "", email: "", country: "India", streetAddress: "",
    City: "", state: "", postalcode: "", comments: false, condidates: false, 
    offers: false, pushNotifications:""
  })

  function ChangeHandler(event) {
    const { name, value, checked, type } = event.target;
    setformData((prev) => ({ ...prev, [name]:type === "checkbox" ? checked: value }))

  }

  function submitHandler(event) {
    event.preventDefault();

    console.log("Finally printing the value of Form Data:");
    console.log(formData)
  }


  return (
    <div>
      <form onSubmit={submitHandler}>

        <label htmlFor="firstName">First name</label>
        <br />
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Love"
          value={formData.firstName}
          onChange={ChangeHandler}
        />

        <br />
        <label htmlFor="lastName">Last name</label>
        <br />
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Babbar"
          value={formData.lastName}
          onChange={ChangeHandler}
        />

        <br />
        <label htmlFor="email">Email Address</label>
        <br />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="love@abcd.com"
          value={formData.email}
          onChange={ChangeHandler}
        />

        <br />
        <label htmlFor="country">Country</label>
        <br />
        <select
          id="country"
          name="country"
          value={formData.country}
          onChange={ChangeHandler}
          
        >

          <option>India</option>
          <option>United States</option>
          <option>Canada</option>
          <option>Mexico</option>
        </select>

        <br />
        <label htmlFor="streetAddress">Street Address</label>
        <br />
        <input
          type="text"
          name="streetAddress"
          id="streetAddress"
          placeholder="B-25C"
          value={formData.streetAddress}
          onChange={ChangeHandler}
        />

        <br />
        <label htmlFor="city">City</label>
        <br />
        <input
          type="text"
          name="city"
          id="city"
          placeholder="B-25C"
          value={formData.City}
          onChange={ChangeHandler}
        />

        <br />
        <label htmlFor="state">State / Province</label>
        <br />
        <input
          type="text"
          name="state"
          id="state"
          placeholder="Bihar"
          value={formData.state}
          onChange={ChangeHandler}
        />

        <br />
        <label htmlFor="postalCode">Postal Code</label>
        <br />
        <input
          type="text"
          name="postalCode"
          id="postalCode"
          placeholder="110077"
          value={formData.postalcode}
          onChange={ChangeHandler}
        />

        <br />
        <br />
        <fieldset>
          <legend>By Email</legend>

          <div>
            <input
              id="comments"
              name="comments"
              type="checkbox"
              checked={formData.comments}
              onChange={ChangeHandler}
            />
            <div>
              <label htmlFor="comments">Comments</label>
              <p>Get notified when someones posts a comment on a posting.</p>
            </div>
          </div>

          <div>
            <input
              id="candidates"
              name="candidates"
              type="checkbox"
              checked={formData.condidates}
              onChange={ChangeHandler}
            />
            <div>
              <label htmlFor="candidates">Candidates</label>
              <p>Get notified when a candidate applies for a job.</p>
            </div>
          </div>

          <div>
            <input
              id="offers"
              name="offers"
              type="checkbox"
              checked={formData.offers}
              onChange={ChangeHandler}
            />
            <div>
              <label htmlFor="offers">Offers</label>
              <p>Get notified when a candidate accepts or rejects an offer.

              </p>
            </div>
          </div>



        </fieldset>

        <br />
        <br />
        <fieldset>
          <legend>Push Notifications</legend>
          <p>These are delivered via SMS to your mobile phone.</p>

          <input
            type="radio"
            id="pushEverything"
            name="pushNotifications"
            value="Everything"
            onChange={ChangeHandler}
          />

          <label htmlFor="pushEverything">Everything</label>

          <br />
          <input
            type="radio"
            id="pushEmail"
            name="pushNotifications"
            value="Same as email"
            onChange={ChangeHandler}
          />

          <label htmlFor="pushEmail">Same as email</label>

          <br />
          <input
            type="radio"
            id="pushNothing"
            name="pushNotifications"
            value="No Push Notifications"
            onChange={ChangeHandler}
          />

          <label htmlFor="pushNothing">No Push Notifications</label>

        </fieldset>



        <button>Save</button>






      </form>

    </div>
  );
}

export default App;
