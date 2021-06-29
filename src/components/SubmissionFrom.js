import React, { useState } from "react"
import { Form, Button } from 'react-bootstrap';
import "../styles/SubmissionForm.css"

const SubmissionForm = () => {

    const [state, setState] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        disabled: false,
        emailSent: null
      });

      const onInputChange = event => {
        const { name, value } = event.target;
    
        setState({
          ...state,
          [name]: value
        });
      };


      const handleSubmit = (event) => {
        event.preventDefault()

        setState({
            disabled: true,
            emailSent: false
        })

        console.log('We will fill this up shortly.')
      }


    return (
        <div>
            <Form onSubmit={handleSubmit} className="Form">
                <Form.Group>
                    <Form.Label htmlFor="full-name">Name*</Form.Label>
                    <Form.Control 
                        id="full-name" 
                        name="name" 
                        type="text" 
                        value={state.name} 
                        onChange={onInputChange} 
                    />
                </Form.Group>

                <Form.Group>
                <Form.Label htmlFor="email">Email*</Form.Label>
                <Form.Control 
                    id="email" 
                    name="email" 
                    type="email" 
                    value={state.email} 
                    onChange={onInputChange} 
                />
                </Form.Group>

                <Form.Group>
                <Form.Label htmlFor="subject">Subject*</Form.Label>
                <Form.Control 
                    id="subject" 
                    name="subject" 
                    type="subject" 
                    value={state.subject} 
                    onChange={onInputChange} 
                />
                </Form.Group>

                <Form.Group>
                <Form.Label htmlFor="message">Message*</Form.Label>
                <Form.Control 
                    id="message" 
                    name="message" 
                    as="textarea" 
                    rows="5"
                    value={state.message} 
                    onChange={onInputChange} 
                />
                </Form.Group>

                <div className="button-div">
                    <Button className="button" variant="primary" type="submit" disabled={state.disabled} alt="Send button">SEND</Button>
                </div>

                {state.emailSent === true && <p className="d-inline-success-msg">Email Sent!</p>}
                {state.emailSent === false && <p className="d-inline-err-msg">Email Not Sent! Please use direct email</p>}
            </Form>
        </div>
    )

}

export { SubmissionForm as default }