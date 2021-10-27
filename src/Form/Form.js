import React from 'react'

const Form = () => {
    return (
        <section className='container'>
                <form>
                <legend> Form page </legend>
                    <div className='input-field'>
                        <label>Email address</label>
                        <input className='input' type='email' name='email' required />
                    </div>

                    <div className='input-field'>
                        <label>Password</label>
                        <input className='input' type='password' name='password' required />
                    </div>
                    
                    <button type='submit' className='btn btn-submit'>Login</button>
                </form>
        </section>
    )
}

export default Form
