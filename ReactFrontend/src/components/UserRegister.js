import React, { useState } from "react";
import "../style_login_temp.css";

function UserRegister() {
  
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const errors = {
    uname: "user already exists",
  };


  const handleSubmit = (event) => {
    
    event.preventDefault();

    var { uname, pass } = document.forms[0];


    //"database" kommer senare tas emot som json i frontend och skickas till endpoints i backend som skriver till en sqlite databas
    const database = [
    {
        username: uname,
        password: pass
    },
    {   username: "test",
        password: "123"
    }
    ];
    
    
    console.log(database[0]);
    
   const userData = database.find((user) => user.username === uname.value);

    if (!userData) {
        setIsSubmitted(true);
        
    } else {
      
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

 
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="user-register">
      <div className="register-form">
        <div className="title">Register new user</div>
        {isSubmitted ? <div>User is successfully created</div> : renderForm}
      </div>
    </div>
  );
}

export default UserRegister;