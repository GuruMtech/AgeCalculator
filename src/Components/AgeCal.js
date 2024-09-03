import React, { useState } from 'react';
import { Button, Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AgeCal.css';

function AgeCal() {
    const [dob, setDob] = useState('');
    const [age, setAge] = useState({ years: 0, months: 0, days: 0 });

    const handleInputChange = (e) => {
        setDob(e.target.value);
    };

    const calculateAge = () => {
        const birthday = new Date(dob);
        const today = new Date();

        let years = today.getFullYear() - birthday.getFullYear();
        let months = today.getMonth() - birthday.getMonth();
        let days = today.getDate() - birthday.getDate();

        if (days < 0) {
            months -= 1;
            days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        }

        if (months < 0) {
            years -= 1;
            months += 12;
        }

        setAge({ years, months, days });
    };

    return (
        <div className="age-calculator">
            <Card className="age-card">
                <Card.Body>
                    <Card.Title className="text-center">Age Calculator</Card.Title>
                    <Row className="justify-content-center">
                        <Col md={6}>
                            <input
                                className="form-control mb-3"
                                type="date"
                                value={dob}
                                onChange={handleInputChange}
                            />
                            <Button
                                className="btn btn-primary w-100 mb-3"
                                onClick={calculateAge}
                            >
                                Calculate Age
                            </Button>
                            <div className="result">
                                <p className="age-text">
                                    Age: {age.years} years, {age.months} months, {age.days} days
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </div>
    );
}

export default AgeCal;
