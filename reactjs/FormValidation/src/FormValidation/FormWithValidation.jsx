import React, { useState } from "react";

const FormWithValidation = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validate = () => {
    if (!email.includes("@")) {
      setError("Invalid email address");
      return false;
    }
    setError("");
    return true;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert(`Submitted email: ${email}`);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="enter email"
        />
        <p style={{ color: "red" }}>{error}</p>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default FormWithValidation;
