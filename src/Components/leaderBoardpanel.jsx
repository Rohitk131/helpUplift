import React from "react";
import "./leaderboard.css";
const Leaderboard = () => {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="https://unpkg.com/@phosphor-icons/web"></script>
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <main>
          <div id="wrapper">
            <div id="header">
              <h1 className="text-5xl font-bold">Ranking</h1>
              <button class="share">
                <i class="ph ph-share-network"><img src="./share.png" className="w-8 ml-4"></img></i>
              </button>
            </div>
            <div id="leaderboard">
              <div class="ribbon"></div>
              <table>
                <tr>
                  <td class="number">1</td>
                  <td class="name">Arjun Patel</td>
                  <td class="points">
                    258.244{" "}
                    <img
                      class="gold-medal"
                      src="https://github.com/malunaridev/Challenges-iCodeThis/blob/master/4-leaderboard/assets/gold-medal.png?raw=true"
                      alt="gold medal"
                    />
                  </td>
                </tr>
                <tr>
                  <td class="number">2</td>
                  <td class="name">Priya Sharma</td>
                  <td class="points">258.242</td>
                </tr>
                <tr>
                  <td class="number">3</td>
                  <td class="name">Vikram Singh</td>
                  <td class="points">258.223</td>
                </tr>
                <tr>
                  <td class="number">4</td>
                  <td class="name">Nisha Gupta</td>
                  <td class="points">258.212</td>
                </tr>
                <tr>
                  <td class="number">5</td>
                  <td class="name">Rahul Malhotra</td>
                  <td class="points">258.208</td>
                </tr>
              </table>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
};

export default Leaderboard;
