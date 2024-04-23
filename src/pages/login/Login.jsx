import { Link } from "react-router-dom";

const Login = ({email, setEmail, password, setPassword, loginUserHandler}) => {

    return(
        <div className="container mx-auto px-5 py-20">
            <h2 className="text-lg md:text-xl lg:text-3xl text-center font-roboto text-blue-500 font-bold">Log In</h2>
            <form className="max-w-[360px] mx-auto mt-5">
                <div className="flex flex-col gap-y-2 mb-5">
                    <label htmlFor="email" className="text-blue-200 font-semibold text-base cursor-pointer">Email Address</label>
                    <input 
                        id="email"
                        type="email" 
                        placeholder="Enter email" 
                        value={email}
                        name="email"
                        onChange={e => setEmail(e.target.value)}
                        className="focus:outline-none h-11 pl-4 rounded-lg border border-blue-200 placeholder:text-sm placeholder:text-blue-200 text-blue-200 text-base" />
                </div>

                <div className="flex flex-col gap-y-2 mb-7">
                    <label htmlFor="password" className="text-blue-200 font-semibold text-base cursor-pointer">Password</label>
                    <input 
                        id="password"
                        type="password" 
                        name="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder="Enter password" 
                        className="focus:outline-none h-11 pl-4 rounded-lg border border-blue-200 placeholder:text-sm placeholder:text-blue-200 text-blue-200 text-base" />
                </div>

                <button onClick={loginUserHandler} className="h-11 rounded-lg bg-blue-light text-white w-full font-bold font-roboto hover:shadow-lg">Log in</button>
            </form>
            <p className="text-blue-200 text-base font-semibold text-center mt-5">Have not you an account? <Link className="text-blue-light" to='/registration'>Register now</Link></p>
        </div>
    )
}

export default Login;