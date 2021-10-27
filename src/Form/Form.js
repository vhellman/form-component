import React from 'react'
import useForm from '../hooks/useForm'



const Form = () => {

    const {values, handleChange, handleSubmit } = useForm(login);

    function login() {
        console.log(values);
    }
    return (
        <section className='container'>
                <form onSubmit={ handleSubmit }>
                    <legend> Form page </legend>
                    <div className='input-field'>
                        <input 
                            className='input' 
                            type='email' 
                            name='email'
                            onChange={ handleChange } 
                            
                            placeholder=' ' // trick for detecting if there is text in field
                            required />
                        <label htmlFor='email'>Email *</label>
                    </div> 

                    <div className='input-field'>
                        <input 
                            className='input' 
                            type='password' 
                            name='password'
                            onChange={ handleChange } 
                            
                            placeholder=' ' // trick for detecting if there is text in field
                            required />
                        <label htmlFor='email' >Password *</label>
                    </div>
                    
                    
                    <button type='submit' className='btn btn-submit'>Login</button>
                </form>
        </section>
    )
}

export default Form
