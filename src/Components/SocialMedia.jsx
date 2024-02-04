import React from 'react';
import './social.css';

const Header = () => {
  return (
    <>
    <div className='flex flex-row bg-gray-300 h-screen p-60'>
      <div className="bg-slate-50 w-96 h-60 rounded-xl shadow-2xl shadow-grey-900 rotate-[25deg] ">
        <img src='./twitter.png' className="image"></img>
        <h1 className="text">128K+ Twitter Followers</h1>
      </div>
      <div className="bg-slate-50 w-96 h-60 rounded-xl shadow-2xl shadow-grey-900 rotate-[10deg] ">
        <img src='./discord.png' className="image"></img>
        <h1 className="text">17K+ Discord Members</h1>
      </div>
      <div className="bg-slate-50 w-96 h-60 rounded-xl shadow-2xl shadow-grey-900 rotate-[-20deg] ">
        <img src='./github.png' className="image"></img>
        <h1 className="text">38K+ Github Stars</h1>
      </div>
      <div className="bg-slate-50 w-96 h-60 rounded-xl shadow-2xl shadow-grey-900 rotate-[-6deg] ">
        <img src='./youtube.png' className="image"></img>
        <h1 className="text">4K+ Youtube Subscribers</h1>
      </div>
      <div className="bg-slate-50 w-96 h-60 rounded-xl shadow-2xl shadow-grey-900 rotate-[-15deg] ">
        <img src='./github.png' className="image"></img>
        <h1 className="text">18K+ Code Commits</h1>
      </div>
    </div>
    </>
  );
};

export default Header;
