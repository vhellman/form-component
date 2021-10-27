import React, { useState } from 'react'

const useForm = (callback) => {

    const [values, setValues] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        callback();
    }
    const handleChange = (event) => {
        // do we need to persist this event? Why?
        setValues( values => ({ ...values, [event.target.name]: event.target.value }) );
    }

    return {
        handleChange,
        handleSubmit,
        values
    }
}

export default useForm
