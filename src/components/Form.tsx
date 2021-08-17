import React, { useState } from "react";
import validator from "email-validator";
import axios from "axios";
export default function Form() {
  const [formData, setFormdata] = useState({
    email: "",
    name: "",
    message: "",
  });
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setError(false);
    setFormdata({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (): Promise<void> => {
    const { email, name, message } = formData;

    if (email !== "" && name !== "" && message !== "") {
      if (validator.validate(email)) {
        if (name.length > 2 && message.length > 2) {
          try {
            await axios.post(
              " https://rk82vfsokc.execute-api.us-east-1.amazonaws.com/dev/mailer",
              { email, name, message }
            );

            setSuccess(true);
          } catch (_) {
            setError(true);
          }
        } else {
          setError(true);
        }
      } else {
        setError(true);
      }
    } else {
      setError(true);
    }
  };

  return (
    <div className="container marginTop"  id="contact">
      <div className="row ">
        <div className="col-md-6 ">
          <div className="center">
            <h3 className="crimsom">Contact</h3>
            {success ? (
              <div className="alert alert-success" role="alert">
                Message sent successfully!
              </div>
            ) : (
              <>
                <div className="form-floating divForm">
                  <input
                    name="email"
                    type="email"
                    className="form-control inputForm"
                    id="floatingInput"
                    placeholder="name@example.com"
                    onChange={handleChange}
                  />
                  <label>Email address</label>
                </div>

                <div className="form-floating divForm">
                  <input
                    name="name"
                    type="text"
                    className="form-control inputForm"
                    id="floatingInput"
                    placeholder="name@example.com"
                    onChange={handleChange}
                  />
                  <label>Name</label>
                </div>

                <div className="form-floating divForm">
                  <input
                    name="message"
                    type="text"
                    className="form-control inputForm"
                    id="floatingInput"
                    placeholder="name@example.com"
                    onChange={handleChange}
                  />
                  <label>Short Message</label>
                </div>
                {error ? (
                  <div className="alert alert-danger" role="alert">
                    Error check email and message
                  </div>
                ) : null}
                <button
                  type="button"
                  className="btn btn-warning"
                  onClick={handleSubmit}
                  style={{ marginBottom: "20px" }}
                >
                  Send message
                </button>
              </>
            )}
          </div>
        </div>
        <div
          className="col-md-6"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h3 className="crimsom" style={{ textAlign: "center" }}>
            Social Media
          </h3>
          <div className="col-md-6 socialBadge">
            <i className="fab fa-facebook-f"> </i>
            <p>@MenuKome</p>
          </div>
        
            <a className="col-md-6 socialBadge" href="https://www.instagram.com/menukome/" style={{textDecoration:'none', color:'black'}}>
            <i className="fab fa-instagram"></i>
            <p>@MenuKome</p>
            </a>
        
          <div className="col-md-6 socialBadge">
            <i className="far fa-envelope-open"> </i>
            <p>menukome@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
