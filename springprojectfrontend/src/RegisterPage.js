import React, { useState } from "react";
import axios from "axios";

function RegisterPage({ addUser }) {
  const [formData, setFormData] = useState({
    city: "",
    name: "",
    phone: "",
    salary: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8030/add", formData);
      const newUser = { ...formData, id: response.data }; // Assuming 'id' is returned
      addUser(newUser); // Add new user to the list
      setFormData({ city: "", name: "", phone: "", salary: "" });
    } catch (error) {
      console.error("There was an error adding the user!", error);
    }
  };

  return (
    <div className="card p-4 mb-4">
      <h2>Register New User</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>City</label>
          <input
            type="text"
            className="form-control"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input
            type="text"
            className="form-control"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Salary</label>
          <input
            type="number"
            className="form-control"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Register
        </button>
      </form>
    </div>
  );
}

export default RegisterPage;
