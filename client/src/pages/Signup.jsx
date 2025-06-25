import React from 'react';

const Signup = () => {
  return (
    <div className="min-h-screen bg-[#fff6e8] flex justify-center items-center font-mono">
      <div className="bg-[#fff1e6] border-[4px] border-black rounded-xl shadow-[4px_4px_0px_0px_black] p-8 w-80">
        <h2 className="text-2xl font-bold text-center text-[#ff5e5b] mb-6">Create Account</h2>
        <form>
          <label className="block text-sm mb-2 text-black">Username</label>
          <input
            type="text"
            className="w-full mb-4 px-3 py-2 border-[2px] border-black rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-[#ff5e5b]"
            placeholder="yourname"
          />

          <label className="block text-sm mb-2 text-black">Email</label>
          <input
            type="email"
            className="w-full mb-4 px-3 py-2 border-[2px] border-black rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-[#ff5e5b]"
            placeholder="you@example.com"
          />

          <label className="block text-sm mb-2 text-black">Password</label>
          <input
            type="password"
            className="w-full mb-6 px-3 py-2 border-[2px] border-black rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-[#ff5e5b]"
            placeholder="••••••••"
          />

          <button
            type="submit"
            className="w-full bg-[#ff5e5b] text-white font-semibold py-2 px-4 border-[2px] border-black rounded-md hover:bg-[#e94e4b] transition-all shadow-[2px_2px_0px_0px_black]"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          Already have an account? <a href="/login" className="text-[#ff5e5b] underline">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
