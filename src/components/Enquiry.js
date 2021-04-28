import React from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";


const initialFormData = Object.freeze({
    username: "",
    email: "",
    mobile: "",
    query: ""
  });
  

export const Enquiry = (props) => {
    const { register } = useForm();
    const [formData, updateFormData] = React.useState(initialFormData);

    const sendFeedback = (serviceID, templateId, variables) => {
        window.emailjs.send(
            serviceID, templateId,
            variables
        ).then(res => {
            console.log('Email successfully sent!')
        })
            .catch(err => console.error('There has been an error.  Here some thoughts on the error that occured:', err))
    }
    

    const handleChange = (e) => {
        updateFormData({
          ...formData,

          [e.target.name]: e.target.value.trim()
        });
      };

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`Thank you for your message. Your query has been forwarded.`);
        const templateId = 'template_4rd43a2';
        const serviceID = "service_xrensab";
        sendFeedback(serviceID, templateId, { from_name: formData.name, mobile: formData.mobile, message_html: formData.query, email: formData.email })

        console.log(formData);
      };

    return (

        <Form id="enquiry">
            <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Name*</Form.Label>
                <Form.Control onChange={handleChange} name="name" type="name" placeholder="Name" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email*</Form.Label>
                <Form.Control onChange={handleChange} name="email" type="email" placeholder="Enter email"
                    ref={
                        register(
                            "email", {
                            required: "Please enter an email",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "invalid email address"
                            }
                        })
                    }
                />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridMobile">
                <Form.Label>Mobile no.*</Form.Label>
                <Form.Control onChange={handleChange} name="mobile" placeholder="" />
            </Form.Group>
            <Form.Group as={Col} id="formGridQuery">
                <Form.Label>Query*</Form.Label>
                <Form.Control onChange={handleChange} name="query" as="textarea" rows={3}
                    ref={
                        register(
                            "query", {
                            required: true
                        }
                        )
                    }
                />
            </Form.Group>

            <Button onClick={handleSubmit} variant="primary" type="submit">
                Submit
            </Button>
        </Form >

    )
}