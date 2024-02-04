import React from "react";

const Leaderboard = () => {
  return (
    <div className="bg-blue-200">
      <h1 className="m-2 text-7xl p-6 w-fit mx-auto bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-900 font-poppins">
        Leaderboard
      </h1>
      <p className="w-fit mx-auto text-3xl">Check your Rank !!</p>
      <h2 className="w-fit mx-auto my-28 text-8xl bg-clip-text text-transparent bg-gradient-to-r from-pink-900 to-red-500">Top Performers</h2>


      <div className="border border-black mx-5">
        <table className="w-full">
            <thead className="border border-black">
                <tr>
                    <th className="absolute">S. No.</th>
                    <th className="absolute left-[10vw]">Rank</th>
                    <th className="relative left-[-90px]">Participant's Name</th>
                    <th className="absolute left-[80vw]">Contributions/year</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <p>1</p>
                    </td>
                    <td className="absolute left-[10vw]">
                        <p>#1</p>
                    </td>
                    <td className="absolute left-[44vw]">
                        <p>Aryan Pahuja</p>
                    </td>
                    <td className="absolute left-[84vw]">
                        <p>15</p>
                    </td>
                </tr>
                
            </tbody>
        </table>
        </div>
        
    </div>
  );
};

export default Leaderboard;
