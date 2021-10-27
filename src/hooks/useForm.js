import React, { useState } from 'react'

const useForm = (callback) => {

    const [values, setValues] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        callback();
    }
    const handleChange = (event) => {
        setValues( values => ({ ...values, [event.target.name]: event.target.value }) );
    }

    return {
        handleChange,
        handleSubmit,
        values
    }
}

export default useForm
