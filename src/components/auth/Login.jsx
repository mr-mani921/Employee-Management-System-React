import React, { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        console.log("Email is: ",email)
        console.log("Password is: ",password)
        setEmail('');
        setPassword('');
    }

    function onChangeEmail(e) {
        setEmail(e.target.value)
    }
    function onChangePassword(e) {
        setPassword(e.target.value)
    }

  return (
    <div className="bg-[#1c1c1c] flex items-center justify-center w-full h-screen text-white">
      <div className="parentWrapper flex flex-col items-start justify-center">
        <h1 className="text-4xl">Log In</h1>
        <form onSubmit={(e)=> {handleSubmit(e)}} className="flex flex-col items-center justify-center gap-2 h-80 w-[30vw] mt-5 px-5 py-5 border-emerald-400 border-[1px] rounded-xl">
          <input
            className="w-[80%] outline-none border-emerald-300 border-[1px] px-3 py-2 rounded-full bg-transparent placeholder:text-gray-400"
            required
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e)=>{onChangeEmail(e)}}
          />
          <input
            className="w-[80%] outline-none border-emerald-300 border-[1px] px-3 py-2 rounded-full bg-transparent placeholder:text-gray-400"
            required
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e)=>{onChangePassword(e)}}
          />
          <button type="submit" className="w-[80%] bg-emerald-500 text-black font-semibold px-3 py-2 rounded-full bg-transparent">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
