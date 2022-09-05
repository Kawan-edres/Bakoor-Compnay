import Notification from "../Notification/Notification";
import { useState, useEffect } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [requestStatus, setRequestStatus] = useState(); // 'pending', 'success', 'error'
  const [requestError, setRequestError] = useState();

  useEffect(() => {
    if (requestStatus === "success" || requestStatus === "error") {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [requestStatus]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setRequestStatus("pending");

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" || //empty string
      !phone||
      phone.trim()===""||
      !message ||
      message.trim() === "" //empty string
    ) {
      console.log("invalid data");
      return;
    }

    const newMessage = {
      name,
      company,
      email,
      phone,
      message,
    };
    console.log(newMessage);
    try {
      const response = await fetch("/api/form", {
        method: "POST",
        body: JSON.stringify(newMessage),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      setRequestStatus("success");
      setName("");
      setCompany("");
      setPhone("");
      setEmail("");
      setMessage("");
    } catch (e) {
      setRequestStatus("error");
      setRequestError(e.message);
    }
  };

  let notification;

  if (requestStatus === "pending") {
    notification = {
      status: "pending",
      message: "Your message is on its way !",
    };
  }

  if (requestStatus === "success") {
    notification = {
      status: "success",
      message: "Message sent successfully !",
    };
  }

  if (requestStatus === "error") {
    notification = {
      status: "error",
      message: requestError,
    };
  }

  return (
    <div className="col-lg-8">
      <form onSubmit={handleSubmit} action="/api/form" method="post">
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group">
              <input
                className="form-control"
                placeholder="Enter your name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <input
                className="form-control"
                placeholder="Company (optioanl)"
                onChange={(e) => setCompany(e.target.value)}
                value={company}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <input
              type="email"
                className="form-control"
                placeholder="Your email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <input
                type="number"
                className="form-control"
                placeholder="Phone number"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                required
              />
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-group">
              <textarea
                className="form-control"
                placeholder="Tell us about yourself"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                required
              />
            </div>
          </div>
          <div className="col-lg-12 mt-15">
            <button
              className="btn btn-black icon-arrow-right-white mr-40 mb-20"
              type="submit"
            >
              Send Message
            </button>

            {notification && (
              <Notification
                status={notification.status}
                message={notification.message}
              />
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
