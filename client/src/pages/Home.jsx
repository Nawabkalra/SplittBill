import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#fceaff] flex flex-col items-center justify-center font-mono text-center p-4">
      <h1 className="text-4xl font-bold text-[#ff5e5b] mb-4">💸 SplittBill</h1>
      <p className="text-black text-md mb-6 max-w-md">
        The retro way to split your bills with friends. Keep track, stay chill, and go old school with your finances.
      </p>
      <div className="space-x-4">
        <a
          href="/signup"
          className="bg-[#ff5e5b] text-white py-2 px-4 rounded-md border-[2px] border-black shadow-[2px_2px_0px_0px_black] hover:bg-[#e94e4b]"
        >
          Sign Up
        </a>
        <a
          href="/login"
          className="bg-white text-[#ff5e5b] py-2 px-4 rounded-md border-[2px] border-black shadow-[2px_2px_0px_0px_black] hover:bg-[#fff3f3]"
        >
          Login
        </a>
      </div>
    </div>
  );
};

export default Home;
