import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import { useForm } from "react-hook-form";


const Registration = () => {
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

    const handleFormSubmitter = (data) => {
        console.log(data)
        axios.post('https://apitest.reachstar.io/signup', {
            name: data.name,
            email: data.email,
            password: data.password
        })
        .then(res => {
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
                <div className="flex flex-col gap-y-1 mb-2 min-h-[92px]">
                    <label htmlFor="name" className="text-blue-200 font-semibold text-base cursor-pointer">Name</label>
                    <input 
                        id="name"
                        type="text"
                        placeholder="Enter name" 
                        className="focus:outline-none h-11 pl-4 rounded-lg border border-blue-200 placeholder:text-sm placeholder:text-blue-200 text-blue-200 text-base" 
                        {...register('name', {required: 'Name is required'})}
                    />
                    <p className={`text-red-500 text-xs`}>{errors.name?.message}</p>
                </div>

                <div className="flex flex-col gap-y-1 mb-2 min-h-[92px]">
                    <label htmlFor="email" className="text-blue-200 font-semibold text-base cursor-pointer">Email Address</label>
                    <input 
                        id="email"
                        type="email" 
                        placeholder="Enter email" 
                        className="focus:outline-none h-11 pl-4 rounded-lg border border-blue-200 placeholder:text-sm placeholder:text-blue-200 text-blue-200 text-base" 
                        {...register('email', {required: true, pattern: /^[a-zA-Z0-9_+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i})}
                    />
                    <p className={`text-red-500 text-xs`}>{errors.email?.type === 'required' && 'Email is required'}</p>
                    <p className={`text-red-500 text-xs`}>{errors.email?.type === 'pattern' && 'Enter right email address'}</p>
                </div>

                <div className="flex flex-col gap-y-1 mb-2 min-h-[92px]">
                    <label htmlFor="password" className="text-blue-200 font-semibold text-base cursor-pointer">Password</label>
                    <input 
                        id="password"
                        type="password"
                        placeholder="Enter password" 
                        className="focus:outline-none h-11 pl-4 rounded-lg border border-blue-200 placeholder:text-sm placeholder:text-blue-200 text-blue-200 text-base"
                        {...register('password', {required: 'Password is required', minLength: {
                            value: 4,
                            message: 'Enter at least 4 symbols'
                        }, maxLength: {
                            value: 8,
                            message: 'Maximum 8 symbols are welcome'
                        }})}
                    />
                    <p className={`text-red-500 text-xs`}>{errors.password?.message}</p>
                </div>

                <button 
                    onClick={handleSubmit(handleFormSubmitter)} 
                    className="h-11 rounded-lg bg-blue-light text-white w-full font-bold hover:shadow-lg">
                        Register
                </button>
            </form>

            <p className="text-blue-200 text-base font-semibold text-center mt-5">Have you an account? <Link className="text-blue-light" to='/login'>Login now</Link></p>
        </div>
    )
}

export default Registration;