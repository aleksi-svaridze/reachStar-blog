import { Link } from "react-router-dom";

const Login = ({email, setEmail, password, setPassword, loginUserHandler, isError}) => {

    return(
        <div className="container mx-auto px-5 py-20 mt-[64px] lg:mt-[100px]">
            <h2 className="text-lg md:text-xl lg:text-3xl text-center text-blue-500 font-bold">Log In</h2>
            <form className="max-w-[360px] mx-auto mt-5">
                <div className="flex flex-col mb-5 min-h-[100px]">
                    <label 
                        htmlFor="email" 
                        className="text-blue-200 font-semibold text-base cursor-pointer">
                            Enter Email
                    </label>
                    <input 
                        id="email"
                        type="email" 
                        placeholder="Enter email" 
                        value={email}
                        name="email"
                        onChange={e => setEmail(e.target.value)}
                        className="focus:outline-none mt-2 mb-1 h-11 pl-4 rounded-lg border border-blue-200 placeholder:text-sm placeholder:text-blue-200 text-blue-200 text-base"
                    />
                    {/* <p className={`text-red-500 text-xs`}>{isError ? 'შეყვანილი მომხმარებელი არ არის რეგისტრირებული' : ''}</p> */}
                </div>

                <div className="flex flex-col mb-7 min-h-[100px]">
                    <label 
                        htmlFor="password" 
                        className="text-blue-200 font-semibold text-base cursor-pointer">
                            Password
                    </label>
                    <input 
                        id="password"
                        type="password" 
                        name="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder="Enter password" 
                        className="focus:outline-none mt-2 mb-1 h-11 pl-4 rounded-lg border border-blue-200 placeholder:text-sm placeholder:text-blue-200 text-blue-200 text-base" 
                    />
                    {/* <p className="text-red-500 text-xs">{isError ? 'პაროლი არასწორია' : ''}</p> */}
                </div>

                <button onClick={loginUserHandler} className="h-11 rounded-lg bg-blue-light text-white w-full font-bold hover:shadow-lg">Log in</button>
            </form>
            <p className="text-blue-200 text-base font-semibold text-center mt-5">Have not you an account? <Link className="text-blue-light" to='/registration'>Register now</Link></p>
        </div>
    )
}

export default Login;