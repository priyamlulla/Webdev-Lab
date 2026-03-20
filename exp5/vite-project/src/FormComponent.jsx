import { useState } from "react";

function FormComponent() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (name === "" || email === "") {
      alert("Please fill all fields");
      return;
    }

    if (!email.includes("@")) {
      alert("Enter valid email");
      return;
    }

    // Show result
    setMessage("Submitted: " + name + " (" + email + ")");
  };

  return (
    <div>

      <h2>React Form</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br /><br />

        <input
          type="text"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br /><br />

        <button type="submit">Submit</button>

      </form>

      <p>{message}</p>

    </div>
  );
}

export default FormComponent;