import React, { useState } from 'react';
import { Button, Form, Container } from 'react-bootstrap';
// import { useDispatch } from 'react-redux';  
import '../Booking/booking.css';
import Navbar from '../../components/NavBar/navbar';
import Background from '../../components/Background/background'
import Cursor from '../../components/Cursor/cursor';

const Booking = () => {
    const [form, setForm] = useState({
        organisingTeacherName: '',
        email: '',
        mobileNumber: '',
        schoolName: '',
        address: '',
        visitFormat: '',
        firstPreferredDate: '',
        secondPreferredDate: '',
        thirdPreferredDate: ''
    });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const setField = (field, value) => {
        setForm({
            ...form,
            [field]: value
        })
        if (!!errors[field]) setErrors({
            ...errors,
            [field]: null
        })
    };

    // const dispatch = useDispatch();

    const validateForm = () => {
        const newErrors = {}
        if (!form.organisingTeacherName || form.organisingTeacherName === '') newErrors.organisingTeacherName = 'This field is required'
        if (!form.email || form.email === '') newErrors.email = 'This field is required'
        if (!form.mobileNumber || form.mobileNumber === '') newErrors.mobileNumber = 'This field is required'
        if (!form.schoolName || form.schoolName === '') newErrors.schoolName = 'This field is required'
        if (!form.address || form.address === '') newErrors.address = 'This field is required'
        if (!form.visitFormat || form.visitFormat === '') newErrors.visitFormat = 'This field is required'
        if (!form.firstPreferredDate || form.firstPreferredDate === '') newErrors.firstPreferredDate = 'This field is required'
        
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            fetch('http://localhost:8000/api/bookings', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form)
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log('Booking Successful:', data);
                    setSubmitted(true); // Update submitted state here
                })
                .catch((error) => {
                    console.error('Error:', error);
                    // Handle errors here, such as showing an error message
                });
    
        }
    };


    return (
        <>
            <Navbar />
            <Background />
            <Cursor />
            <Container className='booking-form'>
                {!submitted ? (
                    <Form>
                        <h2 className='session-title'>Book a Session</h2>
                        <Form.Group controlId="organisingTeacherName">
                            <Form.Label>Organising teacher full name *</Form.Label>
                            <Form.Control type="text"
                                placeholder="Full Name"
                                value={form.organisingTeacherName}
                                onChange={e => setField("organisingTeacherName", e.target.value)}
                                isInvalid={!!errors.organisingTeacherName} />
                            <Form.Control.Feedback type="invalid">
                                {errors.organisingTeacherName}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="email">
                            <Form.Label>Email *</Form.Label>
                            <Form.Control type="email"
                                placeholder="Enter email"
                                value={form.email}
                                onChange={e => setField("email", e.target.value)}
                                isInvalid={!!errors.email} />
                            <Form.Control.Feedback type="invalid">
                                {errors.email}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="mobileNumber">
                            <Form.Label>Mobile number *</Form.Label>
                            <Form.Control type="text"
                                placeholder="Mobile Number"
                                value={form.mobileNumber}
                                onChange={e => setField("mobileNumber", e.target.value)}
                                isInvalid={!!errors.mobileNumber} />
                            <Form.Control.Feedback type="invalid">
                                {errors.mobileNumber}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="schoolName">
                            <Form.Label>School/institution name *</Form.Label>
                            <Form.Control type="text"
                                placeholder="School/Institution Name"
                                value={form.schoolName}
                                onChange={e => setField("schoolName", e.target.value)}
                                isInvalid={!!errors.schoolName} />
                            <Form.Control.Feedback type="invalid">
                                {errors.schoolName}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="address">
                            <Form.Label>Address *</Form.Label>
                            <Form.Control type="text"
                                placeholder="Address"
                                value={form.address}
                                onChange={e => setField("address", e.target.value)}
                                isInvalid={!!errors.address} />
                            <Form.Control.Feedback type="invalid">
                                {errors.address}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="visitFormat">
                            <Form.Label>Visit format: *</Form.Label>
                            <Form.Control
                                as="select"
                                value={form.visitFormat || ''}
                                onChange={(e) => setForm({ ...form, visitFormat: e.target.value })}
                                isInvalid={!!errors.visitFormat}
                            >
                                <option value="">Select</option>
                                <option value="Education session">Education session</option>
                                <option value="Self-guided">Self-guided</option>
                            </Form.Control>
                            <Form.Control.Feedback type="invalid">
                                {errors.visitFormat}
                            </Form.Control.Feedback>
                        </Form.Group>
                        
                        <Form.Label>Date *</Form.Label>
                                <Form.Group controlId="firstPreferredDate">
                                    <Form.Control type="date"
                                        value={form.firstPreferredDate}
                                        onChange={e => setField("firstPreferredDate", e.target.value)}
                                        isInvalid={!!errors.firstPreferredDate} />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.firstPreferredDate}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            
                        

                        <Button variant="primary"
                            type="submit"
                            onClick={handleSubmit}>
                            Submit
                        </Button>
                    </Form>
                ) : (
                    <div>
                        <h2 className='successful-submission'>Thank you for booking a session!</h2>
                    </div>
                )}
            </Container>
        </>
    );
}

export default Booking;
