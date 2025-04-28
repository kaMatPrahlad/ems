import React from 'react'

const Login = () => {
    return (
        <div className='flex items-center justify-center'>
            <div className='border-2 border-red-600'>


                <form >
                    <input type="email" placeholder='Enter your Email' />
                    <input type="password" placeholder='Enter your password' />
                    <p className='text-red-400'>hello</p>
                </form>
            </div>

        </div>
    )
}

export default Login
