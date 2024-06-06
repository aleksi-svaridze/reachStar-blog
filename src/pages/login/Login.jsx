import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import Modal from "../../components/modal/Modal";
import { useState } from "react";

const Login = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [response, setResponse] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const loginUserHandler = data => {
    axios
        .post('https://apitest.reachstar.io/signin', {email: data.email, password: data.password})
        .then(res => {
            if(res.status === 200) {
                setIsLoggedIn(true)
                navigate('/')
            }
        })
        .catch(err => {
            if(err.message === 'Request failed with status code 422') {
                setResponse('User is allready registered')
            }
        })
}

  return (
    <div className="container mx-auto px-5 py-20 mt-[64px] lg:mt-[100px]">
      <h2 className="text-lg md:text-xl lg:text-3xl text-center text-blue-500 font-bold">
        Log In
      </h2>
      {response && <Modal response={response} />}
      <form className="max-w-[360px] mx-auto mt-5">
        <div className="flex flex-col gap-y-1 mb-2 min-h-[92px]">
          <label
            htmlFor="email"
            className="text-blue-200 font-semibold text-base cursor-pointer"
          >
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter email"
            className="focus:outline-none h-11 pl-4 rounded-lg border border-blue-200 placeholder:text-sm placeholder:text-blue-200 text-blue-200 text-base"
            {...register("email", {
              required: true,
              pattern: /^[a-zA-Z0-9_+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
            })}
          />
          <p className={`text-red-500 text-xs`}>
            {errors.email?.type === "required" && "Email is required"}
          </p>
          <p className={`text-red-500 text-xs`}>
            {errors.email?.type === "pattern" && "Enter right email address"}
          </p>
        </div>

        <div className="flex flex-col gap-y-1 mb-2 min-h-[92px]">
          <label
            htmlFor="password"
            className="text-blue-200 font-semibold text-base cursor-pointer"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter password"
            className="focus:outline-none h-11 pl-4 rounded-lg border border-blue-200 placeholder:text-sm placeholder:text-blue-200 text-blue-200 text-base"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 4,
                message: "Enter at least 4 symbols",
              },
              maxLength: {
                value: 8,
                message: "Maximum 8 symbols are welcome",
              },
            })}
          />
          <p className={`text-red-500 text-xs`}>{errors.password?.message}</p>
        </div>

        <button
          onClick={handleSubmit(loginUserHandler)}
          className="h-11 rounded-lg bg-blue-light text-white w-full font-bold hover:shadow-lg"
        >
          Log in
        </button>
      </form>

      <p className="text-blue-200 text-base font-semibold text-center mt-5">
        Are you new?{" "}
        <Link className="text-blue-light" to="/registration">
          Register now
        </Link>
      </p>
    </div>
  );
};

export default Login;
