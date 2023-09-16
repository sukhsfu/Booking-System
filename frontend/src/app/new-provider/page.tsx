"use client";

import React, { useState } from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Label = styled.label`
  margin-bottom: 8px;
`;

const Input = styled.input`
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 12px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const NewProvider = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    price: "",
  });

  // Function to handle form input changes
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (e: any) => {
    e.preventDefault();
    // You can perform further actions with the form data here
    console.log(formData);
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <Label>Name:</Label>
        <Input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <Label>Email:</Label>
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <Label>Phone:</Label>
        <Input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
        />
        <Label>Service:</Label>
        <Input
          type="text"
          name="service"
          value={formData.service}
          onChange={handleInputChange}
        />
        <Label>Price:</Label>
        <Input
          type="text"
          name="price"
          value={formData.price}
          onChange={handleInputChange}
        />
        <Button type="submit">Submit</Button>
      </Form>
    </FormContainer>
  );
};

export default NewProvider;
