import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [submittedData, setSubmittedData] = useState([]);
  const [errors, setErrors] = useState([]);

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (firstName) {
      const formData = { 
        firstName: firstName, 
        lastName: lastName 
      };
      const dataArray = [
        ...submittedData, 
        formData
      ];
      setSubmittedData(dataArray);
      setFirstName("");
      setLastName("");
      setErrors([]);
    } else {
      setErrors(["First name is required!"]);
    }
  } 
  
  // ****in an uncontrolled form, you need to access the input fields from the DOM
  // function handleSubmit(event) {
  //   event.preventDefault();
  //   
  //   const formData = {
  //     firstName: e.target[0].value,
  //     lastName: e.target[1].value,
  //   };
  //   props.sendFormDataSomewhere(formData);
  // } 

  const listOfSubmissions = submittedData.map((data, index) => {
    return (
      <div key={index}>
        {data.firstName} {data.lastName}
      </div>
    );
  });

  return (
    <div>
    <form onSubmit = {handleSubmit}>
      <input type="text" onChange={handleFirstNameChange} value={firstName} placeholder ='john'/>
      <input type="text" onChange={handleLastNameChange} value={lastName} placeholder = 'henry'/>
      <button type="submit">Submit</button>
    </form>
    {errors.length > 0 
    ? errors.map((errors, index) => (
      <p key={index} style = {{ color: "red"}}>
        {errors}
      </p>
    ))
  : null}
    <h3>Submissions</h3>
    {listOfSubmissions}
    </div>
  );
}

export default Form;
