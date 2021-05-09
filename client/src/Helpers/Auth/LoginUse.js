import React, { useState, useEffect } from "react";

const LoginUse = (validationFunc, callbackFunction) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validationFunc(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callbackFunction();
    }
  }, [errors]);

  return { handleChange, handleSubmit, values, errors };
};

export default LoginUse;
