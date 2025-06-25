import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="min-h-screen bg-retroCream flex justify-center items-center font-retro text-[#1e1e1e]">
      <div className="bg-white border-[4px] border-black px-10 py-8 rounded-xl shadow-[4px_4px_0px_#000] text-center w-[90%] max-w-md">
        <h1 className="text-retroOrange text-4xl mb-2 tracking-wide">Split Bill</h1>
        <h2 className="text-3xl text-black mb-6">Log in</h2>

        <form className="space-y-5">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-lg border-2 border-black bg-retroOrange placeholder-black text-black shadow-[2px_2px_0px_#000]"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-lg border-2 border-black bg-retroOrange placeholder-black text-black shadow-[2px_2px_0px_#000]"
          />

          <button
            type="submit"
            className="w-full py-3 bg-retroTeal text-black font-bold rounded-lg border-2 border-black shadow-[2px_2px_0px_#000] hover:brightness-95"
          >
            LOG IN
          </button>
        </form>

        <p className="text-sm mt-6 text-black">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-retroOrange underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
