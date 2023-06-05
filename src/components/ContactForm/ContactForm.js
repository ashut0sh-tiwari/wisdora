import React, { useState, UseEffect, useEffect } from "react";
import axios from "axios";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  useEffect(() => {
    const fetchCsrfToken = async () => {
      try {
        await axios.get("http://127.0.0.1:8000/get-csrf-token/");
      } catch (error) {
        console.error("Error fetching CSRF token:", error);
      }
    };
    fetchCsrfToken();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const formData ={
        name: name,
        email: email,
        message: message
    };
    try {
      await axios.post("http://127.0.0.1:8000/contact/", formData, {
        headers: {
          'Content-Type': 'application/json'
        }}).then((response) => {
        console.log(response.data)
      });
      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
    setSubmitting(false);
  };
  if (submitted) {
    return <p>Form submitted successfully!</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      {" "}
      <label htmlFor="name">Name:</label>{" "}
      <input
        name ="name" type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />{" "}
      <br /> <label htmlFor="email">Email:</label>{" "}
      <input
      name="email"
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />{" "}
      <br /> <label htmlFor="message">Message:</label>{" "}
      <textarea
        id="message"
        name="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      ></textarea>{" "}
      <br />{" "}
      <button type="submit" disabled={submitting}>
        {" "}
        {submitting ? "Submitting..." : "Submit"}{" "}
      </button>{" "}
    </form>
  );
};
export default ContactForm;
