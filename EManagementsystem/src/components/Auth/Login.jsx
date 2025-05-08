import React, { useState } from 'react'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        console.log("email is", email)
        console.log("password  is", password)
        // const email = e.target[0].value
        // const password = e.target[1].value
        // console.log(email, password)

        setEmail('')
        setPassword('')
    }


    return (
        <div className='flex h-screen w-screen items-center justify-center'>
            <div className='border-2 rounded-xl border-emerald-600 p-20'>


                <form
                    onSubmit={(e) => submitHandler(e)}
                    className='flex flex-col items-center justify-center'>
                    <input
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }} required className=' outline-none bg-transparent border-2 border-emerald-600 py-3 px-6 text-xl rounded-full placeholder:text-gray-400' type="email" placeholder='Enter your Email' />
                    <input
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }} required className=' outline-none bg-transparent mt-3 border-2 border-emerald-600 py-3 px-6 text-xl rounded-full placeholder:text-gray-400' type="password" placeholder='Enter your password' />
                    <p className='text-red-400'></p>
                    <button className='mt-7 text-white hover:bg-emerald-700 font-semibold outline-none border-none bg-emerald-600 py-2 px-8 w-full text-xl rounded-full placeholder:text-white '>Login in</button>
                </form>
            </div>

        </div>
    )
}

export default Login
