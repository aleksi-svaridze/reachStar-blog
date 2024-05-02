import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios'



const Registration = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const signUpHandler = e => {
        e.preventDefault();
        axios.post('https://apitest.reachstar.io/signup', {
            'name': name,
            'email': email,
            'password': password
        })
        .then(res => {
            console.log(res)
            if(res.status === 200) {
                navigate('/login')
            }
        })
        .catch(err => console.log(err.message ))
    }

    return(
        <div className="container mx-auto px-5 py-20 mt-[64px] lg:mt-[100px]">
            <h2 className="text-lg md:text-xl lg:text-3xl text-center text-blue-500 font-bold">Sign Up</h2>
            <form className="max-w-[360px] mx-auto mt-5">
                <div className="flex flex-col gap-y-2 mb-5" id="">
                    <label htmlFor="name" className="text-blue-200 font-semibold text-base cursor-pointer">Name</label>
                    <input 
                        id="name"
                        type="text" 
                        name='name'
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="Enter name" 
                        className="focus:outline-none h-11 pl-4 rounded-lg border border-blue-200 placeholder:text-sm placeholder:text-blue-200 text-blue-200 text-base" />
                </div>

                <div className="flex flex-col gap-y-2 mb-5">
                    <label htmlFor="email" className="text-blue-200 font-semibold text-base cursor-pointer">Email Address</label>
                    <input 
                        id="email"
                        type="email" 
                        name="email"
                        value={email}
                        placeholder="Enter email" 
                        onChange={e => setEmail(e.target.value)}
                        className="focus:outline-none h-11 pl-4 rounded-lg border border-blue-200 placeholder:text-sm placeholder:text-blue-200 text-blue-200 text-base" />
                </div>

                <div className="flex flex-col gap-y-2 mb-7">
                    <label htmlFor="password" className="text-blue-200 font-semibold text-base cursor-pointer">Password</label>
                    <input 
                        id="password"
                        value={password}
                        name='password'
                        type="password" 
                        onChange={e => setPassword(e.target.value)}
                        placeholder="Enter password" 
                        className="focus:outline-none h-11 pl-4 rounded-lg border border-blue-200 placeholder:text-sm placeholder:text-blue-200 text-blue-200 text-base" />
                </div>

                <button onClick={signUpHandler} className="h-11 rounded-lg bg-blue-light text-white w-full font-bold hover:shadow-lg">Register</button>
            </form>
            <p className="text-blue-200 text-base font-semibold text-center mt-5">Have you an account? <Link className="text-blue-light" to='/login'>Login now</Link></p>
        </div>
    )
}

export default Registration;