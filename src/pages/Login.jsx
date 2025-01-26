import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();

  const getValue = (event) => {
    event.preventDefault();

    console.log([email.current.value, password.current.value]);

    const info = {
      email: email.current.value,
      password: password.current.value,
    };

    [
      email.current.value,
      password.current.value,
    ] = ["", "", "", ""];

    axios
      .post("http://localhost:3000/api/v1/login", info)
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="min-h-screen flex justify-center text-center text-1xl bg-gradient-to-r from-[#b41938] to-[#aa485b]">
        <div className="sm:w-[35rem] w-[90%] h-max m-3 pb-5 text-center rounded-lg bg-white shadow-2xl shadow-black mt-[5%]">
          <h1 className="text-[#b41938] text-4xl font-bold pt-3 mb-9 m-4">
            Login User
          </h1>
          <form onSubmit={getValue}>
            <input
              type="text"
              placeholder="Email Address"
              className="input input-bordered input-secondary w-full max-w-xs m-3"
              ref={email}
            />
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered input-secondary w-full max-w-xs m-3"
              ref={password}
            />
            <br />
            <button
              type="submit"
              className="btn btn-sm text-xl pb-1 px-[23%] bg-[#b41938] text-white hover:bg-[#b41938] hover:text-white btn-[#b41938] "
            >
              Submit
            </button>
          </form>
          <div className="flex justify-start  ml-[22%] m-4">
            <Link to="/register" className="text-sm text-[#b41938] underline">
              Not a User ?
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
