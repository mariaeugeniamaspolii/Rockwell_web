import React from "react";
import { Form } from "react-bootstrap";
import InputGroup from 'react-bootstrap/InputGroup';

const Input = ({ type, placeholder, icon }) => {
    return (
        <InputGroup>
            <Form.Control
                type={type}
                placeholder={placeholder}
            />
            {icon && (
                <InputGroup.Text className="bg-primary text-white border-none">
                    {icon}
                </InputGroup.Text>
            )}
        </InputGroup>
    )
}

export default Input;