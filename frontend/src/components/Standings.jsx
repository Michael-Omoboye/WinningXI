import axios from "axios";
import React, { useEffect, useState } from "react";

export const Standings = () => {
  const [epl, setEpl] = useState([]);
  const [bundesliga, setBundesliga] = useState([]);
  const [championsleague, setChampionsleague] = useState([]);
  const fetchDataEpl = async () => {
    const options = {
      method: "GET",
      url: "https://api-football-v1.p.rapidapi.com/v3/standings",
      params: {
        season: "2023",
        league: "39",
      },
      headers: {
        "X-RapidAPI-Key": "fc6d37421fmsh1063f0ca2854726p107fecjsn9c5340af29ad",
        "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      const clubs = response.data.response[0].league.standings[0];
      console.log(clubs);
      setEpl(
        <table className="border-solid">
          <thead>
            <tr className=" border-solid border-indigo-600">
              <th>position</th>
              <th>club</th>
              <th>points</th>
              <th>Gd</th>
              <th>played</th>
              <th>W</th>
              <th>D</th>
              <th>L</th>
              <th>form</th>
            </tr>
          </thead>
          <tbody>
            {clubs.map((club) => (
              <tr key={club.team.id}>
                <td>{club.rank}</td>
                <td>{club.team.name}</td>
                <td>{club.points}</td>
                <td>{club.goalsDiff}</td>
                <td>{club.all.played}</td>
                <td>{club.all.win}</td>
                <td>{club.all.draw}</td>
                <td>{club.all.lose}</td>
                <td>{club.form}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    } catch (error) {
      console.error(error);
    }
  };



  const fetchBundesliga = async()=>{
    

  }

  useEffect(() => {
    fetchEplData();
  }, []);






  return (
    <>
    <select name="" id="">
        <option value="epl">Premier league</option>
        <option value="bundesliga">Bundesliga</option>
        <option value="champions">Champions League</option>
    </select>
    <div className="flex-col justify-center">
      <h1>Todays Standings</h1>
      {epl}
      <p></p>
    </div>
    </>
  );
};
