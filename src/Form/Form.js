import React from 'react'

const Form = () => {
    return (
        <section className='container'>
                <form>
                    <legend> Form page </legend>
                    <div className='input-field'>
                        <input className='input' type='email' name='email' required />
                        <label className='input-label'>Email</label>
                    </div>

                    <div className='input-field'>
                        <input className='input' type='password' name='password' required />
                        <label>Password</label>
                    </div>
                    
                    <button type='submit' className='btn btn-submit'>Login</button>
                </form>
        </section>
    )
}

export default Form
