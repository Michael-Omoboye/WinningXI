import axios from "axios";
import React, { useEffect, useState } from "react";
import { FormSelect } from "react-bootstrap";
import Form from "react-bootstrap/Form";
export const Standings = () => {
  const [leagueData, setLeagueData] = useState([]);
  const [selectedLeague, setSelectedLeague] = useState("39");

  const leagueOptions = [
    { value: "39", league: "Premier League" },
    { value: "78", league: "Bundesliga" },
    { value: "140", league: "LaLiga" },
    { value: "61", league: "Ligue 1" },
  ];

  const handleChange = (e) => {
    const newLeagueValue = e.target.value;
    setSelectedLeague(newLeagueValue);
  };

  const fetchLeagueData = async () => {
    const options = {
      method: "GET",
      url: "https://api-football-v1.p.rapidapi.com/v3/standings",
      params: {
        season: "2023",
        league: selectedLeague,
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
      setLeagueData(
        <table className="bg-slate-500" style={{fontFamily :"'Hubballi', sans-serif", fontSize:"25px" }}>
          <thead>
            <tr>
              <th className="px-1 text-white">Pos</th>
              <th className="px-1 text-white text-left ">club</th>
              <th className="px-1 text-white">Pts</th>
              <th className="px-1 text-white">+/-</th>
              <th className="px-1 text-white">P</th>
              <th className="px-1 text-white">W</th>
              <th className="px-1 text-white">D</th>
              <th className="px-1 text-white">L</th>
              <th className="px-1 text-white">form</th>
            </tr>
          </thead>
          <tbody>
            {clubs.map((club) => (
              <tr className={club.rank%2 == 0? "bg-slate-500 text-white": "bg-slate-600 text-white"
              } key={club.team.id}
              style={club.rank >17? {color:'red'}: {color: "white"}}
              >
                <td className="w-1/10">{club.rank}</td>
                <td className="flex items-center w-1/10">
                  <img
                    src={club.team.logo}
                    alt={club.team.name + " logo"}
                    style={{ width: "10%" }}
                  />
                  <p className="mx-1 text-white" >{club.team.name}</p>
                </td>
                <td className="p-1 text-white"><p>{club.points}</p></td>
                <td className="p-1 text-white"><p>{club.goalsDiff}</p></td>
                <td className="p-1 text-white"><p>{club.all.played}</p></td>
                <td className="p-1 text-white"><p>{club.all.win}</p></td>
                <td className="p-1 text-white"><p>{club.all.lose}</p></td>
                <td className="p-1 text-white"><p>{club.all.draw}</p></td>
                <td className="p-1 text-white"><p>{club.form}</p></td>
              </tr>
            ))}
          </tbody>



        </table>
      );
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchLeagueData();
  }, [selectedLeague]);
  return (
    <section className="flex flex-col justify-center items-center" style={{fontFamily :"'Hubballi', sans-serif" }}>
      <select value={selectedLeague} onChange={handleChange}>
        {leagueOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.league}
          </option>
        ))}
      </select>
        <h1>Latest Standings</h1>
        {leagueData}
    </section>
  );
};
