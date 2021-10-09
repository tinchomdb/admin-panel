import React from "react";
import "./NewUser.css";

function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form action="" className="newUserForm">
        <div className="newUserItem">
          <label htmlFor="">Username</label>
          <input type="text" placeholder="john" />
        </div>
        <div className="newUserItem">
          <label htmlFor="">Full Name</label>
          <input type="text" placeholder="John Smith" />
        </div>
        <div className="newUserItem">
          <label htmlFor="">Email</label>
          <input type="email" placeholder="john@gmail.com" />
        </div>
        <div className="newUserItem">
          <label htmlFor="">Password</label>
          <input type="password" placeholder="password" />
        </div>
        <div className="newUserItem">
          <label htmlFor="">Phone</label>
          <input type="password" placeholder="+1 12345678" />
        </div>
        <div className="newUserItem">
          <label htmlFor="">Address</label>
          <input type="text" placeholder="New York" />
        </div>
        <div className="newUserItem">
          <label htmlFor="">Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label htmlFor="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label htmlFor="female">Female</label>
            <input type="radio" name="other" id="other" value="other" />
            <label htmlFor="other">Other</label>
          </div>
        </div>
        <div className="newUserItem">
          <label htmlFor="active">Active</label>
          <select
            className="newUserSelect"
            name="active"
            id="active"
            placeholder="New York"
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newUserButton">Create</button>
      </form>
    </div>
  );
}

export default NewUser;
