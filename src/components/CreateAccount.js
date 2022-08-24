import React from "react";
import "../styles/createAccount.css";
import createAccount from "../images/createAccountSvg.png";

const CreateAccount = () => {
  return (
    <div className="main">
      <div className="main2">
          <form action="" method="post" className="createAccount">
          <h2>Create Account</h2>
            <div className="formElement">
              <label htmlFor="first_name">First name</label>

              <input
                type="text"
                name="first_name"
                id="first_name"
                placeholder="Enter your first name"
                required
              />
            </div>
            <div className="formElement">
              <label htmlFor="last_name">Last name</label>

              <input
                type="text"
                name="last_name"
                id="last_name"
                placeholder="Enter your last name"
                required
              />
            </div>

            <div className="formElement">
              <label htmlFor="gender">Gender</label>

              <select name="gender" id="gender" required>
                <option value="none">Select your gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="formElement">
              <label htmlFor="dob">D.O.B</label>

              <input type="date" name="dob" id="dob" required />
            </div>
            <div className="formElement">
              <label htmlFor="phone_number">Contact number</label>

              <input
                type="tel"
                name="phone_number"
                id="phone_number"
                required
                placeholder="Enter your contact number"
              />
            </div>

            <div className="formElement">
              <label htmlFor="mail">Email</label>

              <input
                type="email"
                name="mail"
                id="mail"
                required
                placeholder="Enter your email"
              />
            </div>
            <button type="submit">Submit</button>
          </form>
      </div>
      <div className="main3">
        <img src={createAccount} alt="" />
      </div>
    </div>
  );
};

export default CreateAccount;
