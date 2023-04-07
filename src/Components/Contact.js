import React from "react";
import "./Contact.css";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import emailjs from "emailjs-com";
import { Form, Input, TextArea, Button } from "semantic-ui-react";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
function Contact() {
  const SERVICE_ID = "service_0adgvio";
  const TEMPLATE_ID = "template_pyo0yiq";
  const PUBLIC_KEY = "YgL3FhpRzJyqFRhau";

  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          title: "Message Sent Successfully",
          icon: "success",
        });
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          title: "Ooops, something went wrong",
          text: error.text,
          icon: "error",
        });
      }
    );
    e.target.reset();
  };

  return (
    <div className="back">
    <div className="contact">
      <h1>
        <span>
          <SupportAgentIcon style={{ fontSize: "5vh" }} /> Get in Touch
        </span>
      </h1>
      <hr style={{ width: "100%" }}></hr>
      <div className="wrap">
      <div className="form">
        <Form onSubmit={handleOnSubmit}>
          <Form.Field
            id="form-input-control-email"
            control={Input}
            label="Your Email"
            name="user_email"
            placeholder="Email…"
            required
            icon="mail"
            iconPosition="left"
          />
          <Form.Field
            id="form-input-control-last-name"
            control={Input}
            label="Your Name"
            name="user_name"
            placeholder="Name…"
            required
            icon="user circle"
            iconPosition="left"
          />
          <Form.Field
            id="form-textarea-control-opinion"
            control={TextArea}
            label="Your Message"
            name="user_message"
            placeholder="Type your message here!"
            required
          />
          <Button className="km2" type="submit" color="green">
            Submit
          </Button>
        </Form>
      </div>
      </div>
      </div>
    </div>
  );
}

export default Contact;
